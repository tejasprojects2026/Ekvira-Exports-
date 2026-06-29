import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import ekviraLogo from "@/assets/ekvira-logo.jpeg";
import { Button } from "@/components/ui/button";
import { trackContactClick } from "@/lib/analytics";
import { BUSINESS_PHONE } from "@/lib/seo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-18 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="group flex items-center"
          onClick={() => setOpen(false)}
          aria-label="Ekvira Export House home"
        >
          <img
            src={ekviraLogo}
            alt="Ekvira Export House"
            className="block h-11 w-auto transition-transform duration-200 group-hover:scale-[1.01] md:h-14"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90 shadow-none px-5"
          >
            <a
              href={`tel:${BUSINESS_PHONE}`}
              onClick={() => trackContactClick("phone", "header_cta")}
            >
              Enquire Now
            </a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-accent"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-5 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-start gap-2 px-3 py-2.5 rounded-lg text-foreground/85 hover:bg-accent"
                activeProps={{ className: "text-primary font-medium bg-accent" }}
              >
                <span className="whitespace-nowrap">{n.label}</span>
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
            >
              <a
                href={`tel:${BUSINESS_PHONE}`}
                onClick={() => trackContactClick("phone", "mobile_header_cta")}
              >
                Enquire Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
