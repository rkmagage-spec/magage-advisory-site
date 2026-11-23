import { useState, type FormEvent } from 'react'
import { CheckCircle2, Mail, MapPin } from 'lucide-react'
import { Reveal } from '@/hooks/useReveal'

type FormState = {
  name: string
  email: string
  company: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormState): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'Please tell us your name.'
  if (!values.email.trim()) errors.email = 'An email address is required.'
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'That email address does not look right.'
  if (!values.message.trim()) errors.message = 'A few words about the mandate helps us route your enquiry.'
  else if (values.message.trim().length < 20) errors.message = 'A little more detail, please — at least 20 characters.'
  return errors
}

const inputClass =
  'h-12 w-full border border-input bg-background px-4 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors duration-200 focus:border-brass focus:outline-none focus:ring-2 focus:ring-ring/40'

const textareaClass =
  'min-h-32 w-full resize-y border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors duration-200 focus:border-brass focus:outline-none focus:ring-2 focus:ring-ring/40'

export function Contact() {
  const [values, setValues] = useState<FormState>({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const set = (key: keyof FormState) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    setErrors((err) => ({ ...err, [key]: undefined }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length === 0) setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.3fr] md:gap-16 md:px-8 md:py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-5xl">
            Start the conversation
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Tell us what you are deciding, raising or untangling. We reply within one
            business day — usually with two or three pointed questions before any proposal.
          </p>
          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
              <a
                href="mailto:hello@rvmconsulting.co.za"
                className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-brass hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                hello@rvmconsulting.co.za
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">Kimberley, Northern Cape — by appointment</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={100}>
          {submitted ? (
            <div className="flex h-full min-h-80 flex-col items-start justify-center border border-border bg-card px-8 py-12">
              <CheckCircle2 className="h-8 w-8 text-brass" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl font-medium tracking-tight text-foreground">
                Thank you, {values.name.split(' ')[0]}.
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                Your enquiry has been noted. Expect a reply at{' '}
                <span className="font-medium text-foreground">{values.email}</span> within one
                business day.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setValues({ name: '', email: '', company: '', message: '' })
                }}
                className="mt-8 inline-flex h-11 items-center border border-foreground px-5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="border border-border bg-card px-6 py-8 md:px-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-foreground">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={set('name')}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className={inputClass}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-2 text-sm text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-foreground">
                    Work email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={set('email')}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className={inputClass}
                    placeholder="you@company.co.za"
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-2 text-sm text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="contact-company" className="mb-2 block text-sm font-semibold text-foreground">
                  Company <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="contact-company"
                  type="text"
                  autoComplete="organization"
                  value={values.company}
                  onChange={set('company')}
                  className={inputClass}
                  placeholder="Company or fund"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-foreground">
                  What are you working on?
                </label>
                <textarea
                  id="contact-message"
                  value={values.message}
                  onChange={set('message')}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={textareaClass}
                  placeholder="A raise, an acquisition, a model that no longer balances — a sentence or two is enough."
                />
                {errors.message && (
                  <p id="contact-message-error" className="mt-2 text-sm text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex h-12 w-full items-center justify-center bg-primary text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-ink-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto sm:px-10"
              >
                Send enquiry
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
