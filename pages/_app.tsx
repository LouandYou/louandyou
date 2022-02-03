import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Cookies from "js-cookie";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (Cookies.get("font_big")) {
      document.documentElement.style.setProperty("--size-font", "1.25em");
      document.documentElement.style.setProperty(
        "--size-font-checkbox",
        "18px"
      );
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
