import { Reveal } from '@/hooks/useReveal'

export function About() {
  return (
    <section id="about" className="border-b border-border scroll-mt-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.6fr] md:gap-16 md:px-8 md:py-24">
        <Reveal>
          <div className="flex aspect-square w-full max-w-56 items-center justify-center border border-border bg-ink">
            <span className="font-display text-6xl font-medium text-brass-light">RM</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-5xl">
            Led by a practitioner, not a pitch team
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Magage Advisory was founded by <strong className="font-semibold text-foreground">Rorisang Magage</strong>,
            a finance and consulting practitioner who has sat on both sides of the table —
            building the models inside operating businesses and stress-testing them on
            behalf of investors and lenders.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            The practice stays deliberately small: senior attention on every mandate, no
            leverage model, and advice that is accountable for what happens after the
            slide deck.
          </p>

          <dl className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
            {[
              { k: 'Based in', v: 'Johannesburg, ZA' },
              { k: 'Working across', v: 'Sub-Saharan Africa' },
              { k: 'Sectors', v: 'Retail · Industrials · Financial services' },
            ].map((item) => (
              <div key={item.k} className="bg-background px-5 py-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {item.k}
                </dt>
                <dd className="mt-2 text-sm font-medium text-foreground">{item.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
