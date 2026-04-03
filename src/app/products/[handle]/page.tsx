import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCatalogProductByHandle, getCatalogProducts } from "@/lib/catalog";
import { formatPrice } from "@/lib/shopify";
import { WhatsAppOrderBtn } from "@/components/whatsapp-order-btn";

type ProductPageProps = {
  params: Promise<{
    handle: string;
  }>;
};

export async function generateStaticParams() {
  const products = await getCatalogProducts();
  return products.map((product) => ({
    handle: product.handle,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = await getCatalogProductByHandle(handle);

  return {
    title: product ? `${product.title} | Home Kitchen Store` : "Product | Home Kitchen Store",
    description: product?.description || "Shop home kitchen essentials.",
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = await getCatalogProductByHandle(handle);

  if (!product) {
    notFound();
  }

  const primaryImage = product.images?.[0] || product.featuredImage;
  const primaryVariant = product.variants?.[0];
  const minPrice = product.priceRange.minVariantPrice;
  const maxPrice = product.priceRange.maxVariantPrice;
  const hasComparePrice = maxPrice && Number(maxPrice.amount) > Number(minPrice.amount);
  const checkoutLink = product.handle
    ? `https://${process.env.SHOPIFY_STORE_DOMAIN?.replace(/^https?:\/\//, "").replace(/\/+$/, "") || "home-kitchen-20270.myshopify.com"}/products/${product.handle}`
    : "#";

  return (
    <main className="shell">
      <section className="productDetail">
        <div className="productGallery">
          <div className="productHeroImage">
            {primaryImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img alt={primaryImage.altText || product.title} className="productImage" src={primaryImage.url} />
            ) : (
              <div className="productImageFallback">No image</div>
            )}
          </div>
          {product.images?.length ? (
            <div className="thumbGrid">
              {product.images.map((image) => (
                <div className="thumbCard" key={image.url}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt={image.altText || product.title} className="thumbImage" src={image.url} />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="productInfo">
          <p className="eyebrow">Product detail</p>
          <h1>{product.title}</h1>

          <div className="priceLineDetail">
            <span className="priceNow">
              {formatPrice(minPrice.amount, minPrice.currencyCode)}
            </span>
            {hasComparePrice && (
              <span className="priceWas">
                {formatPrice(maxPrice.amount, maxPrice.currencyCode)}
              </span>
            )}
          </div>

          <p className="lede">{product.description || "Add detailed copy, care instructions, and feature highlights in Shopify."}</p>

          {product.tags?.length ? (
            <div className="chipRow">
              {product.tags.map((tag) => (
                <span className="chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {product.variants?.length ? (
            <section className="variantPanel">
              <h2>Variants</h2>
              <div className="variantList">
                {product.variants.map((variant) => (
                  <div className="variantRow" key={variant.id}>
                    <div>
                      <strong>{variant.title}</strong>
                      {variant.selectedOptions.length ? (
                        <p>
                          {variant.selectedOptions.map((option) => `${option.name}: ${option.value}`).join(" • ")}
                        </p>
                      ) : null}
                    </div>
                    <div className="variantMeta">
                      <span>{formatPrice(variant.price.amount, variant.price.currencyCode)}</span>
                      <span>{variant.availableForSale ? "In stock" : "Sold out"}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <div className="heroActions">
            <WhatsAppOrderBtn
              className="button primary"
              productName={product.title}
              price={formatPrice(minPrice.amount, minPrice.currencyCode)}
              style={{ gap: 8 }}
            />
            <a className="button secondary" href={checkoutLink} rel="noreferrer" target="_blank">
              View on Shopify
            </a>
            <Link className="button secondary" href="/collections">
              Back to Collections
            </Link>
          </div>

          {primaryVariant?.quantityAvailable !== undefined && primaryVariant?.quantityAvailable !== null ? (
            <p className="inventoryNote">
              <span style={{ color: "var(--green)", fontWeight: 600 }}>●</span>{" "}
              {primaryVariant.quantityAvailable} in stock
            </p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
