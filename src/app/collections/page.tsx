import { CollectionCard } from "@/components/collection-card";
import { getCatalogCollections } from "@/lib/catalog";

export const metadata = {
  title: "Collections | Home Kitchen Store",
  description: "Browse cookware, kitchen tools, storage, dining, and home essentials.",
};

export default async function CollectionsPage() {
  const collections = await getCatalogCollections();

  return (
    <main className="shell">
      <section className="section pageIntro">
        <p className="eyebrow">Catalog</p>
        <h1>All Collections</h1>
        <p className="lede">
          Organize your home kitchen store into clear buying paths like cookware, prep tools, pantry storage, and
          dining.
        </p>
      </section>

      <section className="section">
        <div className="categoryBubbleGrid">
          {collections.map((collection) => (
            <CollectionCard collection={collection} key={collection.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
