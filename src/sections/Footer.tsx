const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            RVM&nbsp;<span className="text-brass-light">Consulting</span>
          </a>
          <p className="mt-2 text-sm text-primary-foreground/60">
            Corporate finance &amp; advisory · Kimberley, Northern Cape
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          {[
            { label: 'Services', href: '#services' },
            { label: 'Approach', href: '#approach' },
            { label: 'Results', href: '#results' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-primary-foreground/70 transition-colors duration-200 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-primary-foreground/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {YEAR} RVM Consulting (Pty) Ltd · Reg. no. 2013/100264/07. All rights reserved.</p>
          <p>Figures shown are illustrative of representative engagements.</p>
        </div>
      </div>
    </footer>
  )
}
