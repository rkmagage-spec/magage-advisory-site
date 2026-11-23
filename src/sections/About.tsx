import { Reveal } from '@/hooks/useReveal'
import logo from '@/assets/rvm-logo'

export function About() {
  return (
    <section id="about" className="border-b border-border scroll-mt-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.6fr] md:gap-16 md:px-8 md:py-24">
        <Reveal>
          <img
            src={logo}
            alt="RVM Consulting logo"
            className="aspect-square w-full max-w-56 border border-border object-cover"
          />
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-5xl">
            Led by a practitioner, not a pitch team
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            RVM Consulting (Pty) Ltd is led by <strong className="font-semibold text-foreground">Rorisang Keaorata Magage</strong>,
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
              { k: 'Registered office', v: 'Kimberley, Northern Cape' },
              { k: 'Working across', v: 'South Africa' },
              { k: 'Sectors', v: 'Infrastructure · Mining' },
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
