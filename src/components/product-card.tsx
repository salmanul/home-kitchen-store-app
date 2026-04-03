import Link from "next/link";
import { formatPrice, type Product } from "@/lib/shopify";

type ProductCardProps = {
  product: Product;
  badge?: string;
};

export function ProductCard({ product, badge }: ProductCardProps) {
  const minPrice = product.priceRange.minVariantPrice;
  const maxPrice = product.priceRange.maxVariantPrice;
  const hasComparePrice = maxPrice && Number(maxPrice.amount) > Number(minPrice.amount);

  return (
    <article className="productCard">
      <Link className="productCardLink" href={`/products/${product.handle}`}>
        <div className="productImageWrap">
          {badge && <span className="productBadge sale">{badge}</span>}
          {!badge && product.tags?.includes("Best Seller") && (
            <span className="productBadge new">HOT</span>
          )}
          <div className="productActions">
            <button aria-label="Quick view" className="productActionBtn" type="button">
              <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
            <button aria-label="Add to wishlist" className="productActionBtn" type="button">
              <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>
          {product.featuredImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt={product.featuredImage.altText || product.title}
              className="productImage"
              src={product.featuredImage.url}
            />
          ) : (
            <div className="productImageFallback">No image</div>
          )}
        </div>
        <div className="productCopy">
          <h3>{product.title}</h3>
          <div className="priceLine">
            <span className="priceNow">
              {formatPrice(minPrice.amount, minPrice.currencyCode)}
            </span>
            {hasComparePrice && (
              <span className="priceWas">
                {formatPrice(maxPrice.amount, maxPrice.currencyCode)}
              </span>
            )}
          </div>
        </div>
      </Link>
      <div style={{ padding: "0 16px 16px" }}>
        <button className="addToCartBtn" type="button">
          <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
