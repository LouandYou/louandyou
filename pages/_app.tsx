import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { ExitButtonProvider } from "../src/components/static/ExitButton/ExitButtonProvider";
import { Layout } from "../src/components/static";
import { useStoryblok } from "../src/lib/storyblok";
import { setBigFont, setContrast } from "../src/utils/cookies";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { COOKIES } from "../src/config";
import PlausibleProvider from "next-plausible";

config.autoAddCss = false;

if (process.env.NODE_ENV === "production") {
  // Disable these log types for production
  console.warn = () => {};
  console.debug = () => {};
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Cookies.get(COOKIES.FONT_BIG) && setBigFont();
    Cookies.get(COOKIES.CONTRAST) && setContrast();
  }, []);

  let story = useStoryblok(
    pageProps.story,
    pageProps.preview,
    pageProps.locale
  );
  let layoutStory = useStoryblok(
    pageProps.layoutStory,
    pageProps.preview,
    pageProps.locale
  );

  if (!layoutStory) {
    console.warn("Layout story is missing on this page");
    return (
      <ExitButtonProvider>
        <Component {...pageProps} />
      </ExitButtonProvider>
    );
  }

  return (
    <PlausibleProvider
      enabled={Cookies.get(COOKIES.ENABLE_ANALYTICS) ? true : false}
      domain="louandyou.org"
    >
      <ExitButtonProvider>
        <Layout
          content={layoutStory.content}
          locales={pageProps.locales}
          locale={pageProps.locale}
          defaultLocale={pageProps.defaultLocale}
        >
          <Component {...{ ...pageProps, story, layoutStory }} />
        </Layout>
      </ExitButtonProvider>
    </PlausibleProvider>
  );
}
