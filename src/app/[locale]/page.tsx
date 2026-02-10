import { Hero } from '@/components/sections';
import { getDictionary } from '@/lib/locales/locales';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict.main.hero} />
    </>
  );
}
