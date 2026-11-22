export type ServiceLookup = {
  slug: string;
  title: string;
  short: string;
  rateLabel: string;
  minRate?: number;
  rateAmount?: string;
  rateUnit?: string;
};

export const SERVICE_LIST: ServiceLookup[] = [
  {
    slug: "farm-management",
    title: "Farm management services",
    short: "Run your farm like a thriving business.",
    rateLabel: "Farm assessment and planning",
    minRate: 2000,
    rateAmount: "KES 2,000 – 4,000",
    rateUnit: "per day",
  },
  {
    slug: "soil-health",
    title: "Soil health management services",
    short: "Test, restore and enrich your soil.",
    rateLabel: "Crop management and production, with soil fertility and nutrition",
    minRate: 2000,
    rateAmount: "KES 2,000 – 6,500",
    rateUnit: "per session",
  },
  {
    slug: "organic-consultation",
    title: "Organic agriculture consultation services",
    short: "Go organic, step by step.",
    rateLabel: "Sustainable farming practices",
    minRate: 4000,
    rateAmount: "KES 4,000 – 6,000",
    rateUnit: "starting at",
  },
  {
    slug: "agribusiness",
    title: "Agribusiness consultation services",
    short: "Plan, budget, add value and scale.",
    rateLabel: "Agronomic and technical support, with a business plan",
    minRate: 4000,
    rateAmount: "KES 4,000 – 7,000",
    rateUnit: "per engagement",
  },
  {
    slug: "market-linkage",
    title: "Market linkage",
    short: "We connect you to reliable buyers.",
    rateLabel: "Custom packages and retainers",
  },
  {
    slug: "crop-disease",
    title: "Crop management services",
    short: "Spot problems early, treat safely.",
    rateLabel: "Crop management and production",
    minRate: 2000,
    rateAmount: "KES 2,000 – 6,500",
    rateUnit: "per session",
  },
  {
    slug: "organic-inputs",
    title: "Organic farming inputs",
    short: "Bio stimulants, bio fertilizers and bio pesticides.",
    rateLabel: "Custom packages and retainers",
  },
];

/** Fixed initial consultation fee (KES), added to the service's lower-bound rate. */
export const CONSULTATION_FEE = 1500;

/** Amount (KES) charged at checkout: lower bound of the rate + consultation fee. */
export function getPayAmount(service: ServiceLookup) {
  return (service.minRate ?? 0) + CONSULTATION_FEE;
}

export function findService(slug?: string | null) {
  if (!slug) return undefined;
  return SERVICE_LIST.find((s) => s.slug === slug);
}
