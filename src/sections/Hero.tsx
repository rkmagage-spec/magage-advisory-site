import { ArrowDownRight } from 'lucide-react'
import { Reveal } from '@/hooks/useReveal'

const LEDGER_ROWS = [
  { label: 'Transaction value advised', value: 'R2.4bn' },
  { label: 'Engagements completed', value: '60+' },
  { label: 'Client retention', value: '96%' },
]

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-16 md:grid-cols-[1.25fr_1fr] md:gap-16 md:px-8 md:pb-24 md:pt-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
            Independent corporate finance · Johannesburg
          </p>
          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Clarity in
            <br />
            every <span className="italic text-brass">number.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Magage Advisory helps founders, boards and investors make confident financial
            decisions — from capital raises and acquisitions to the models and reporting that
            run the business between them.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex h-12 items-center bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-ink-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Book a consultation
            </a>
            <a
              href="#services"
              className="group inline-flex h-12 items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 transition-colors duration-200 hover:text-brass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Explore services
              <ArrowDownRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="md:pt-14">
          <div className="border border-border bg-card">
            <div className="border-b border-border px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Engagement snapshot
              </p>
            </div>
            <dl>
              {LEDGER_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-6 border-b border-border px-6 py-5 last:border-b-0"
                >
                  <dt className="text-sm text-muted-foreground">{row.label}</dt>
                  <dd className="font-display text-2xl font-medium tabular-nums text-foreground">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="border-t border-border px-6 py-4">
              <p className="text-xs leading-relaxed text-muted-foreground">
                Figures across live and completed mandates, 2019–2026.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
