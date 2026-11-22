export type ShopProduct = {
  id: string;
  name: string;
  subtitle: string;
  grower: string;
  growerLabel: string;
  category: string;
  categoryLabel: string;
  origin: string;
  size: string;
  price: string;
  tagline: string;
  description: string;
  story: string;
  tone: "cream" | "olive" | "warm" | "mint" | "deep";
  details: { label: string; value: string }[];
};

export const PRODUCTS: ShopProduct[] = [
  {
    id: "macadamia-kernels",
    name: "Raw macadamia kernels",
    subtitle: "Slow-dried, from the first flush",
    grower: "zedjah",
    growerLabel: "Zedjah farms",
    category: "nuts-oils",
    categoryLabel: "Nuts and oils",
    origin: "Murang'a highlands",
    size: "500 g pouch",
    price: "KES 1,200",
    tagline: "Clean. Buttery. Beautifully sweet.",
    description:
      "Hand-cracked kernels from the first flush of the season. Slow-dried at low temperatures so the natural oils stay intact. Resealable, nitrogen-flushed pouch.",
    story:
      "Our macadamia grows on the slopes above Murang'a, where cool nights thicken the kernel and slow the ripening. The crack is done by hand and the sort is done twice: once by eye, once by moisture. Only Style 1 whole kernels reach the pouch.",
    tone: "deep",
    details: [
      { label: "Grade", value: "Style 1, whole" },
      { label: "Moisture", value: "≤ 1.5%" },
      { label: "Shelf life", value: "9 months sealed" },
    ],
  },
  {
    id: "macadamia-oil",
    name: "Cold-pressed macadamia oil",
    subtitle: "Pressed in small batches",
    grower: "zedjah",
    growerLabel: "Zedjah farms",
    category: "nuts-oils",
    categoryLabel: "Nuts and oils",
    origin: "Pressed in Nairobi",
    size: "250 ml bottle",
    price: "KES 1,800",
    tagline: "A kitchen oil with a long, high smoke point.",
    description:
      "Expeller-pressed below 40°C from our own kernels. No solvents, no deodorising, no bleaching. A still, golden oil that holds its character in heat and on the plate.",
    story:
      "We press weekly in small batches to keep the oil close to the harvest. Each bottle lists the pressing date so you know the oil in your kitchen is never more than a season from the tree.",
    tone: "cream",
    details: [
      { label: "Process", value: "Cold-pressed, unrefined" },
      { label: "Smoke point", value: "210°C" },
      { label: "Use for", value: "Dressings, searing, baking" },
    ],
  },
  {
    id: "hass-avocado",
    name: "Hass avocados",
    subtitle: "Picked the day you order",
    grower: "partner",
    growerLabel: "Partner growers",
    category: "fresh",
    categoryLabel: "Fresh produce",
    origin: "Nyeri cooperative",
    size: "Crate of 12",
    price: "KES 540",
    tagline: "A crate of just-ripe Hass, no bruises.",
    description:
      "Picked at Nyeri's hard-mature stage, graded the same day, delivered within 48 hours. Each crate carries the picker's name on the inside of the lid.",
    story:
      "Our avocados come from a cooperative of fourteen farms around Nyeri. We pay the farmgate price the day the crop is lifted, grade for export-quality at our Nairobi warehouse, and send the rest straight to the shop.",
    tone: "olive",
    details: [
      { label: "Count", value: "12 avocados" },
      { label: "Grade", value: "Hard-mature, uniform size" },
      { label: "Ready to eat", value: "4 to 6 days from delivery" },
    ],
  },
  {
    id: "sweet-potato",
    name: "Orange-fleshed sweet potatoes",
    subtitle: "Dug in the Meru outgrower network",
    grower: "partner",
    growerLabel: "Partner growers",
    category: "fresh",
    categoryLabel: "Fresh produce",
    origin: "Meru outgrower network",
    size: "5 kg sack",
    price: "KES 900",
    tagline: "Sweet, deep orange, high in beta-carotene.",
    description:
      "Lifted by hand from Meru outgrowers, cured for a week to set the sugars, and sacked in jute so they breathe. Store cool and dry, never in the fridge.",
    story:
      "Orange-fleshed sweet potato was planted across our Meru network for the children, not the market. The surplus is now a shop staple, and the farmgate price has doubled.",
    tone: "warm",
    details: [
      { label: "Varieties", value: "Vitaa, Kabode" },
      { label: "Cure", value: "7 days at 28°C before sack" },
      { label: "Keeps", value: "4 to 6 weeks, cool and dry" },
    ],
  },
  {
    id: "honey",
    name: "Highland forest honey",
    subtitle: "Raw, unfiltered, single-apiary",
    grower: "partner",
    growerLabel: "Partner apiaries",
    category: "pantry",
    categoryLabel: "Pantry",
    origin: "Mount Kenya foothills",
    size: "500 g jar",
    price: "KES 780",
    tagline: "The forest, in a spoon.",
    description:
      "Harvested twice a year from log hives on the Mount Kenya foothills. Settled, not centrifuged, so the pollen and the character of the forest stay in the jar.",
    story:
      "The apiary sits above 1,900 metres, where wild acacia, mutamaiyu and moist forest flowers run the year. The jar you lift from the shelf carries the apiary's lot number and the week it was drawn.",
    tone: "warm",
    details: [
      { label: "Process", value: "Cold-settled, unfiltered" },
      { label: "Pollen", value: "Acacia, mutamaiyu, forest herbs" },
      { label: "Crystallises", value: "After 6 to 9 months. Warm gently to loosen." },
    ],
  },
  {
    id: "coffee",
    name: "Shade-grown Arabica beans",
    subtitle: "Ruiru 11 varietal, whole bean",
    grower: "partner",
    growerLabel: "Partner growers",
    category: "pantry",
    categoryLabel: "Pantry",
    origin: "Nyeri",
    size: "250 g, whole bean",
    price: "KES 950",
    tagline: "A bright, clean Nyeri cup.",
    description:
      "Grown under native shade in Nyeri, washed on the farm, and roasted light to let the Ruiru 11's crisp acidity through. Whole bean, with the roast date on the pack.",
    story:
      "Our growers were advised to clear the shade trees for yield. We advised them not to. The shade slows the cherry, lifts the sugar, and keeps the soil cool. The cup speaks for itself.",
    tone: "deep",
    details: [
      { label: "Varietal", value: "Ruiru 11" },
      { label: "Process", value: "Fully washed" },
      { label: "Roast", value: "Light, roast date on pack" },
    ],
  },
  {
    id: "banana",
    name: "Sun-dried bananas",
    subtitle: "No sugar, no sulphites",
    grower: "partner",
    growerLabel: "Partner growers",
    category: "pantry",
    categoryLabel: "Pantry",
    origin: "Embu women's cooperative",
    size: "200 g pack",
    price: "KES 360",
    tagline: "Chewy, caramel-dark, unsweetened.",
    description:
      "Ripe apple bananas, sliced thin and sun-dried on raised racks. Nothing added. The dark colour is the sugar in the fruit, not a syrup.",
    story:
      "A group of forty-three women in Embu ferment, slice and dry the glut from their own farms. The cooperative keeps the margin that a middleman would have taken.",
    tone: "cream",
    details: [
      { label: "Ingredients", value: "Apple banana. That is all." },
      { label: "Dry", value: "Sun, 72 hours on raised racks" },
      { label: "Keeps", value: "3 months, cool and sealed" },
    ],
  },
  {
    id: "beans",
    name: "Heirloom black beans",
    subtitle: "Dryland-grown, hand-sorted",
    grower: "partner",
    growerLabel: "Partner growers",
    category: "pantry",
    categoryLabel: "Pantry",
    origin: "Kitui dryland cluster",
    size: "2 kg bag",
    price: "KES 620",
    tagline: "Rich, earthy, holds its shape.",
    description:
      "An heirloom black bean our Kitui growers have kept going through dry seasons for generations. Thin-skinned, deeply earthy, and holds its shape in a long simmer.",
    story:
      "The variety nearly disappeared in the switch to hybrid seed. We buy at a premium so the growers keep saving it, and the seed bank holds the backup.",
    tone: "mint",
    details: [
      { label: "Variety", value: "Local heirloom" },
      { label: "Sort", value: "Hand-sorted twice" },
      { label: "Soak", value: "Overnight, then simmer 70 minutes" },
    ],
  },
];

export function findProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export function relatedProducts(id: string, count = 3) {
  const current = findProduct(id);
  if (!current) return PRODUCTS.slice(0, count);
  return PRODUCTS.filter(
    (p) => p.id !== id && (p.category === current.category || p.grower === current.grower)
  ).slice(0, count);
}
