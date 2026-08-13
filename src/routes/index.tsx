import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SceneBackground } from "@/components/valgrow/SceneBackground";
import { useRevealOnScroll, useScrollProgress } from "@/hooks/use-scroll-progress";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ValGrow Business OS — One Platform, Every Function" },
      {
        name: "description",
        content:
          "ValGrow Business OS connects POS, inventory, sales, CRM, purchasing, accounting, HR, payroll, ecommerce and AI analytics into one intelligent platform.",
      },
      { property: "og:title", content: "ValGrow Business OS" },
      {
        property: "og:description",
        content:
          "One Business. One Platform. Infinite Possibilities. Run your entire business with intelligence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const NAV = ["Platform", "Modules", "Intelligence", "Pricing"];

const MODULES = [
  { name: "POS", line: "Scan, sell, settle — instantly posted everywhere." },
  { name: "Inventory", line: "Live stock across warehouses, batches and expiry." },
  { name: "Sales & CRM", line: "Lead → Opportunity → Customer → Repeat." },
  { name: "Purchasing", line: "Request, approve, receive, pay suppliers." },
  { name: "Accounting", line: "Revenue, cash flow and ledgers in real time." },
  { name: "HR & Payroll", line: "Attendance, shifts and salary, auto-posted." },
  { name: "Ecommerce", line: "One catalogue, online and in-store, in sync." },
  { name: "Analytics & AI", line: "Forecasts, insights and answers on demand." },
];

const FLOWS = [
  { label: "A sale", chain: ["POS", "Inventory", "Customer", "Accounting", "Analytics"] },
  { label: "A purchase", chain: ["Supplier", "Purchase Order", "Warehouse", "Inventory", "Accounting"] },
  { label: "An online order", chain: ["Ecommerce", "Inventory", "Payment", "Customer", "Accounting"] },
];

const AI_QUESTIONS = [
  { q: "Which branch made the highest profit?", a: "Branch 02 — 34.8% margin, +12% MoM." },
  { q: "Predict next month's sales.", a: "₹4.62M forecast · 91% confidence." },
  { q: "Which products are about to expire?", a: "18 batches flagged across 3 warehouses." },
  { q: "Why is profit lower this week?", a: "Purchase cost +9%, discounts +4%." },
];

const METRICS = [
  { label: "Revenue", value: "LKR 4.28M", delta: "+18.4%" },
  { label: "Gross profit", value: "LKR 1.61M", delta: "+9.2%" },
  { label: "Inventory value", value: "LKR 2.05M", delta: "-3.1%" },
  { label: "Cash flow", value: "LKR 880K", delta: "+22.6%" },
];

const NODES = ["Branch 01", "Branch 02", "Branch 03", "Warehouse", "Online Store"];

const FOUNDATION = [
  { title: "API First", line: "Payments, marketplaces, messaging and storage connect natively." },
  { title: "Every Device", line: "Desktop, POS terminal, tablet and mobile — always in sync." },
  { title: "Enterprise Secure", line: "Role-based access, encryption, audit logs and backups." },
];

function Landing() {
  const progress = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);
  useRevealOnScroll();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SceneBackground progress={progress} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3.5 sm:px-6 sm:py-5">
          <a href="#top" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <img
              src="/vg-logo.png"
              alt="ValGrow Labs logo"
              width={44}
              height={44}
              className="h-9 w-9 shrink-0 rounded-full object-contain sm:h-11 sm:w-11"
            />
            <span className="flex min-w-0 flex-col leading-none">
              <span className="font-display truncate text-base font-semibold tracking-tight sm:text-lg">
                ValGrow Labs
              </span>
              <span className="mt-1 truncate text-[9px] font-medium tracking-[0.22em] text-muted-foreground uppercase sm:text-[10px]">
                Business OS
              </span>
            </span>
          </a>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <nav className="hidden items-center gap-8 md:flex">
              {NAV.map((item) => (
                <a
                  key={item}
                  href="#top"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item}
                </a>
              ))}
            </nav>
            <a
              href="#top"
              className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_12px_30px_-12px_oklch(0.5_0.22_300/0.9)] transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Get started
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="glass-panel grid h-10 w-10 shrink-0 place-items-center rounded-full md:hidden"
            >
              <span className="flex flex-col gap-1">
                <span className="block h-0.5 w-4 rounded-full bg-foreground" />
                <span className="block h-0.5 w-4 rounded-full bg-foreground" />
                <span className="block h-0.5 w-4 rounded-full bg-foreground" />
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-border/40 px-4 pb-5 pt-3 md:hidden">
            <div className="flex flex-col">
              {NAV.map((item) => (
                <a
                  key={item}
                  href="#top"
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border/30 py-3 text-sm text-muted-foreground"
                >
                  {item}
                </a>
              ))}
              <a
                href="#top"
                onClick={() => setMenuOpen(false)}
                className="mt-4 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
              >
                Get started
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative flex items-start px-5 pt-[calc(4.5rem+clamp(0.5rem,4vw,3.5rem))] pb-[clamp(2rem,6vw,5rem)] sm:items-center sm:px-6">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-2xl">
              <span className="glass-panel inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-medium tracking-wide text-muted-foreground uppercase sm:px-4 sm:text-xs">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Cloud-native · AI-powered
              </span>
              <h1 className="text-aurora mt-6 text-[2.15rem] leading-[1.06] font-semibold sm:mt-7 sm:text-6xl lg:text-7xl">
                One Business.
                <br />
                One Platform.
                <br />
                Infinite Possibilities.
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                ValGrow Business OS unifies POS, inventory, sales, purchasing, accounting, HR,
                ecommerce and AI into one intelligent operating system for your entire company.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#ecosystem"
                  className="rounded-full bg-primary px-7 py-3.5 text-center text-sm font-medium text-primary-foreground shadow-[0_18px_40px_-16px_oklch(0.5_0.22_300/0.95)] transition-transform hover:scale-[1.03]"
                >
                  Explore the OS
                </a>
                <a
                  href="#intelligence"
                  className="glass-panel rounded-full px-7 py-3.5 text-center text-sm font-medium transition-transform hover:scale-[1.03]"
                >
                  See ValGrow AI
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ECOSYSTEM */}
        <section id="ecosystem" className="px-5 py-[clamp(2.5rem,6vw,7rem)] sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="reveal-up max-w-xl">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-primary uppercase sm:text-xs">
                The ecosystem
              </p>
              <h2 className="mt-3 text-2xl font-semibold sm:mt-4 sm:text-4xl lg:text-5xl">
                Every part of your business, connected.
              </h2>
            </div>
            <div className="mt-8 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
              {MODULES.map((module, i) => (
                <article
                  key={module.name}
                  data-reveal
                  className="reveal-up glass-panel rounded-2xl p-5 transition-transform duration-500 hover:-translate-y-1.5 sm:p-6"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <span className="font-display text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold">{module.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{module.line}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FLOWS */}
        <section className="px-5 py-[clamp(2.5rem,6vw,7rem)] sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="reveal-up max-w-xl">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-primary uppercase sm:text-xs">
                Living data
              </p>
              <h2 className="mt-3 text-2xl font-semibold sm:mt-4 sm:text-4xl lg:text-5xl">
                One action moves the whole system.
              </h2>
            </div>
            <div className="mt-8 space-y-3 sm:mt-14 sm:space-y-4">
              {FLOWS.map((flow, i) => (
                <div
                  key={flow.label}
                  data-reveal
                  className="reveal-up glass-panel flex flex-wrap items-center gap-x-2 gap-y-2 rounded-2xl px-4 py-4 sm:gap-x-3 sm:gap-y-3 sm:px-6 sm:py-5"
                  style={{ transitionDelay: `${i * 110}ms` }}
                >
                  <span className="basis-full text-sm font-semibold sm:mr-2 sm:min-w-32 sm:basis-auto">{flow.label}</span>
                  {flow.chain.map((step, index) => (
                    <span key={step} className="flex items-center gap-2 sm:gap-3">
                      <span className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground sm:px-4 sm:text-sm">
                        {step}
                      </span>
                      {index < flow.chain.length - 1 && (
                        <span className="h-px w-3 bg-primary/50 sm:w-6" />
                      )}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI */}
        <section id="intelligence" className="px-5 py-[clamp(2.5rem,6vw,7rem)] sm:px-6">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div data-reveal className="reveal-up">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-primary uppercase sm:text-xs">
                ValGrow AI
              </p>
              <h2 className="mt-3 text-2xl font-semibold sm:mt-4 sm:text-4xl lg:text-5xl">
                An assistant that understands your entire business.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
                Ask in plain language. ValGrow reads sales, stock, costs and people together, then
                explains what happened and what happens next.
              </p>
            </div>
            <div className="space-y-3">
              {AI_QUESTIONS.map((item, i) => (
                <div
                  key={item.q}
                  data-reveal
                  className="reveal-up glass-panel rounded-2xl p-5"
                  style={{ transitionDelay: `${i * 110}ms` }}
                >
                  <p className="text-sm font-medium">{item.q}</p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ANALYTICS + MULTI BRANCH */}
        <section className="px-5 py-[clamp(2.5rem,6vw,7rem)] sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="reveal-up max-w-xl">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-primary uppercase sm:text-xs">
                Real-time analytics
              </p>
              <h2 className="mt-3 text-2xl font-semibold sm:mt-4 sm:text-4xl lg:text-5xl">
                One business. Every branch connected.
              </h2>
            </div>
            <div className="mt-8 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
              {METRICS.map((metric, i) => (
                <div
                  key={metric.label}
                  data-reveal
                  className="reveal-up glass-panel rounded-2xl p-5 sm:p-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="font-display mt-2 text-2xl font-semibold sm:text-3xl">{metric.value}</p>
                  <p className="mt-1 text-xs font-medium text-primary">{metric.delta}</p>
                </div>
              ))}
            </div>
            <div
              data-reveal
              className="reveal-up glass-panel mt-3 flex flex-wrap items-center justify-center gap-2 rounded-2xl px-4 py-6 sm:mt-4 sm:gap-3 sm:px-6 sm:py-8"
            >
              {NODES.map((node) => (
                <span key={node} className="rounded-full bg-secondary px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm">
                  {node}
                </span>
              ))}
              <span className="h-px w-10 bg-primary/50" />
              <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground sm:px-5 sm:py-2 sm:text-sm">
                ValGrow Business OS
              </span>
            </div>
          </div>
        </section>

        {/* FOUNDATION */}
        <section className="px-5 py-[clamp(2.5rem,6vw,7rem)] sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-3 sm:gap-4 lg:grid-cols-3">
            {FOUNDATION.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                className="reveal-up glass-panel rounded-2xl p-6 sm:p-8"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.line}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINALE */}
        <section className="flex items-center px-5 py-[clamp(3rem,8vw,8rem)] text-center sm:px-6">
          <div data-reveal className="reveal-up mx-auto max-w-3xl">
            <h2 className="text-aurora font-display text-[2.4rem] leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
              VALGROW
              <br />
              BUSINESS OS
            </h2>
            <p className="mt-6 text-base text-muted-foreground sm:mt-8 sm:text-lg">One Platform. Every Business Function.</p>
            <p className="mt-2 text-base font-medium sm:text-lg">Run your entire business with intelligence.</p>
            <a
              href="#top"
              className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 sm:mt-10 sm:px-8 sm:py-4 text-sm font-medium text-primary-foreground shadow-[0_18px_40px_-16px_oklch(0.5_0.22_300/0.95)] transition-transform hover:scale-[1.03]"
            >
              Get started with ValGrow
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 px-5 py-7 sm:px-6 sm:py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:text-sm">
          <span>© {new Date().getFullYear()} ValGrow Business OS</span>
          <span>One Business. One Platform. Infinite Possibilities.</span>
        </div>
      </footer>
    </div>
  );
}
