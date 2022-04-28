import React, { ReactElement } from "react";
import Head from "next/head";
import { ExitButton, Footer, Navbar } from ".";

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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
        <script
          defer
          data-domain="louandyou.netlify.app"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <Navbar
        locale={locale}
        defaultLocale={defaultLocale}
        locales={locales}
        content={content}
      />
      <main>{children}</main>
      <Footer content={content} />
      <ExitButton content={content} />
    </>
  );
}
