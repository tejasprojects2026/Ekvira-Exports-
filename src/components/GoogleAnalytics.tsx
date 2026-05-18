import { useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";
import { GA_MEASUREMENT_ID, trackPageView } from "@/lib/analytics";

export function GoogleAnalyticsScripts() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  const bootstrapScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `;

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <script dangerouslySetInnerHTML={{ __html: bootstrapScript }} />
    </>
  );
}

export function GoogleAnalyticsPageTracker() {
  const location = useLocation();
  const hasTrackedInitialPage = useRef(false);

  useEffect(() => {
    if (!hasTrackedInitialPage.current) {
      hasTrackedInitialPage.current = true;
      return;
    }

    trackPageView({
      path: location.pathname,
      search: location.searchStr,
    });
  }, [location.pathname, location.searchStr]);

  return null;
}
