import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { getCatalogCollectionByHandle, getCatalogCollections } from "@/lib/catalog";

type CollectionPageProps = {
  params: Promise<{
    handle: string;
  }>;
};

export async function generateStaticParams() {
  const collections = await getCatalogCollections();
  return collections.map((collection) => ({
    handle: collection.handle,
  }));
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { handle } = await params;
  const collection = await getCatalogCollectionByHandle(handle);

  return {
    title: collection ? `${collection.title} | Home Kitchen Store` : "Collection | Home Kitchen Store",
    description: collection?.description || "Shop curated home kitchen products.",
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { handle } = await params;
  const collection = await getCatalogCollectionByHandle(handle);

  if (!collection) {
    notFound();
  }

  return (
    <main className="shell">
      <section className="section pageIntro">
        <p className="eyebrow">Collection</p>
        <h1>{collection.title}</h1>
        <p className="lede">{collection.description || "Products curated from your Shopify collection."}</p>
      </section>

      <section className="section">
        {collection.products.length ? (
          <div className="productGrid">
            {collection.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="emptyPanel">
            <h2>No products are published in this collection yet.</h2>
            <p>Publish products to the Headless sales channel in Shopify to make them appear here.</p>
          </div>
        )}
      </section>
    </main>
  );
}
