import ekviraLogo from "@/assets/ekvira-logo.jpeg";

export const SITE_URL = "https://ekviraexporthouse.com";
export const SITE_NAME = "Ekvira Export House";
export const SITE_LEGAL_NAME = "Ekvira Export House Pvt Ltd";
export const SITE_TITLE = "Ekvira Export House | Indian Agri & Farm Exporter";
export const SITE_DESCRIPTION =
  "Directly sourced agri, farm, and trade products from India with compliant documentation and export-ready handling.";
export const SITE_LOCALE = "en_IN";

export const BUSINESS_EMAIL = "ekviraexporthouse@gmail.com";
export const BUSINESS_PHONE = "+917276533359";
export const BUSINESS_PHONE_ALT = "+917875803175";
export const BUSINESS_HOURS_LABEL = "Mon-Sat: 9 AM - 6 PM IST";
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=A-620%2C%20Gera%27s%20Imperium%20Gateway%2C%20Nashik%20Phata%2C%20PCMC%2C%20Pune%20-%20411034";
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
export const TARGET_MARKETS = [
  "India",
  "United Arab Emirates",
  "Saudi Arabia",
  "Oman",
  "United Kingdom",
  "United States",
  "Bangladesh",
  "Sri Lanka",
  "Vietnam",
  "Malaysia",
] as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: SITE_LEGAL_NAME,
  url: SITE_URL,
  logo: SITE_LOGO_URL,
  image: SITE_LOGO_URL,
  description: SITE_DESCRIPTION,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE,
  sameAs: Object.values(SOCIAL_URLS),
  areaServed: TARGET_MARKETS,
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
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-IN",
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  legalName: SITE_LEGAL_NAME,
  url: SITE_URL,
  image: SITE_LOGO_URL,
  logo: SITE_LOGO_URL,
  description: SITE_DESCRIPTION,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE,
  address: {
    "@type": "PostalAddress",
    ...BUSINESS_ADDRESS,
  },
  hasMap: GOOGLE_MAPS_URL,
  openingHoursSpecification: [
    {
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
    },
  ],
  sameAs: Object.values(SOCIAL_URLS),
};

type BreadcrumbEntry = {
  item: string;
  name: string;
};

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
