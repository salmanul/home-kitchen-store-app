export type Shop = {
  name: string;
  description: string;
  primaryDomain: {
    url: string;
  };
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type Image = {
  url: string;
  altText: string | null;
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  quantityAvailable?: number | null;
  price: Money;
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  featuredImage: Image | null;
  images?: Image[];
  tags?: string[];
  priceRange: {
    minVariantPrice: Money;
    maxVariantPrice?: Money;
  };
  variants?: ProductVariant[];
};

export type Collection = {
  id: string;
  handle: string;
  title: string;
  description: string;
};

export type CollectionWithProducts = Collection & {
  products: Product[];
};

export type HomePageData = {
  shop: Shop;
  collections: Collection[];
  products: Product[];
};

type ProductsConnection = {
  nodes: Product[];
};

type CollectionsConnection = {
  nodes: Collection[];
};

function normalizeShopDomain(domain: string) {
  return domain.replace(/^https?:\/\//, "").replace(/\/+$/, "");
}

function getShopifyConfig() {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const privateToken = process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN;
  const publicToken = process.env.SHOPIFY_STOREFRONT_PUBLIC_TOKEN;
  const apiVersion = process.env.SHOPIFY_STOREFRONT_API_VERSION || "2026-01";

  if (!domain || !privateToken || !publicToken) {
    return null;
  }

  return {
    domain: normalizeShopDomain(domain),
    privateToken,
    publicToken,
    apiVersion,
  };
}

export function hasShopifyConfig() {
  return Boolean(getShopifyConfig());
}

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const config = getShopifyConfig();

  if (!config) {
    throw new Error("Missing Shopify environment variables.");
  }

  const response = await fetch(
    `https://${config.domain}/api/${config.apiVersion}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Shopify-Storefront-Private-Token": config.privateToken,
      },
      body: JSON.stringify({ query, variables }),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`Shopify request failed with status ${response.status}.`);
  }

  const body = (await response.json()) as {
    data?: T;
    errors?: Array<{ message: string }>;
  };

  if (body.errors?.length) {
    throw new Error(body.errors.map((error) => error.message).join(", "));
  }

  if (!body.data) {
    throw new Error("Shopify response did not include data.");
  }

  return body.data;
}

const PRODUCT_CARD_FIELDS = `
  id
  handle
  title
  description
  featuredImage {
    url
    altText
  }
  priceRange {
    minVariantPrice {
      amount
      currencyCode
    }
    maxVariantPrice {
      amount
      currencyCode
    }
  }
`;

const PRODUCT_DETAIL_FIELDS = `
  id
  handle
  title
  description
  tags
  featuredImage {
    url
    altText
  }
  images(first: 6) {
    nodes {
      url
      altText
    }
  }
  priceRange {
    minVariantPrice {
      amount
      currencyCode
    }
    maxVariantPrice {
      amount
      currencyCode
    }
  }
  variants(first: 10) {
    nodes {
      id
      title
      availableForSale
      quantityAvailable
      price {
        amount
        currencyCode
      }
      selectedOptions {
        name
        value
      }
    }
  }
`;

export async function getHomePageData(): Promise<HomePageData> {
  const data = await shopifyFetch<{
    shop: Shop;
    collections: CollectionsConnection;
    products: ProductsConnection;
  }>(
    `
      query StorefrontHomePage {
        shop {
          name
          description
          primaryDomain {
            url
          }
        }
        collections(first: 6, sortKey: UPDATED_AT) {
          nodes {
            id
            handle
            title
            description
          }
        }
        products(first: 8, sortKey: BEST_SELLING) {
          nodes {
            ${PRODUCT_CARD_FIELDS}
          }
        }
      }
    `,
  );

  return {
    shop: data.shop,
    collections: data.collections.nodes,
    products: data.products.nodes,
  };
}

export async function getCollections() {
  const data = await shopifyFetch<{
    collections: CollectionsConnection;
  }>(
    `
      query AllCollections {
        collections(first: 24, sortKey: UPDATED_AT) {
          nodes {
            id
            handle
            title
            description
          }
        }
      }
    `,
  );

  return data.collections.nodes;
}

export async function getCollectionByHandle(handle: string) {
  const data = await shopifyFetch<{
    collection: (Collection & {
      products: ProductsConnection;
    }) | null;
  }>(
    `
      query CollectionByHandle($handle: String!) {
        collection(handle: $handle) {
          id
          handle
          title
          description
          products(first: 24, sortKey: BEST_SELLING) {
            nodes {
              ${PRODUCT_CARD_FIELDS}
            }
          }
        }
      }
    `,
    { handle },
  );

  if (!data.collection) {
    return null;
  }

  return {
    ...data.collection,
    products: data.collection.products.nodes,
  } satisfies CollectionWithProducts;
}

export async function getProducts() {
  const data = await shopifyFetch<{
    products: ProductsConnection;
  }>(
    `
      query AllProducts {
        products(first: 24, sortKey: BEST_SELLING) {
          nodes {
            ${PRODUCT_CARD_FIELDS}
          }
        }
      }
    `,
  );

  return data.products.nodes;
}

export async function getProductByHandle(handle: string) {
  const data = await shopifyFetch<{
    product: (Omit<Product, "images" | "variants"> & {
      images: {
        nodes: Image[];
      };
      variants: {
        nodes: ProductVariant[];
      };
    }) | null;
  }>(
    `
      query ProductByHandle($handle: String!) {
        product(handle: $handle) {
          ${PRODUCT_DETAIL_FIELDS}
        }
      }
    `,
    { handle },
  );

  if (!data.product) {
    return null;
  }

  return {
    ...data.product,
    images: data.product.images.nodes,
    variants: data.product.variants.nodes,
  } satisfies Product;
}

export function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(Number(amount));
}
