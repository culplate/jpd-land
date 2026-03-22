import { z } from 'zod';

const PHONE_REGEX = /^\+?[\d\s\-().]{7,20}$/;

export type ContactValidationMessages = {
  nameMin: string;
  nameMax: string;
  emailInvalid: string;
  emailMax: string;
  phoneRequired: string;
  phoneInvalid: string;
  phoneMax: string;
  consentRequired: string;
};

const DEFAULT_MESSAGES: ContactValidationMessages = {
  nameMin: 'Name must be at least 2 characters',
  nameMax: 'Name must be less than 50 characters',
  emailInvalid: 'Please enter a valid email address',
  emailMax: 'Email must be less than 50 characters',
  phoneRequired: 'Phone number is required',
  phoneInvalid: 'Please enter a valid phone number',
  phoneMax: 'Phone number must be less than 30 characters',
  consentRequired: 'You must agree to the Privacy Policy and Terms to continue',
};

export function createContactFormSchema(
  messages: ContactValidationMessages = DEFAULT_MESSAGES
) {
  return z.object({
    name: z
      .string()
      .min(2, { error: messages.nameMin })
      .max(50, { error: messages.nameMax }),
    email: z
      .email({ error: messages.emailInvalid })
      .max(50, { error: messages.emailMax }),
    phone: z
      .string()
      .min(1, { error: messages.phoneRequired })
      .max(30, { error: messages.phoneMax })
      .refine((val) => PHONE_REGEX.test(val), {
        error: messages.phoneInvalid,
      }),
    message: z.string().optional(),
    consent: z.preprocess(
      (val) => (typeof val === 'string' ? val : ''),
      z.string().refine((v) => v === 'on', {
        error: messages.consentRequired,
      })
    ),
    website: z.string(),
  });
}

export const contactFormSchema = createContactFormSchema();

export type ContactFormData = z.infer<typeof contactFormSchema>;
