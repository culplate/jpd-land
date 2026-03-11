import { z } from 'zod';

const PHONE_REGEX = /^\+?[\d\s\-().]{7,20}$/;

export type ContactValidationMessages = {
  nameMin: string;
  nameMax: string;
  emailInvalid: string;
  emailMax: string;
  phoneInvalid: string;
  phoneMax: string;
};

const DEFAULT_MESSAGES: ContactValidationMessages = {
  nameMin: 'Name must be at least 2 characters',
  nameMax: 'Name must be less than 50 characters',
  emailInvalid: 'Please enter a valid email address',
  emailMax: 'Email must be less than 50 characters',
  phoneInvalid: 'Please enter a valid phone number',
  phoneMax: 'Phone number must be less than 30 characters',
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
      .refine((val) => val === '' || PHONE_REGEX.test(val), {
        error: messages.phoneInvalid,
      })
      .max(30, { error: messages.phoneMax }),
    message: z.string().optional(),
    website: z.string(),
  });
}

export const contactFormSchema = createContactFormSchema();

export type ContactFormData = z.infer<typeof contactFormSchema>;
