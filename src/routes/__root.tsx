import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import ekviraLogo from "@/assets/ekvira-logo.jpeg";
import { GoogleAnalyticsPageTracker, GoogleAnalyticsScripts } from "@/components/GoogleAnalytics";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import {
  SITE_LOCALE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_LOGO_URL,
  SITE_TITLE,
  SITE_URL,
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: SITE_NAME },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "format-detection", content: "telephone=no" },
      { name: "theme-color", content: "#2f5a2f" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: SITE_LOGO_URL },
      { property: "og:image:alt", content: `${SITE_NAME} logo` },
      { property: "og:locale", content: SITE_LOCALE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: SITE_LOGO_URL },
      { name: "twitter:image:alt", content: `${SITE_NAME} logo` },
    ],
    links: [
      { rel: "icon", href: ekviraLogo },
      { rel: "apple-touch-icon", href: ekviraLogo },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

const rootStructuredData = JSON.stringify([organizationJsonLd, websiteJsonLd, localBusinessJsonLd]);

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: rootStructuredData }}
        />
        <GoogleAnalyticsScripts />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <GoogleAnalyticsPageTracker />
      <Outlet />
      <FloatingWhatsAppButton />
    </>
  );
}
