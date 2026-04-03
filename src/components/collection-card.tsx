import Link from "next/link";
import { type Collection } from "@/lib/shopify";

type CollectionCardProps = {
  collection: Collection;
};

const collectionEmoji: Record<string, string> = {
  cookware: "🍳",
  storage: "🫙",
  appliances: "⚡",
  dining: "🍽️",
  tools: "🔪",
  cleaning: "🧹",
};

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <article className="categoryBubbleCard">
      <Link className="categoryBubbleLink" href={`/collections/${collection.handle}`}>
        <div className="categoryBubbleIcon">
          {collectionEmoji[collection.handle] || collection.title.slice(0, 1)}
        </div>
        <h3>{collection.title}</h3>
      </Link>
    </article>
  );
}
