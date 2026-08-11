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
  { label: "Revenue", value: "₹4.28M", delta: "+18.4%" },
  { label: "Gross profit", value: "₹1.61M", delta: "+9.2%" },
  { label: "Inventory value", value: "₹2.05M", delta: "-3.1%" },
  { label: "Cash flow", value: "₹880K", delta: "+22.6%" },
];

const NODES = ["Branch 01", "Branch 02", "Branch 03", "Warehouse", "Online Store"];

const FOUNDATION = [
  { title: "API First", line: "Payments, marketplaces, messaging and storage connect natively." },
  { title: "Every Device", line: "Desktop, POS terminal, tablet and mobile — always in sync." },
  { title: "Enterprise Secure", line: "Role-based access, encryption, audit logs and backups." },
];

function Landing() {
  const progress = useScrollProgress();
  useRevealOnScroll();

  return (
    <div className="relative min-h-screen">
      <SceneBackground progress={progress} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <span className="relative flex h-9 w-9 items-center justify-center">
              <span className="absolute inset-0 rotate-45 rounded-[11px] bg-primary" />
              <span className="absolute inset-[9px] rotate-45 rounded-[4px] bg-background" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-semibold tracking-tight">ValGrow Labs</span>
              <span className="mt-1 text-[10px] font-medium tracking-[0.22em] text-muted-foreground uppercase">
                Business OS
              </span>
            </span>
          </a>

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
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_12px_30px_-12px_oklch(0.5_0.22_300/0.9)] transition-transform hover:scale-[1.03]"
          >
            Get started
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="flex min-h-screen items-center px-6">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-2xl">
              <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Cloud-native · AI-powered
              </span>
              <h1 className="text-aurora mt-7 text-5xl leading-[1.02] font-semibold sm:text-6xl lg:text-7xl">
                One Business.
                <br />
                One Platform.
                <br />
                Infinite Possibilities.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                ValGrow Business OS unifies POS, inventory, sales, purchasing, accounting, HR,
                ecommerce and AI into one intelligent operating system for your entire company.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#ecosystem"
                  className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_18px_40px_-16px_oklch(0.5_0.22_300/0.95)] transition-transform hover:scale-[1.03]"
                >
                  Explore the OS
                </a>
                <a
                  href="#intelligence"
                  className="glass-panel rounded-full px-7 py-3.5 text-sm font-medium transition-transform hover:scale-[1.03]"
                >
                  See ValGrow AI
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ECOSYSTEM */}
        <section id="ecosystem" className="px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="reveal-up max-w-xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                The ecosystem
              </p>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
                Every part of your business, connected.
              </h2>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {MODULES.map((module, i) => (
                <article
                  key={module.name}
                  data-reveal
                  className="reveal-up glass-panel rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1.5"
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
        <section className="px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="reveal-up max-w-xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Living data
              </p>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
                One action moves the whole system.
              </h2>
            </div>
            <div className="mt-14 space-y-4">
              {FLOWS.map((flow, i) => (
                <div
                  key={flow.label}
                  data-reveal
                  className="reveal-up glass-panel flex flex-wrap items-center gap-x-3 gap-y-3 rounded-2xl px-6 py-5"
                  style={{ transitionDelay: `${i * 110}ms` }}
                >
                  <span className="mr-2 min-w-32 text-sm font-semibold">{flow.label}</span>
                  {flow.chain.map((step, index) => (
                    <span key={step} className="flex items-center gap-3">
                      <span className="rounded-full bg-secondary px-4 py-1.5 text-sm text-secondary-foreground">
                        {step}
                      </span>
                      {index < flow.chain.length - 1 && (
                        <span className="h-px w-6 bg-primary/50" />
                      )}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI */}
        <section id="intelligence" className="px-6 py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div data-reveal className="reveal-up">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                ValGrow AI
              </p>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
                An assistant that understands your entire business.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
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
        <section className="px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="reveal-up max-w-xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Real-time analytics
              </p>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
                One business. Every branch connected.
              </h2>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {METRICS.map((metric, i) => (
                <div
                  key={metric.label}
                  data-reveal
                  className="reveal-up glass-panel rounded-2xl p-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="font-display mt-2 text-3xl font-semibold">{metric.value}</p>
                  <p className="mt-1 text-xs font-medium text-primary">{metric.delta}</p>
                </div>
              ))}
            </div>
            <div
              data-reveal
              className="reveal-up glass-panel mt-4 flex flex-wrap items-center justify-center gap-3 rounded-2xl px-6 py-8"
            >
              {NODES.map((node) => (
                <span key={node} className="rounded-full bg-secondary px-4 py-2 text-sm">
                  {node}
                </span>
              ))}
              <span className="h-px w-10 bg-primary/50" />
              <span className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground">
                ValGrow Business OS
              </span>
            </div>
          </div>
        </section>

        {/* FOUNDATION */}
        <section className="px-6 py-28">
          <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
            {FOUNDATION.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                className="reveal-up glass-panel rounded-2xl p-8"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.line}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINALE */}
        <section className="flex min-h-screen items-center px-6 text-center">
          <div data-reveal className="reveal-up mx-auto max-w-3xl">
            <h2 className="text-aurora font-display text-5xl leading-[1.05] font-semibold sm:text-7xl">
              VALGROW
              <br />
              BUSINESS OS
            </h2>
            <p className="mt-8 text-lg text-muted-foreground">One Platform. Every Business Function.</p>
            <p className="mt-2 text-lg font-medium">Run your entire business with intelligence.</p>
            <a
              href="#top"
              className="mt-10 inline-flex rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-[0_18px_40px_-16px_oklch(0.5_0.22_300/0.95)] transition-transform hover:scale-[1.03]"
            >
              Get started with ValGrow
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} ValGrow Business OS</span>
          <span>One Business. One Platform. Infinite Possibilities.</span>
        </div>
      </footer>
    </div>
  );
}
