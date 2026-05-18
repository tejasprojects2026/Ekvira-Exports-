const DEFAULT_GA_MEASUREMENT_ID = "G-C16KBVFW6C";

export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || DEFAULT_GA_MEASUREMENT_ID;

type AnalyticsValue = boolean | number | string | undefined;
type AnalyticsParams = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function canTrackAnalytics() {
  return (
    Boolean(GA_MEASUREMENT_ID) && typeof window !== "undefined" && typeof window.gtag === "function"
  );
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (!canTrackAnalytics()) {
    return;
  }

  window.gtag!("event", eventName, params);
}

export function trackPageView({ path, search = "" }: { path: string; search?: string }) {
  if (!canTrackAnalytics()) {
    return;
  }

  const pageLocation = new URL(window.location.href);
  pageLocation.hash = "";

  window.gtag!("event", "page_view", {
    page_title: document.title,
    page_location: pageLocation.toString(),
    page_path: `${path}${search}`,
  });
}

export function trackContactClick(method: "email" | "phone" | "whatsapp", placement: string) {
  trackEvent("contact_click", {
    contact_method: method,
    placement,
  });
}
