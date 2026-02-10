import { getDictionary } from '@/lib/locales/locales';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Contact({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <h1>Contact page</h1>
    </>
  );
}
