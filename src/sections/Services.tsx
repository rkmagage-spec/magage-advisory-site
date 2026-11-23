import { Reveal } from '@/hooks/useReveal'

const SERVICES = [
  {
    no: '01',
    title: 'Corporate finance advisory',
    body: 'Capital structure, valuations and fundraising readiness. We prepare the equity story, the numbers behind it, and the data room that survives investor scrutiny.',
    tags: ['Valuation', 'Capital raising', 'Investor readiness'],
  },
  {
    no: '02',
    title: 'Transaction support',
    body: 'Buy-side and sell-side support from first look to close — financial due diligence, quality of earnings, SPA input and completion mechanics.',
    tags: ['Due diligence', 'M&A execution', 'Deal negotiation'],
  },
  {
    no: '03',
    title: 'Financial modelling & FP&A',
    body: 'Driver-based three-statement models, budgets and scenario analysis your board can actually interrogate — built to be handed over, not held hostage.',
    tags: ['Three-statement models', 'Scenario planning', 'Board reporting'],
  },
  {
    no: '04',
    title: 'Strategy & performance',
    body: 'Operating-model design, cost transformation and performance management for finance teams that need to do more with the same headcount.',
    tags: ['Operating models', 'Cost transformation', 'KPI design'],
  },
]

export function Services() {
  return (
    <section id="services" className="border-b border-border scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-md font-display text-3xl font-medium tracking-tight text-foreground md:text-5xl">
              What we do
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Four practices, one standard: work a chief financial officer would sign their
              name to.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 border-t border-border md:mt-16">
          {SERVICES.map((service, i) => (
            <Reveal key={service.no} delay={i * 60}>
              <div className="group grid gap-4 border-b border-border py-8 transition-colors duration-200 hover:bg-card md:grid-cols-[5rem_1fr_1.4fr] md:gap-10 md:py-10">
                <span className="font-display text-xl font-medium tabular-nums text-brass">
                  {service.no}
                </span>
                <h3 className="font-display text-2xl font-medium tracking-tight text-foreground">
                  {service.title}
                </h3>
                <div>
                  <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
