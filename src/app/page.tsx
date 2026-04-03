import Link from "next/link";
import { CollectionCard } from "@/components/collection-card";
import { ProductCard } from "@/components/product-card";
import { getCatalogHomePageData } from "@/lib/catalog";
import {
  mockDealCards,
  mockFeatures,
  mockPromoCards,
  mockServiceHighlights,
  mockTestimonials,
} from "@/lib/mock-data";

export default async function HomePage() {
  const data = await getCatalogHomePageData();
  const featuredProducts = data.products.slice(0, 4);
  const bestSellers = data.products.slice(4, 8).length ? data.products.slice(4, 8) : data.products.slice(0, 4);

  return (
    <main className="shell">
      {/* ====== Hero + Side Promos ====== */}
      <section className="heroGrid">
        <article className="heroPanel">
          <p className="eyebrow">PREMIUM COLLECTION</p>
          <h1>{data.shop.name || "Home Kitchen Store"}</h1>
          <p className="lede">
            Curated cookware, countertop tools, serveware, and pantry organizers for calm, well-styled kitchens.
          </p>
          <div className="heroActions">
            <Link className="button primary" href="/collections">
              Shop Now
            </Link>
            <Link className="button secondary" href="/collections">
              Browse Categories
            </Link>
          </div>
        </article>

        <div className="heroSideStack">
          {mockPromoCards.map((promo) => (
            <article className="promoCard" key={promo.title}>
              <div className="promoCopy">
                <span className="promoSaveBadge">{promo.subtitle}</span>
                <h3>{promo.title}</h3>
                <p>{promo.description}</p>
                <Link className="inlineLink" href={promo.href}>
                  Shop Now →
                </Link>
              </div>
              <div className="promoImageWrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={promo.title} className="promoImage" src={promo.image} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ====== Service Strip ====== */}
      <section className="serviceStrip">
        {mockServiceHighlights.map((item, i) => (
          <article className="serviceItem" key={item.title}>
            <div className="serviceIcon">
              {["🚚", "↩️", "🔒", "💬"][i]}
            </div>
            <div className="serviceText">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>

      {/* ====== Browse by Category ====== */}
      <section className="section">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Shop by category</p>
            <h2>Browse by Category</h2>
          </div>
        </div>
        <div className="categoryBubbleGrid">
          {data.collections.map((collection) => (
            <CollectionCard collection={collection} key={collection.id} />
          ))}
        </div>
      </section>

      {/* ====== New Arrivals ====== */}
      <section className="section">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Just in</p>
            <h2>New Arrivals</h2>
          </div>
          <Link className="viewAllLink" href="/collections">
            View All →
          </Link>
        </div>
        <div className="productGrid">
          {featuredProducts.map((product) => (
            <ProductCard badge="NEW" key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ====== Promo Banner ====== */}
      <section className="promoBand">
        <div className="promoBandCopy">
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>UP TO 30% OFF</p>
          <h2>Refresh your kitchen with tactile materials and compact countertop essentials.</h2>
          <p>
            Build a store experience around neutral finishes, useful tools, and products
            that feel right at home in a modern kitchen.
          </p>
          <div className="heroActions">
            <Link className="button primary" href="/collections/cookware">
              Buy Now
            </Link>
          </div>
        </div>
      </section>

      {/* ====== Deal Cards ====== */}
      <section className="dealGrid">
        {mockDealCards.map((deal) => (
          <article className="dealCard" key={deal.title}>
            <span className="dealBadge">{deal.badge}</span>
            <h3>{deal.title}</h3>
            <p>{deal.description}</p>
            <Link className="button accent" href={deal.href}>
              Explore
            </Link>
          </article>
        ))}
      </section>

      {/* ====== Best Sellers ====== */}
      <section className="section">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Top rated</p>
            <h2>Best Sellers</h2>
          </div>
          <Link className="viewAllLink" href="/collections">
            View All →
          </Link>
        </div>
        <div className="productGrid">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ====== Countdown / Limited Offer ====== */}
      <section className="countdownBand">
        <div className="countdownCopy">
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>LIMITED TIME OFFER</p>
          <h2>Enhance Your Cooking Corner</h2>
          <p>Launch-week bundle discounts for cookware, storage, and small appliances.</p>
          <div className="countdownGrid">
            {mockFeatures.map((feature) => (
              <article className="countdownBox" key={feature.title}>
                <strong>{feature.title}</strong>
                <span>{feature.description}</span>
              </article>
            ))}
          </div>
          <Link className="button primary" href="/collections/appliances" style={{ background: "#fff", color: "#3c50e0" }}>
            Shop Now
          </Link>
        </div>
      </section>

      {/* ====== Testimonials ====== */}
      <section className="section">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Reviews</p>
            <h2>User Feedbacks</h2>
          </div>
        </div>
        <div className="testimonialGrid">
          {mockTestimonials.map((item) => (
            <article className="testimonialCard" key={item.name}>
              <div className="testimonialStars">
                {"★★★★★"}
              </div>
              <p>{item.quote}</p>
              <div>
                <strong>{item.name}</strong>
                <br />
                <span>{item.location}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ====== Newsletter ====== */}
      <section className="newsletterBand">
        <h2>Don&apos;t Miss Out Latest Trends &amp; Offers</h2>
        <p>Register to receive news about the latest offers &amp; discount codes</p>
        <div className="newsletterForm">
          <input placeholder="Enter your email address" type="email" />
          <button type="button">Subscribe</button>
        </div>
      </section>
    </main>
  );
}
