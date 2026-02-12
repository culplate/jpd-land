import toast from 'react-hot-toast';
import s from './ContactForm.module.scss';

export function ContactForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      toast.success('Form submitted successfully');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        aria-label="Name"
        autoComplete="name"
      />
      <input
        type="email"
        placeholder="Email"
        aria-label="Email"
        autoComplete="email"
      />
      <textarea placeholder="Message" aria-label="Message" autoComplete="off" />
      <button type="submit" aria-label="Submit">
        Submit
      </button>
    </form>
  );
}
