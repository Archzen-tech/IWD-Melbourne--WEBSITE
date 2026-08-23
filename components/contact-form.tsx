'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { AlertTriangle, ArrowRight, Check, Loader2 } from 'lucide-react'

import { submitEnquiry } from '@/app/actions/enquiry'
import { initialEnquiryState } from '@/lib/enquiry'
import { projectTypes } from '@/lib/constants'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

const fieldBase =
  'w-full border bg-card px-4 py-3.5 text-[0.9375rem] text-foreground transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-foreground text-background hover:bg-accent inline-flex items-center justify-center gap-2.5 px-8 py-4 text-[0.75rem] font-medium tracking-[0.14em] uppercase transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          Sending
        </>
      ) : (
        <>
          Send Enquiry
          <ArrowRight className="size-4" aria-hidden="true" />
        </>
      )}
    </button>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitEnquiry, initialEnquiryState)
  const { fieldErrors, values } = state

  return (
    <form action={formAction} className="flex flex-col gap-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="eyebrow text-muted-foreground"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            defaultValue={values.name}
            aria-invalid={fieldErrors.name ? true : undefined}
            aria-describedby={fieldErrors.name ? 'name-error' : undefined}
            placeholder="Jane Smith"
            className={cn(
              fieldBase,
              fieldErrors.name ? 'border-destructive' : 'border-input',
            )}
          />
          {fieldErrors.name ? (
            <p id="name-error" className="text-destructive text-[0.8125rem]">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="eyebrow text-muted-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            defaultValue={values.phone}
            aria-invalid={fieldErrors.phone ? true : undefined}
            aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
            placeholder="04XX XXX XXX"
            className={cn(
              fieldBase,
              fieldErrors.phone ? 'border-destructive' : 'border-input',
            )}
          />
          {fieldErrors.phone ? (
            <p id="phone-error" className="text-destructive text-[0.8125rem]">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="eyebrow text-muted-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={values.email}
            aria-invalid={fieldErrors.email ? true : undefined}
            aria-describedby={fieldErrors.email ? 'email-error' : undefined}
            placeholder="you@example.com"
            className={cn(
              fieldBase,
              fieldErrors.email ? 'border-destructive' : 'border-input',
            )}
          />
          {fieldErrors.email ? (
            <p id="email-error" className="text-destructive text-[0.8125rem]">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="projectType"
            className="eyebrow text-muted-foreground"
          >
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue={values.projectType}
            aria-invalid={fieldErrors.projectType ? true : undefined}
            aria-describedby={
              fieldErrors.projectType ? 'projectType-error' : undefined
            }
            className={cn(
              fieldBase,
              'appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10',
              fieldErrors.projectType ? 'border-destructive' : 'border-input',
            )}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23665d51' stroke-width='1.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {fieldErrors.projectType ? (
            <p
              id="projectType-error"
              className="text-destructive text-[0.8125rem]"
            >
              {fieldErrors.projectType}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="eyebrow text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          defaultValue={values.message}
          aria-invalid={fieldErrors.message ? true : undefined}
          aria-describedby={fieldErrors.message ? 'message-error' : undefined}
          placeholder="Tell us about the space and what you have in mind."
          className={cn(
            fieldBase,
            'resize-y',
            fieldErrors.message ? 'border-destructive' : 'border-input',
          )}
        />
        {fieldErrors.message ? (
          <p id="message-error" className="text-destructive text-[0.8125rem]">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      {/* Status region — announced to assistive technology */}
      <div aria-live="polite">
        {state.status === 'error' ? (
          <p className="text-destructive flex items-start gap-2.5 text-[0.9375rem]">
            <AlertTriangle
              className="mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />
            {state.message}
          </p>
        ) : null}

        {state.status === 'success' ? (
          <p className="border-input bg-secondary/70 flex items-start gap-2.5 border p-5 text-[0.9375rem] leading-relaxed">
            <Check className="text-accent mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>{state.message}</span>
          </p>
        ) : null}

        {state.status === 'unconfigured' ? (
          <div className="border-input bg-secondary/70 flex flex-col gap-3 border p-5">
            <p className="flex items-start gap-2.5 text-[0.9375rem] leading-relaxed">
              <AlertTriangle
                className="text-accent mt-0.5 size-4 shrink-0"
                aria-hidden="true"
              />
              <span>{state.message}</span>
            </p>
            <div className="flex flex-col gap-2 pl-7 text-[0.9375rem] sm:flex-row sm:gap-6">
              <a
                href={site.phone.href}
                className="text-foreground hover:text-accent font-medium underline decoration-1 underline-offset-4 transition-colors"
              >
                {site.phone.display}
              </a>
              <a
                href={site.email.href}
                className="text-foreground hover:text-accent font-medium break-all underline decoration-1 underline-offset-4 transition-colors"
              >
                {site.email.display}
              </a>
            </div>
          </div>
        ) : null}
      </div>

      <div>
        <SubmitButton />
      </div>
    </form>
  )
}
