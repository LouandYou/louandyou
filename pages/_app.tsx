import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { ExitButtonProvider } from "../src/components/static/ExitButton/ExitButtonProvider";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (Cookies.get("FONT_BIG")) {
      document.documentElement.style.setProperty("--size-font", "1.25em");
      document.documentElement.style.setProperty(
        "--size-font-checkbox",
        "18px"
      );
    }
  }, []);

  return (
    <ExitButtonProvider>
      <Component {...pageProps} />;
    </ExitButtonProvider>
  );
}

export default MyApp;
