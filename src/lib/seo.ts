export const SITE_URL = "https://ekviraexporthouse.com";
export const SITE_NAME = "Ekvira Export House";
export const SITE_TITLE = "Ekvira Export House | Indian Agri & Farm Exporter";
export const SITE_DESCRIPTION =
  "Directly sourced agri, farm, and trade products from India with compliant documentation and export-ready handling.";

export const BUSINESS_EMAIL = "ekviraexporthouse@gmail.com";
export const BUSINESS_PHONE = "+917276533359";

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

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE,
  address: {
    "@type": "PostalAddress",
    ...BUSINESS_ADDRESS,
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-IN",
};
