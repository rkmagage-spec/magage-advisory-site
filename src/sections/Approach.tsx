import { Reveal } from '@/hooks/useReveal'

const STEPS = [
  {
    title: 'Diagnose',
    body: 'A focused review of the numbers, the business behind them and the decision at hand. No boilerplate — we start where the value leaks.',
  },
  {
    title: 'Design',
    body: 'Options on one page, trade-offs made explicit, and a recommendation we are prepared to defend in front of your board or your buyer.',
  },
  {
    title: 'Execute',
    body: 'We stay in the work — models, documents, negotiations and the hundred small judgements that decide whether a plan survives contact.',
  },
  {
    title: 'Embed',
    body: 'Handover is part of the mandate: templates, training and a reporting rhythm your team can run without us.',
  },
]

export function Approach() {
  return (
    <section id="approach" className="border-b border-border bg-secondary/40 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <h2 className="max-w-md font-display text-3xl font-medium tracking-tight text-foreground md:text-5xl">
            How we work
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Every engagement follows the same discipline — short cycles, explicit assumptions
            and deliverables that stand on their own after we leave.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 60} className="bg-background">
              <div className="flex h-full flex-col px-6 py-8">
                <span className="h-px w-8 bg-brass" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-medium tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
