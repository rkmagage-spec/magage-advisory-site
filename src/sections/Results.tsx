import { Reveal } from '@/hooks/useReveal'

const RESULTS = [
  {
    figure: 'R180m',
    label: 'working capital unlocked',
    context: 'National retail group — receivables redesign and supplier terms reset across 140 stores.',
  },
  {
    figure: 'R1.1bn',
    label: 'acquisition financed',
    context: 'Industrial client — debt and equity package structured and placed in eleven weeks.',
  },
  {
    figure: '42%',
    label: 'faster month-end close',
    context: 'Financial services firm — close process re-engineered from twelve days to seven.',
  },
]

export function Results() {
  return (
    <section id="results" className="bg-ink text-primary-foreground scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <h2 className="max-w-lg font-display text-3xl font-medium tracking-tight md:text-5xl">
            Outcomes, not activity
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/70">
            Selected results from recent mandates. Details shared under NDA on request.
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16">
          {RESULTS.map((result, i) => (
            <Reveal key={result.label} delay={i * 60}>
              <div className="grid gap-2 border-t border-primary-foreground/15 py-8 md:grid-cols-[1fr_1fr_1.2fr] md:items-baseline md:gap-10 md:py-10">
                <p className="font-display text-4xl font-medium tabular-nums text-brass-light md:text-5xl">
                  {result.figure}
                </p>
                <p className="text-lg font-medium">{result.label}</p>
                <p className="text-sm leading-relaxed text-primary-foreground/70">
                  {result.context}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <blockquote className="mt-14 border-t border-primary-foreground/15 pt-10 md:mt-20">
            <p className="max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              “The first adviser we have worked with who argues with us — politely, with a
              model attached. The raise closed because of it.”
            </p>
            <footer className="mt-6 text-sm text-primary-foreground/70">
              Chief Financial Officer, JSE-listed retailer
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
