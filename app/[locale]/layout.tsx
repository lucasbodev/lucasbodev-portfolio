import React from 'react';
import '@/app/globals.css';
import { Providers } from '@/app/providers';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Toaster } from 'react-hot-toast';
import localFont from 'next/font/local';
import bentoStyles from '@/styles/ui/bento.module.css';
import Nav from '@/components/nav/nav.component';
import Menu from '@/components/menu/menu.component';
import { From } from '@/components/reveal-motion/variants';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: 'Portfolio - Lucas Bodet',
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const climateCrisis = localFont({
  src: '../fonts/ClimateCrisis.ttf',
  display: 'swap',
  variable: '--font-climate-crisis'
});

const funnelDisplay = localFont({
  src: '../fonts/FunnelDisplay.ttf',
  display: 'swap',
  variable: '--font-funnel-display'
});

const LocaleLayout = async (
  { children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>; }
) => {

  const { locale } = await params;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${climateCrisis.variable} ${funnelDisplay.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <main className={bentoStyles.bento}>
              <Nav reveal={From.TOP}/>
              {children}
              <Nav reveal={From.BOTTOM}/>
            </main>
            <Menu/>
            <SpeedInsights />
            <Analytics />
            <Toaster
              position="bottom-right"
              reverseOrder={false}
            />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
