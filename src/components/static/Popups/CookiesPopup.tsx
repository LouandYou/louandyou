import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import { useStoryblok } from "../../../lib/storyblok";
import Cookies from "js-cookie";
import { Text } from "../../dynamic";

import styles from "./CookiesPopup.module.scss";
import router from "next/dist/client/router";

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
          <div className="is-flex is-justify-content-space-between">
            <h2>Cookies</h2>
            <div className={styles.language_switch}>
              {locales
                .map((loc) => (
                  <Link
                    key={loc}
                    href={`/${loc === defaultLocale ? "" : loc}`}
                    locale={false}
                    passHref
                  >
                    <a>
                      <div
                        className={`px-1 ${
                          loc === locale ? styles.purple : ""
                        }`}
                      >
                        {loc.toUpperCase()}
                      </div>
                    </a>
                  </Link>
                ))
                .reduce((prev, curr) => [prev, "|", curr])}
            </div>
          </div>
          <div className="py-3">
            <Text blok={story.content} attribute={"cookies_paragraph"} />
          </div>
          <div className="is-flex is-justify-content-space-between">
            <button
              onClick={() => router.push("/settings")}
              className={styles.button}
            >
              {story.content.cookies_link}
            </button>
            <button onClick={handleOnClick} className={styles.button}>
              {story.content.cookies_link_2}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
