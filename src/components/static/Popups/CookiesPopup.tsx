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
  setIsCookiePopupResolved,
}): ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      Cookies.get(COOKIES.COOKIES_POPUP_RESOLVED) === undefined
        ? setIsVisible(true)
        : null;
    }, 3000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  const handleOnClick = (disableCookies: boolean) => {
    setIsVisible(false);
    Cookies.set(COOKIES.COOKIES_POPUP_RESOLVED, true);
    setTimeout(() => {
      setIsCookiePopupResolved();
    }, 1000);
    disableCookies && Cookies.set(COOKIES.DISABLE_COOKIES, true);
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
        <button
          onClick={() => handleOnClick(true)}
          className={`${styles.button} ${styles.purple} mb-2`}
        >
          {content.cookies_link}
        </button>
        <button
          onClick={() => handleOnClick(false)}
          className={`${styles.button} ${styles.purple_secondery}`}
        >
          {content.cookies_link_2}
        </button>
      </div>
    </div>
  );
}
