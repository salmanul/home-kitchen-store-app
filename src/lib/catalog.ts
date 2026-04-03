import {
  getCollectionByHandle,
  getCollections,
  getHomePageData,
  getProductByHandle,
  getProducts,
  hasShopifyConfig,
  type Collection,
  type CollectionWithProducts,
  type HomePageData,
  type Product,
} from "@/lib/shopify";
import {
  getMockCollectionByHandle,
  getMockProductByHandle,
  mockCollections,
  mockProducts,
  mockShop,
} from "@/lib/mock-data";

export async function getCatalogHomePageData(): Promise<HomePageData> {
  if (!hasShopifyConfig()) {
    return {
      shop: mockShop,
      collections: mockCollections,
      products: mockProducts.slice(0, 8),
    };
  }

  const data = await getHomePageData();
  if (data.products.length) {
    return data;
  }

  return {
    shop: data.shop,
    collections: data.collections.length ? data.collections : mockCollections,
    products: mockProducts.slice(0, 8),
  };
}

export async function getCatalogCollections(): Promise<Collection[]> {
  if (!hasShopifyConfig()) {
    return mockCollections;
  }

  const collections = await getCollections();
  return collections.length ? collections : mockCollections;
}

export async function getCatalogCollectionByHandle(handle: string): Promise<CollectionWithProducts | null> {
  if (!hasShopifyConfig()) {
    return getMockCollectionByHandle(handle);
  }

  const collection = await getCollectionByHandle(handle);
  if (collection) {
    if (collection.products.length) {
      return collection;
    }

    const mockCollection = getMockCollectionByHandle(handle);
    return mockCollection ? { ...collection, products: mockCollection.products } : collection;
  }

  return getMockCollectionByHandle(handle);
}

export async function getCatalogProducts(): Promise<Product[]> {
  if (!hasShopifyConfig()) {
    return mockProducts;
  }

  const products = await getProducts();
  return products.length ? products : mockProducts;
}

export async function getCatalogProductByHandle(handle: string): Promise<Product | null> {
  if (!hasShopifyConfig()) {
    return getMockProductByHandle(handle);
  }

  return (await getProductByHandle(handle)) || getMockProductByHandle(handle);
}
