import React, { ReactElement, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Text } from "../../dynamic";

import styles from "./CookiesPopup.module.scss";
import { COOKIES } from "../../../config";
import LanguageSwitch from "../LanguageSwitch";

export function CookiesPopup({
  locales,
  locale,
  defaultLocale,
  content,
}): ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    Cookies.get(COOKIES.USER_CONSENT) ? null : setIsVisible(true);
  }, []);

  const handleOnClick = () => {
    setIsVisible(false);
    Cookies.set(COOKIES.USER_CONSENT, true);
  };

  if (!isVisible) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <div className="is-flex is-justify-content-space-between">
        <h2>Cookies</h2>
        <LanguageSwitch
          locales={locales}
          locale={locale}
          defaultLocale={defaultLocale}
        />
      </div>
      <div style={{ marginBottom: "36px" }}>
        <Text blok={content} attribute={"cookies_paragraph"} />
      </div>
      <div className="is-flex is-flex-direction-column">
        <a
          href={"/settings#cookies"}
          className={`${styles.button} ${styles.purple} mb-2`}
        >
          {content.cookies_link}
        </a>
        <button
          onClick={handleOnClick}
          className={`${styles.button} ${styles.purple_secondery}`}
        >
          {content.cookies_link_2}
        </button>
      </div>
    </div>
  );
}
