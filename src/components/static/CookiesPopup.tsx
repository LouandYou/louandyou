import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import { useStoryblok } from "../../lib/storyblok";
import Cookies from "js-cookie";

import styles from "./CookiesPopup.module.scss";

export function CookiesPopup({
  locales,
  locale,
  defaultLocale,
  story,
  preview,
}): ReactElement {
  story = useStoryblok(story, preview, locale);

  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    Cookies.get("COOKIES_POPUP") ? setIsVisible(false) : null;
  }, []);

  const handleOnClick = () => {
    setIsVisible(false);
    Cookies.set("COOKIES_POPUP", true);
  };

  return (
    <>
      {isVisible && (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h2>cookies</h2>
            <div className={styles.language_switch}>
              {locales
                .map((loc) => (
                  <Link
                    key={loc}
                    href={`/${loc === defaultLocale ? "" : loc}`}
                    locale={false}
                    passHref
                  >
                    <div
                      className={`px-1 ${loc === locale ? styles.purple : ""}`}
                    >
                      {loc.toUpperCase()}
                    </div>
                  </Link>
                ))
                .reduce((prev, curr) => [prev, "|", curr])}
            </div>
          </div>
          <p className="pr-2">
            I am using cookies to show you only things that are actually helpful
            for you and analyse usage. By clicking on “ok, cool”, you allow me
            to do so.
          </p>
          <div className={styles.wrapper}>
            <button onClick={handleOnClick} className={styles.button}>
              okay, cool{" "}
            </button>
            <Link href="/settings" passHref>
              <button className={styles.button}>go to settings</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
