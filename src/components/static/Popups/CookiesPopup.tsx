import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import { useStoryblok } from "../../../lib/storyblok";
import Cookies from "js-cookie";
import { Text } from "../../dynamic";

import styles from "./CookiesPopup.module.scss";
import router from "next/dist/client/router";
import { COOKIES } from "../../../config";

export function CookiesPopup({
                               locales,
                               locale,
                               defaultLocale,
                               story,
                               preview
                             }): ReactElement {
  story = useStoryblok(story, preview, locale);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    Cookies.get(COOKIES.USER_CONSENT) ? null : setIsVisible(true);
  }, []);

  const handleOnClick = () => {
    setIsVisible(false);
    Cookies.set(COOKIES.USER_CONSENT, true);
  };

  return (
    <>
      {isVisible && (
        <div className={styles.container}>
          <div className="is-flex is-justify-content-space-between">
            <h2>Cookies</h2>
            <div className={styles.language_switch}>
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={`/${loc === defaultLocale ? "" : loc}`}
                  locale={false}
                  passHref
                >
                  <a>
                    <div
                      className={`mx-1 ${
                        loc === locale ? styles.selected : ""
                      }`}
                    >
                      {loc.toUpperCase()}
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: "36px" }}>
            <Text blok={story.content} attribute={"cookies_paragraph"} />
          </div>
          <div className="is-flex is-flex-direction-column">
            <a
              {/* TODO nextjs link anchor does not work here */}
              href={"/settings#cookies"}
              className={`${styles.button} ${styles.purple} mb-2`}
            >
              {story.content.cookies_link}
            </a>
            <button
              onClick={handleOnClick}
              className={`${styles.button} ${styles.purple_secondery}`}
            >
              {story.content.cookies_link_2}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
