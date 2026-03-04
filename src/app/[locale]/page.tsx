import { Hero } from '@/components/sections';
import { Reviews } from '@/components/sections/main/Reviews/Reviews';
import { History } from '@/components/sections/main/History/History';
import { Benefits } from '@/components/sections/main/Benefits/Benefits';
import { ProductsPreview } from '@/components/sections/main/ProductsPreview/ProductsPreview';
import { getDictionary, Locale } from '@/lib/locales/locales';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero
        dict={dict.main.hero}
        locale={locale}
        productCards={{
          shori: dict.products.card.shori,
          shogun: dict.products.card.shogun,
          fujizakura: dict.products.card.fujizakura,
        }}
      />
      <Reviews dict={dict.main.reviews} />
      <History locale={locale} dict={dict.main.history} />
      <Benefits dict={dict.main.benefits} />
      <ProductsPreview
        dict={dict.main.hero}
        locale={locale}
        productCards={{
          yamato: dict.products.card.yamato,
          fujiyama: dict.products.card.fujiyama,
          shori: dict.products.card.shori,
        }}
      />
    </>
  );
}
