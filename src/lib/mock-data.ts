import type { Collection, CollectionWithProducts, Product, Shop } from "@/lib/shopify";

type Feature = {
  title: string;
  description: string;
};

type PromoCard = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  image: string;
};

type ServiceHighlight = {
  title: string;
  description: string;
};

type DealCard = {
  title: string;
  description: string;
  badge: string;
  href: string;
};

type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

export const mockShop: Shop = {
  name: "Home Kitchen Atelier",
  description: "Modern kitchenware and home essentials curated for everyday cooking.",
  primaryDomain: {
    url: "https://home-kitchen-20270.myshopify.com",
  },
};

export const mockCollections: Collection[] = [
  {
    id: "col-cookware",
    handle: "cookware",
    title: "Cookware",
    description: "Ceramic pans, cast iron, and non-stick essentials for daily cooking.",
  },
  {
    id: "col-storage",
    handle: "storage",
    title: "Kitchen Storage",
    description: "Glass canisters, spice racks, and pantry organizers that reduce clutter.",
  },
  {
    id: "col-appliances",
    handle: "appliances",
    title: "Small Appliances",
    description: "Compact coffee makers, air fryers, kettles, and countertop companions.",
  },
  {
    id: "col-dining",
    handle: "dining",
    title: "Dining & Serveware",
    description: "Serve dinner with stoneware plates, trays, cutlery, and table accents.",
  },
  {
    id: "col-tools",
    handle: "tools",
    title: "Prep Tools",
    description: "Knives, peelers, boards, and gadgets designed for fast, clean prep.",
  },
  {
    id: "col-cleaning",
    handle: "cleaning",
    title: "Cleaning",
    description: "Sink accessories, drying racks, scrubbers, and countertop care tools.",
  },
];

export const mockProducts: Product[] = [
  {
    id: "prod-ceramic-pan",
    handle: "ceramic-saute-pan",
    title: "Ceramic Saute Pan",
    description: "A matte ceramic saute pan with a stay-cool handle for everyday stovetop meals.",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1584990347449-a3d4fcd5d64c?auto=format&fit=crop&w=1200&q=80",
      altText: "Ceramic saute pan",
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1584990347449-a3d4fcd5d64c?auto=format&fit=crop&w=1200&q=80",
        altText: "Ceramic saute pan",
      },
      {
        url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
        altText: "Cookware set on a stove",
      },
    ],
    tags: ["Cookware", "Ceramic", "Bestseller"],
    priceRange: {
      minVariantPrice: { amount: "74.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "99.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var-ceramic-pan-cream",
        title: "Cream / 10 inch",
        availableForSale: true,
        quantityAvailable: 12,
        price: { amount: "74.00", currencyCode: "USD" },
        selectedOptions: [
          { name: "Color", value: "Cream" },
          { name: "Size", value: "10 inch" },
        ],
      },
      {
        id: "var-ceramic-pan-charcoal",
        title: "Charcoal / 12 inch",
        availableForSale: true,
        quantityAvailable: 7,
        price: { amount: "86.00", currencyCode: "USD" },
        selectedOptions: [
          { name: "Color", value: "Charcoal" },
          { name: "Size", value: "12 inch" },
        ],
      },
    ],
  },
  {
    id: "prod-glass-canister-set",
    handle: "glass-pantry-canister-set",
    title: "Glass Pantry Canister Set",
    description: "Four stackable borosilicate jars with oak lids for dry goods and snacks.",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1584269600519-c05ff62569b6?auto=format&fit=crop&w=1200&q=80",
      altText: "Glass pantry canisters",
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1584269600519-c05ff62569b6?auto=format&fit=crop&w=1200&q=80",
        altText: "Glass pantry canisters",
      },
    ],
    tags: ["Storage", "Glass", "Pantry"],
    priceRange: {
      minVariantPrice: { amount: "48.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "65.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var-canister-set",
        title: "Set of 4",
        availableForSale: true,
        quantityAvailable: 20,
        price: { amount: "48.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Set", value: "4 pieces" }],
      },
    ],
  },
  {
    id: "prod-electric-kettle",
    handle: "precision-electric-kettle",
    title: "Precision Electric Kettle",
    description: "Fast-heating pour-over kettle with temperature hold and soft matte finish.",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1200&q=80",
      altText: "Electric kettle",
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=1200&q=80",
        altText: "Electric kettle",
      },
    ],
    tags: ["Appliances", "Coffee", "Hot Seller"],
    priceRange: {
      minVariantPrice: { amount: "92.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "120.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var-kettle-matte-black",
        title: "Matte Black",
        availableForSale: true,
        quantityAvailable: 9,
        price: { amount: "92.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Color", value: "Matte Black" }],
      },
    ],
  },
  {
    id: "prod-stoneware-dinner-set",
    handle: "stoneware-dinner-set",
    title: "Stoneware Dinner Set",
    description: "Twelve-piece neutral dinnerware with soft curves for calm, everyday tables.",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1200&q=80",
      altText: "Stoneware dinner set",
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=1200&q=80",
        altText: "Stoneware dinner set",
      },
    ],
    tags: ["Dining", "Stoneware", "Tabletop"],
    priceRange: {
      minVariantPrice: { amount: "118.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "149.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var-stoneware-set",
        title: "12 Piece Set",
        availableForSale: true,
        quantityAvailable: 11,
        price: { amount: "118.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Set", value: "12 pieces" }],
      },
    ],
  },
  {
    id: "prod-knife-block",
    handle: "walnut-knife-block-set",
    title: "Walnut Knife Block Set",
    description: "Five stainless knives paired with a solid walnut storage block for prep stations.",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=1200&q=80",
      altText: "Knife block set",
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=1200&q=80",
        altText: "Knife block set",
      },
    ],
    tags: ["Tools", "Prep", "Chef Picks"],
    priceRange: {
      minVariantPrice: { amount: "136.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "175.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var-knife-set",
        title: "5 Piece Set",
        availableForSale: true,
        quantityAvailable: 6,
        price: { amount: "136.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Set", value: "5 pieces" }],
      },
    ],
  },
  {
    id: "prod-drying-rack",
    handle: "folding-drying-rack",
    title: "Folding Drying Rack",
    description: "Expandable stainless drying rack with bamboo cutlery holder and drip tray.",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80",
      altText: "Drying rack",
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80",
        altText: "Drying rack",
      },
    ],
    tags: ["Cleaning", "Sink", "Organizer"],
    priceRange: {
      minVariantPrice: { amount: "58.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "78.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var-drying-rack",
        title: "Standard",
        availableForSale: true,
        quantityAvailable: 14,
        price: { amount: "58.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Size", value: "Standard" }],
      },
    ],
  },
  {
    id: "prod-air-fryer",
    handle: "compact-air-fryer",
    title: "Compact Air Fryer",
    description: "Countertop air fryer with quick presets for fries, vegetables, and weeknight dinners.",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=1200&q=80",
      altText: "Compact air fryer",
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=1200&q=80",
        altText: "Compact air fryer",
      },
    ],
    tags: ["Appliances", "Countertop", "Best Seller"],
    priceRange: {
      minVariantPrice: { amount: "129.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "169.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var-air-fryer",
        title: "4 Quart",
        availableForSale: true,
        quantityAvailable: 8,
        price: { amount: "129.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Capacity", value: "4 Quart" }],
      },
    ],
  },
  {
    id: "prod-serving-tray",
    handle: "oak-serving-tray",
    title: "Oak Serving Tray",
    description: "Solid oak serving tray with rounded handles for breakfast, tea, and countertop styling.",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80",
      altText: "Oak serving tray",
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=80",
        altText: "Oak serving tray",
      },
    ],
    tags: ["Dining", "Wood", "Hosting"],
    priceRange: {
      minVariantPrice: { amount: "44.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "59.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "var-serving-tray",
        title: "Medium",
        availableForSale: true,
        quantityAvailable: 18,
        price: { amount: "44.00", currencyCode: "USD" },
        selectedOptions: [{ name: "Size", value: "Medium" }],
      },
    ],
  },
];

const collectionProductMap: Record<string, string[]> = {
  cookware: ["ceramic-saute-pan"],
  storage: ["glass-pantry-canister-set"],
  appliances: ["precision-electric-kettle", "compact-air-fryer"],
  dining: ["stoneware-dinner-set", "oak-serving-tray"],
  tools: ["walnut-knife-block-set"],
  cleaning: ["folding-drying-rack"],
};

export const mockFeatures: Feature[] = [
  { title: "Fresh arrivals weekly", description: "New kitchen finds curated for compact and family homes." },
  { title: "Premium quality picks", description: "Materials and finishes selected for everyday use." },
  { title: "Fast doorstep delivery", description: "Smooth shipping on your home essentials and cookware." },
  { title: "Gift-ready packaging", description: "Perfect for housewarming, wedding, and festive gifting." },
];

export const mockPromoCards: PromoCard[] = [
  {
    title: "Smart Countertop Picks",
    subtitle: "New arrival",
    description: "Small appliances that save time without taking over the kitchen.",
    href: "/collections/appliances",
    image: "https://images.unsplash.com/photo-1517414204284-9b5974f6a76d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Minimal Pantry Storage",
    subtitle: "Editor’s choice",
    description: "Stackable jars and baskets that make open shelving look intentional.",
    href: "/collections/storage",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
  },
];

export const mockServiceHighlights: ServiceHighlight[] = [
  { title: "Curated product range", description: "Modern kitchen essentials for practical homes." },
  { title: "Easy 7-day returns", description: "Shop confidently with straightforward return support." },
  { title: "Secure online checkout", description: "Trusted payment flow once checkout is added." },
  { title: "Support for gifting", description: "Giftable products, packaging, and bundles." },
];

export const mockDealCards: DealCard[] = [
  {
    title: "Weekend Host Essentials",
    description: "Serveware and dining sets for brunches, tea time, and dinner guests.",
    badge: "Save 20%",
    href: "/collections/dining",
  },
  {
    title: "Pantry Reset Bundle",
    description: "Bring order to shelves, grains, spices, and snack zones.",
    badge: "Up to 30% off",
    href: "/collections/storage",
  },
  {
    title: "Smart Appliance Sale",
    description: "Air fryers, kettles, and countertop companions at unbeatable prices.",
    badge: "Flat 25% off",
    href: "/collections/appliances",
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    quote: "The product mix feels polished and practical. It looks like a premium kitchen store, not a template.",
    name: "Maya R.",
    location: "Bengaluru",
  },
  {
    quote: "The cookware and storage categories are easy to browse and the design feels light and modern.",
    name: "Daniel K.",
    location: "Austin",
  },
  {
    quote: "Exactly the kind of storefront I’d expect for home and kitchen goods: clean, visual, and focused.",
    name: "Sara T.",
    location: "Dubai",
  },
];

export function getMockCollectionByHandle(handle: string): CollectionWithProducts | null {
  const collection = mockCollections.find((item) => item.handle === handle);

  if (!collection) {
    return null;
  }

  const handles = collectionProductMap[handle] || [];
  return {
    ...collection,
    products: mockProducts.filter((product) => handles.includes(product.handle)),
  };
}

export function getMockProductByHandle(handle: string): Product | null {
  return mockProducts.find((product) => product.handle === handle) || null;
}
