'use server'

import { projectTypes } from '@/lib/constants'
import type { EnquiryState } from '@/lib/enquiry'
import { site } from '@/lib/site'

/**
 * Validates the enquiry form and emails it to the business via Resend.
 *
 * ─── ACTIVATING DELIVERY ─────────────────────────────────────────────────────
 * Sending switches on automatically once BOTH of these environment variables
 * are set on the Vercel project:
 *
 *   RESEND_API_KEY      — from https://resend.com/api-keys
 *   ENQUIRY_FROM_EMAIL  — the verified sending address. Use
 *                         `onboarding@resend.dev` to test straight away, or an
 *                         address on a domain verified in Resend for production
 *                         (e.g. enquiries@iwdmelbourne.com.au).
 *
 * Until then the action returns the `unconfigured` state, and the form tells
 * the visitor plainly that nothing was sent and to call or email instead — it
 * never shows a false success message.
 *
 * Enquiries are delivered to `site.email` with the sender's address as
 * reply-to, so replying in Gmail goes straight back to the customer. To swap
 * Resend for Formspree, Web3Forms or SMTP, only this function needs to change.
 */
export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const name = String(formData.get('name') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const projectType = String(formData.get('projectType') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  const values = { name, phone, email, projectType, message }
  const fieldErrors: EnquiryState['fieldErrors'] = {}

  if (name.length < 2) {
    fieldErrors.name = 'Please enter your full name.'
  }

  // Permissive on formatting — Australian and international numbers both valid.
  const digits = phone.replace(/[^\d]/g, '')
  if (digits.length < 6) {
    fieldErrors.phone = 'Please enter a contact phone number.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    fieldErrors.email = 'Please enter a valid email address.'
  }

  if (!projectTypes.includes(projectType as (typeof projectTypes)[number])) {
    fieldErrors.projectType = 'Please select a project type.'
  }

  if (message.length < 10) {
    fieldErrors.message = 'Please tell us a little about your project.'
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: 'error',
      message: 'Please check the highlighted fields and try again.',
      fieldErrors,
      values,
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.ENQUIRY_FROM_EMAIL

  // Until both variables are set, never claim the enquiry was delivered.
  if (!apiKey || !from) {
    return {
      status: 'unconfigured',
      message:
        'This form is not yet connected to an email service, so your enquiry has not been sent. Please call or email us directly and we will get straight back to you.',
      fieldErrors: {},
      values,
    }
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: `${site.name} Website <${from}>`,
      to: [site.email.display],
      replyTo: email,
      subject: `Website enquiry — ${projectType} — ${name}`,
      text: [
        `New enquiry from the ${site.name} website.`,
        '',
        `Name:    ${name}`,
        `Phone:   ${phone}`,
        `Email:   ${email}`,
        `Project: ${projectType}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    if (error) {
      console.log('[v0] Resend returned an error:', error)
      return {
        status: 'error',
        message: `Your enquiry could not be sent just now. Please call ${site.phone.display} or email ${site.email.display} instead.`,
        fieldErrors: {},
        values,
      }
    }

    return {
      status: 'success',
      message:
        'Thanks for getting in touch. Your enquiry has been sent and we will get back to you shortly.',
      fieldErrors: {},
      // Clear the form on success.
      values: { name: '', phone: '', email: '', projectType: '', message: '' },
    }
  } catch (err) {
    console.log('[v0] Failed to send enquiry:', err)
    return {
      status: 'error',
      message: `Your enquiry could not be sent just now. Please call ${site.phone.display} or email ${site.email.display} instead.`,
      fieldErrors: {},
      values,
    }
  }
}
