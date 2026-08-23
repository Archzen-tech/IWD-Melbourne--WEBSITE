/**
 * Shared types and the initial state for the enquiry form.
 *
 * These live outside the `'use server'` module because a server-action file may
 * only export async functions — exporting a plain object from there leaves it
 * `undefined` on the client.
 */

export type EnquiryField =
  | 'name'
  | 'phone'
  | 'email'
  | 'projectType'
  | 'message'

export type EnquiryState = {
  status: 'idle' | 'error' | 'unconfigured' | 'success'
  message: string
  fieldErrors: Partial<Record<EnquiryField, string>>
  values: Record<EnquiryField, string>
}

export const initialEnquiryState: EnquiryState = {
  status: 'idle',
  message: '',
  fieldErrors: {},
  values: { name: '', phone: '', email: '', projectType: '', message: '' },
}
