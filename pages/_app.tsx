import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { ExitButtonProvider } from "../src/components/static/ExitButton/ExitButtonProvider";
import { Footer, Layout } from "../src/components/static";
import { useStoryblok } from "../src/lib/storyblok";

if (process.env.NODE_ENV === "production") {
  // Disable these log types for production
  console.warn = () => {};
  console.debug = () => {};
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (Cookies.get("FONT_BIG")) {
      document.documentElement.style.setProperty(
        "--size-font-paragraph",
        "24px"
      );
      document.documentElement.style.setProperty(
        "--size-font-paragraph-title",
        "25px"
      );
    }
    Cookies.get("CONTRAST")
      ? document.documentElement.style.setProperty("--color-font", "#101223")
      : null;
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
    <Layout content={layoutStory?.content}>
      <ExitButtonProvider>
        <Component {...{ ...pageProps, story, layoutStory }} />
        {/* <Footer /> */}
      </ExitButtonProvider>
    </Layout>
  );
}
