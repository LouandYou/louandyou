import React, { ReactElement } from "react";
import Head from "next/head";
import { CookiesPopup, ExitButton, Footer, Navbar } from ".";

interface Props {
  locale?: string;
  locales?: any;
  defaultLocale: any;
  content: any;
}

export function Layout({
  children,
  content,
  locale,
  defaultLocale,
  locales,
}: React.PropsWithChildren<Props>): ReactElement {
  return (
    <>
      <Head>
        <title>Lou&You</title>
        <meta
          name="description"
          content={
            locale === "en"
              ? "Hi, my name is Lou I'm a digital companion for people affected by gender-based violence. Whatever you are going through, I am here to support you on your journey towards a self-determined life."
              : "Hi, ich bin Lou Ich bin eine digitale Begleitung für Menschen, die häusliche oder sexualisierte Gewalt erlebt haben. Was auch immer du gerade durchmachst - ich bin da, um dich auf deinem Weg in ein selbstbestimmtes Leben zu unterstützen."
          }
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar
        locale={locale}
        defaultLocale={defaultLocale}
        locales={locales}
        content={content}
      />
      <main>{children}</main>
      <Footer content={content} />
      <CookiesPopup
        locales={locales}
        locale={locale}
        defaultLocale={defaultLocale}
        content={content}
      />
      <ExitButton content={content} />
    </>
  );
}
