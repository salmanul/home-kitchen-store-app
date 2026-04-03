import { NextResponse } from "next/server";
import { getHomePageData, hasShopifyConfig } from "@/lib/shopify";

export async function GET() {
  if (!hasShopifyConfig()) {
    return NextResponse.json(
      {
        ok: false,
        message: "Missing Shopify environment variables.",
      },
      { status: 500 },
    );
  }

  try {
    const data = await getHomePageData();

    return NextResponse.json({
      ok: true,
      shop: data.shop.name,
      collections: data.collections.length,
      products: data.products.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Unknown Shopify error.",
      },
      { status: 500 },
    );
  }
}
