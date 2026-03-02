import emailjs from '@emailjs/browser'

export const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY',
}

export interface LeadFormData {
  name: string
  email: string
  phone: string
  company?: string
  message?: string
}

export async function sendLeadEmail(data: LeadFormData): Promise<void> {
  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      company: data.company ?? '',
      message: data.message ?? '',
    },
    EMAILJS_CONFIG.publicKey
  )
}
