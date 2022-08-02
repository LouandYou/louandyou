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
              ? "Hi, I'm Lou. I'm here for you when you've experienced violence and to help you live a self-determined life."
              : "Hi, ich bin Lou. Ich bin für dich da, wenn du Gewalt erlebt hast, und helfe dir, dein Leben selbstbestimmt zu gestalten."
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
