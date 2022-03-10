import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { ExitButtonProvider } from "../src/components/static/ExitButton/ExitButtonProvider";

function MyApp({ Component, pageProps }: AppProps) {
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

  return (
    <ExitButtonProvider>
      <Component {...pageProps} />
    </ExitButtonProvider>
  );
}

export default MyApp;
