'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  createContactFormSchema,
  type ContactFormData,
} from '@/lib/validations/contact';
import type { Dictionary } from '@/content/i18n/schema';
import s from './ContactForm.module.scss';

type Props = {
  dict: Dictionary['contact'];
};

export function ContactForm({ dict }: Props) {
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.target as HTMLFormElement);
    const raw = Object.fromEntries(formData);

    const schema = createContactFormSchema(dict.validation);
    const result = schema.safeParse(raw);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      for (const issue of result.error.issues) {
        const field = String(issue.path[0]) as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast.success(dict.form.successMessage);
      (e.target as HTMLFormElement).reset();
      setErrors({});
    } catch {
      toast.error(dict.form.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} noValidate>
      <div className={s.field}>
        <label htmlFor="name" className={s.label}>
          {dict.form.nameLabel}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder={dict.form.namePlaceholder}
          aria-invalid={!!errors.name}
          autoComplete="name"
          className={errors.name ? s.invalid : undefined}
        />
        {errors.name && <span className={s.error}>{errors.name}</span>}
      </div>

      <div className={s.field}>
        <label htmlFor="email" className={s.label}>
          {dict.form.emailLabel}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder={dict.form.emailPlaceholder}
          aria-invalid={!!errors.email}
          autoComplete="email"
          className={errors.email ? s.invalid : undefined}
        />
        {errors.email && <span className={s.error}>{errors.email}</span>}
      </div>

      <div className={s.field}>
        <label htmlFor="phone" className={s.label}>
          {dict.form.phoneLabel}
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder={dict.form.phonePlaceholder}
          aria-invalid={!!errors.phone}
          autoComplete="tel"
          className={errors.phone ? s.invalid : undefined}
        />
        {errors.phone && <span className={s.error}>{errors.phone}</span>}
      </div>

      <div className={s.field}>
        <label htmlFor="message" className={s.label}>
          {dict.form.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={dict.form.messagePlaceholder}
          autoComplete="off"
          rows={4}
        />
      </div>

      <div className={s.hp} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? dict.form.sending : dict.form.submit}
      </button>
    </form>
  );
}
