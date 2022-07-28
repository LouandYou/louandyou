import React, { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import Cookies from "js-cookie";
import { CookiesPopup, ExitButton, Footer, Navbar } from ".";
import { COOKIES } from "../../../src/config";

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
  const [isCookiePopupResolved, setIsCookiePopupResolved] = useState<
    boolean | undefined
  >(false);

  useEffect(() => {
    setIsCookiePopupResolved(Cookies.get(COOKIES.COOKIES_POPUP_RESOLVED));
  }, []);

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
        setIsCookiePopupResolved={() => setIsCookiePopupResolved(true)}
        locales={locales}
        locale={locale}
        defaultLocale={defaultLocale}
        content={content}
      />
      {isCookiePopupResolved && <ExitButton content={content} />}
    </>
  );
}
