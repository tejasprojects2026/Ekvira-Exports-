import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { ArrowRight, Sprout } from "lucide-react";
import heroImg from "@/assets/hero-agri.jpg";
import { Button } from "@/components/ui/button";
import { trackContactClick } from "@/lib/analytics";
import { BUSINESS_EMAIL } from "@/lib/seo";
import { cn } from "@/lib/utils";

const trustPoints = ["20+ Export-Ready Categories", "India & GCC Buyer Focus"] as const;

const productTags = ["Vegetables & Fruits", "Grains & Spices", "Beverages", "Textiles"] as const;

const bannerMetrics = [
  { value: "40+", label: "Products" },
  { value: "24hr", label: "Enquiry Response" },
  { value: "Farm-to-Port", label: "Handling" },
] as const;

function SlideFrame({
  children,
  overlay,
  imagePosition,
}: {
  children: ReactNode;
  overlay: string;
  imagePosition?: string;
}) {
  return (
    <section className="relative min-h-[640px] overflow-hidden bg-[#1f3115] text-white sm:min-h-[680px] md:min-h-[620px] lg:min-h-[660px] xl:min-h-[720px]">
      <img
        src={heroImg}
        alt="Agricultural produce ready for export"
        width={1200}
        height={600}
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          imagePosition ?? "object-center",
        )}
      />
      <div className={cn("absolute inset-0", overlay)} />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col px-5 pb-6 pt-2 md:px-8 md:pb-8 md:pt-3 lg:pb-10 lg:pt-4">
        {children}
      </div>
    </section>
  );
}

function GlassPanel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-white/15 bg-black/22 p-4 backdrop-blur-md sm:p-5",
        className,
      )}
    >
      {children}
    </div>
  );
}

function MetricRow() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
      {bannerMetrics.map((metric, index) => (
        <div
          key={metric.label}
          className={cn(
            "flex flex-col items-center justify-center rounded-[1.2rem] border border-white/12 bg-white/10 px-2.5 py-3 text-center sm:rounded-[1.35rem] sm:px-3 sm:py-4",
            index === bannerMetrics.length - 1 ? "col-span-2 sm:col-span-1" : "",
          )}
        >
          <div
            className={cn(
              "w-full text-center font-serif leading-tight text-white",
              metric.value.length > 6
                ? "text-[clamp(1rem,4.2vw,1.45rem)] sm:text-[1.6rem]"
                : "text-[clamp(1.55rem,7.6vw,2.05rem)] sm:text-3xl",
            )}
          >
            {metric.value}
          </div>
          <div className="mt-1 w-full text-center text-[9px] uppercase tracking-[0.14em] text-white/68 sm:text-[11px] sm:tracking-[0.18em]">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function OverviewSlide() {
  return (
    <SlideFrame
      imagePosition="object-[68%_center]"
      overlay="bg-[linear-gradient(100deg,rgba(18,33,12,0.96)_0%,rgba(24,45,17,0.86)_42%,rgba(24,45,17,0.46)_72%,rgba(24,45,17,0.22)_100%)]"
    >
      <div className="grid flex-1 content-start items-start gap-6 pt-6 sm:pt-8 md:pt-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8 lg:pt-12">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/88">
            <Sprout className="h-3.5 w-3.5 text-gold" />
            Agri Export - Pune, India
          </span>

          <h1 className="mt-4 font-serif text-[clamp(2.85rem,11vw,4.1rem)] leading-[0.98] text-white sm:text-5xl lg:text-7xl xl:text-[5.6rem]">
            From India's <span className="italic text-gold">Fields</span> to Global Markets
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/82 sm:text-lg lg:text-[1.15rem]">
            Ekvira Export House is a merchant trader connecting Indian producers with buyers across
            India and the Middle East - with trust, quality, and speed.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {trustPoints.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-center text-[13px] text-white/84 backdrop-blur-sm sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 w-full rounded-full bg-gold px-6 text-gold-foreground hover:bg-gold/90 sm:w-auto"
            >
              <Link to="/products">
                Explore Our Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full rounded-full border-white/20 bg-white/10 px-6 text-white hover:bg-white hover:text-primary sm:w-auto"
            >
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                onClick={() => trackContactClick("email", "hero_contact")}
              >
                Contact Us
              </a>
            </Button>
          </div>
        </div>

        <div className="w-full max-w-[37rem] lg:mt-5 lg:justify-self-end xl:mt-6">
          <GlassPanel className="space-y-5">
            <div className="space-y-3">
              <div className="font-serif text-2xl text-white sm:text-3xl">
                Range. Reliability. Reach.
              </div>
              <p className="text-sm leading-relaxed text-white/78 sm:text-[15px]">
                Directly sourced from verified producers across India - compliant, export-ready, and
                available for domestic and international orders.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {productTags.map((tag) => (
                <div
                  key={tag}
                  className="rounded-[1.2rem] border border-white/12 bg-white/10 px-4 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white/84 sm:text-sm"
                >
                  {tag}
                </div>
              ))}
            </div>

            <MetricRow />
          </GlassPanel>
        </div>
      </div>
    </SlideFrame>
  );
}

export function DigitalExportBanner() {
  return (
    <div className="relative isolate overflow-hidden">
      <OverviewSlide />
    </div>
  );
}
