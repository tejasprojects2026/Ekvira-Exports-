import ekviraLogo from "@/assets/ekvira-logo.jpeg";

export const SITE_URL = "https://ekviraexporthouse.com";
export const SITE_NAME = "Ekvira Export House";
export const SITE_LEGAL_NAME = "Ekvira Export House Pvt Ltd";
export const SITE_TITLE = "Ekvira Export House | Indian Agri & Farm Product Exporter";
export const SITE_DESCRIPTION =
  "Export-ready vegetables, fruits, spices, honey, beverages, textiles, and engineering goods sourced from India with compliant documentation and reliable trade support.";
export const SITE_KEYWORD_LIST = [
  "Ekvira Export House",
  "merchant exporter Pune",
  "merchant exporter Maharashtra",
  "export house India",
  "Indian agri exporter",
  "Indian farm product exporter",
  "vegetables exporter India",
  "fruits exporter India",
  "spices exporter India",
  "honey exporter India",
  "beverages exporter India",
  "textiles exporter India",
  "engineering goods exporter India",
  "Middle East export supplier",
  "GCC import export partner",
] as const;
export const SITE_KEYWORDS = SITE_KEYWORD_LIST.join(", ");
export const SITE_LOCALE = "en_IN";
export const DEFAULT_ROBOTS_POLICY =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

export const BUSINESS_EMAIL = "ekviraexporthouse@gmail.com";
export const BUSINESS_PHONE = "+917276533359";
export const BUSINESS_PHONE_ALT = "+917875803175";
export const BUSINESS_HOURS_LABEL = "Mon-Sat: 9 AM - 6 PM IST";
export const BUSINESS_CIN = "U46909PN2026PTC253999";
export const BUSINESS_GST = "27AAJCE6086E1ZF";
export const BUSINESS_IEC = "AAJCE6086E";
export const GOOGLE_MAPS_URL =
  "https://share.google/a65IcC5qyPmrTGU3x";
export const SOCIAL_URLS = {
  instagram: "https://www.instagram.com/ekviraexporthouse/",
  facebook: "https://www.facebook.com/profile.php?id=61572108069048",
  linkedIn: "https://www.linkedin.com/company/ekvira-export-house-pvt-ltd/",
} as const;

export const BUSINESS_ADDRESS = {
  streetAddress: "A-620, Gera's Imperium Gateway, Nashik Phata, PCMC",
  addressLocality: "Pune",
  addressRegion: "Maharashtra",
  postalCode: "411034",
  addressCountry: "IN",
};

export function toAbsoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export const SITE_LOGO_URL = toAbsoluteUrl(ekviraLogo);
export const WEBSITE_ID = toAbsoluteUrl("/#website");
export const ORGANIZATION_ID = toAbsoluteUrl("/#organization");
export const LOCAL_BUSINESS_ID = toAbsoluteUrl("/#local-business");
export const BUSINESS_OPENING_HOURS = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [
    "https://schema.org/Monday",
    "https://schema.org/Tuesday",
    "https://schema.org/Wednesday",
    "https://schema.org/Thursday",
    "https://schema.org/Friday",
    "https://schema.org/Saturday",
  ],
  opens: "09:00",
  closes: "18:00",
} as const;
export const EXPORT_CATEGORIES = [
  "Vegetables & Fruits",
  "Spices",
  "Drinks & Spirits",
  "Textiles",
  "Beverages",
  "Engineering Goods",
  "Seasonal Products",
  "Honey",
] as const;
export const TARGET_MARKETS = [
  "India",
  "United Arab Emirates",
  "Saudi Arabia",
  "Oman",
  "United Kingdom",
  "United States",
  "Canada",
  "Bangladesh",
  "Sri Lanka",
  "Vietnam",
  "Malaysia",
  "Australia",
  "Japan",
  "Thailand",
  "Philippines",
] as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  alternateName: SITE_LEGAL_NAME,
  url: SITE_URL,
  logo: SITE_LOGO_URL,
  image: SITE_LOGO_URL,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORD_LIST,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE,
  sameAs: Object.values(SOCIAL_URLS),
  areaServed: TARGET_MARKETS,
  knowsAbout: EXPORT_CATEGORIES,
  identifier: [
    { "@type": "PropertyValue", propertyID: "CIN", value: BUSINESS_CIN },
    { "@type": "PropertyValue", propertyID: "GST", value: BUSINESS_GST },
    { "@type": "PropertyValue", propertyID: "IEC", value: BUSINESS_IEC },
  ],
  address: {
    "@type": "PostalAddress",
    ...BUSINESS_ADDRESS,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: BUSINESS_EMAIL,
      telephone: BUSINESS_PHONE,
      areaServed: TARGET_MARKETS,
      availableLanguage: ["English", "Hindi", "Marathi"],
      hoursAvailable: BUSINESS_OPENING_HOURS,
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-IN",
  keywords: SITE_KEYWORD_LIST,
  publisher: {
    "@id": ORGANIZATION_ID,
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": LOCAL_BUSINESS_ID,
  name: SITE_NAME,
  legalName: SITE_LEGAL_NAME,
  url: SITE_URL,
  image: SITE_LOGO_URL,
  logo: SITE_LOGO_URL,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORD_LIST,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE,
  areaServed: TARGET_MARKETS,
  knowsAbout: EXPORT_CATEGORIES,
  identifier: [
    { "@type": "PropertyValue", propertyID: "CIN", value: BUSINESS_CIN },
    { "@type": "PropertyValue", propertyID: "GST", value: BUSINESS_GST },
    { "@type": "PropertyValue", propertyID: "IEC", value: BUSINESS_IEC },
  ],
  address: {
    "@type": "PostalAddress",
    ...BUSINESS_ADDRESS,
  },
  hasMap: GOOGLE_MAPS_URL,
  openingHoursSpecification: [BUSINESS_OPENING_HOURS],
  sameAs: Object.values(SOCIAL_URLS),
};

type BreadcrumbEntry = {
  item: string;
  name: string;
};

type SeoHeadEntry = Record<string, string>;

type PageHeadOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  ogType?: string;
};

type PageJsonLdOptions = {
  type: "WebPage" | "AboutPage" | "CollectionPage";
  name: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  breadcrumbItems?: BreadcrumbEntry[];
  mainEntity?: Record<string, unknown>;
};

export function toFragmentId(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function createBreadcrumbJsonLd(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function createPageHead({
  title,
  description,
  path = "/",
  keywords,
  image = SITE_LOGO_URL,
  imageAlt = `${SITE_NAME} logo`,
  ogType = "website",
}: PageHeadOptions) {
  const pageUrl = toAbsoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : toAbsoluteUrl(image);

  const meta: SeoHeadEntry[] = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: DEFAULT_ROBOTS_POLICY },
    { name: "googlebot", content: DEFAULT_ROBOTS_POLICY },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:url", content: pageUrl },
    { property: "og:image", content: imageUrl },
    { property: "og:image:alt", content: imageAlt },
    { property: "og:locale", content: SITE_LOCALE },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: imageAlt },
  ];

  if (keywords) {
    meta.push({ name: "keywords", content: keywords });
  }

  const links: SeoHeadEntry[] = [
    { rel: "canonical", href: pageUrl },
    { rel: "alternate", href: pageUrl, hrefLang: "en-IN" },
    { rel: "alternate", href: pageUrl, hrefLang: "en" },
    { rel: "alternate", href: pageUrl, hrefLang: "x-default" },
  ];

  return { meta, links };
}

export function createPageJsonLd({
  type,
  name,
  description,
  path = "/",
  image,
  keywords,
  breadcrumbItems,
  mainEntity,
}: PageJsonLdOptions) {
  const pageUrl = toAbsoluteUrl(path);
  const pageJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${pageUrl}#webpage`,
    name,
    url: pageUrl,
    description,
    inLanguage: "en-IN",
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": ORGANIZATION_ID,
    },
  };

  if (image) {
    pageJsonLd.primaryImageOfPage = {
      "@type": "ImageObject",
      url: image.startsWith("http") ? image : toAbsoluteUrl(image),
    };
  }

  if (keywords?.length) {
    pageJsonLd.keywords = keywords;
  }

  if (mainEntity) {
    pageJsonLd.mainEntity = mainEntity;
  }

  const schemaItems = [pageJsonLd];

  if (breadcrumbItems?.length) {
    schemaItems.push(createBreadcrumbJsonLd(breadcrumbItems));
  }

  return schemaItems;
}
