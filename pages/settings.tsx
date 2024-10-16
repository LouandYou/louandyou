import React, { useContext, useEffect, useState } from "react";
import { Checkbox, Slider } from "../src/components/static";
import { useStoryblok } from "../src/lib/storyblok";
import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";
import { Text } from "../src/components/dynamic";
import Cookies from "js-cookie";
import {
  setBigFont,
  setSmallFont,
  setContrast,
  removeContrast,
} from "../src/utils/cookies";

import styles from "./settings.module.scss";
import { useRouter } from "next/dist/client/router";
import { ExitButtonContext } from "../src/components/static/ExitButton/ExitButtonContext";
import { ALL_COOKIES, COOKIES } from "../src/config";

const Settings = ({ story, locale, preview, defaultLocale }) => {
  const { content } = useStoryblok(story, preview, locale);
  const router = useRouter();

  const [isBigFont, setIsBigFont] = useState<boolean>(false);
  const [isEssentialCookies, setIsEssentialCookies] = useState<boolean>(true);
  const [isContrast, setIsContrastState] = useState<boolean>(false);
  const [isExitButton, setIsExitButton] = useState<boolean>(true);
  const [isAnalytics, setisAnalytics] = useState<boolean>(false);

  const { toggleIsVisible } = useContext(ExitButtonContext);

  useEffect(() => {
    Cookies.get(COOKIES.FONT_BIG) ? setIsBigFont(true) : setIsBigFont(false);
    Cookies.get(COOKIES.DISABLE_COOKIES)
      ? setIsEssentialCookies(false)
      : setIsEssentialCookies(true);
    Cookies.get(COOKIES.CONTRAST)
      ? setIsContrastState(true)
      : setIsContrastState(false);
    Cookies.get(COOKIES.HIDE_EXIT_BUTTON)
      ? setIsExitButton(false)
      : setIsExitButton(true);
    Cookies.get(COOKIES.ENABLE_ANALYTICS)
      ? setisAnalytics(true)
      : setisAnalytics(false);
  }, []);

  //language

  const handleLocale = (e: React.ChangeEvent<HTMLInputElement>) => {
    isEssentialCookies && Cookies.set(COOKIES.NEXT_LOCALE, e.target.value);
    e.target.value === defaultLocale
      ? router.push("/settings", "/settings", { locale: "de" })
      : router.push("/en/settings");
  };

  //contrast

  const handleContrast = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setIsContrastState(true);
      setContrast();
      isEssentialCookies && Cookies.set(COOKIES.CONTRAST, true);
    } else {
      setIsContrastState(false);
      removeContrast();
      Cookies.remove(COOKIES.CONTRAST);
    }
  };

  const handleOnKeyDown1 = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      const checked = e.target.previousElementSibling.checked;
      if (!checked) {
        setIsContrastState(true);
        setContrast();
        isEssentialCookies && Cookies.set(COOKIES.CONTRAST, true);
      } else {
        setIsContrastState(false);
        removeContrast();
        Cookies.remove(COOKIES.CONTRAST);
      }
    }
  };

  //font size

  const handleFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setBigFont();
      setIsBigFont(true);
      isEssentialCookies && Cookies.set(COOKIES.FONT_BIG, true);
    } else {
      setSmallFont();
      setIsBigFont(false);
      Cookies.remove(COOKIES.FONT_BIG);
    }
  };

  const handleOnKeyDown2 = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      const checked = e.target.previousElementSibling.checked;
      if (!checked) {
        setBigFont();
        setIsBigFont(true);
        isEssentialCookies && Cookies.set(COOKIES.FONT_BIG, true);
      } else {
        setSmallFont();
        setIsBigFont(false);
        Cookies.remove(COOKIES.FONT_BIG);
      }
    }
  };

  // exit button

  const handleExitButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setIsExitButton(true);
      isEssentialCookies && Cookies.set(COOKIES.HIDE_EXIT_BUTTON, true);
      toggleIsVisible!();
    } else {
      setIsExitButton(false);
      Cookies.remove(COOKIES.HIDE_EXIT_BUTTON);
      toggleIsVisible!();
    }
  };

  const handleOnKeyDown3 = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      const checked = e.target.previousElementSibling.checked;
      if (!checked) {
        setIsExitButton(true);
        isEssentialCookies && Cookies.set(COOKIES.HIDE_EXIT_BUTTON, true);
        toggleIsVisible!();
      } else {
        setIsExitButton(false);
        Cookies.remove(COOKIES.HIDE_EXIT_BUTTON);
        toggleIsVisible!();
      }
    }
  };

  // essential cookies

  const handleCookies = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      Cookies.remove(COOKIES.DISABLE_COOKIES);
      setIsEssentialCookies(true);
    } else {
      Cookies.set(COOKIES.DISABLE_COOKIES, true);
      ALL_COOKIES.forEach((cookie) => {
        Cookies.remove(cookie);
      });
      setIsEssentialCookies(false);
    }
  };

  const handleOnKeyDown4 = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      const checked = e.target.previousElementSibling.checked;
      console.log(checked);
      if (!checked) {
        Cookies.remove(COOKIES.DISABLE_COOKIES);
        setIsEssentialCookies(true);
      } else {
        Cookies.set(COOKIES.DISABLE_COOKIES, true);
        ALL_COOKIES.forEach((cookie) => {
          Cookies.remove(cookie);
        });
        setIsEssentialCookies(false);
      }
    }
  };

  // analytics

  const handleAnalytics = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      Cookies.set(COOKIES.ENABLE_ANALYTICS, true);
      setisAnalytics(true);
      router.reload();
    } else {
      Cookies.remove(COOKIES.ENABLE_ANALYTICS);
      setisAnalytics(false);
      router.reload();
    }
  };

  return (
    <>
      <section className={styles.landing_page}>
        <h1>{content.section1_title}</h1>
        <h2 className="mb-4">{content.contrast}</h2>
        <div className={styles.settings_wrapper}>
          <p>{content.higher_contrast}</p>
          <Slider
            onKeyDown={handleOnKeyDown1}
            onChange={handleContrast}
            checked={isContrast}
            blackBorder={true}
            ariaLabel={content.higher_contrast}
          />
        </div>
        <h2 className="mb-4"> {content.font_size}</h2>
        <div className={styles.settings_wrapper}>
          <p>{content.big}</p>
          <Slider
            onChange={handleFontSize}
            onKeyDown={handleOnKeyDown2}
            checked={isBigFont}
            blackBorder={true}
            ariaLabel={content.big}
          />
        </div>
        <div className="is-hidden-tablet">
          <h2 className="mb-4">{content.language}</h2>
          <div className={styles.checkbox_wraper}>
            <Checkbox
              type="radio"
              value="de"
              checked={locale === "de"}
              label="deutsch"
              onChange={handleLocale}
            />
            <Checkbox
              type="radio"
              value="en"
              checked={locale === "en"}
              label="english"
              onChange={handleLocale}
            />
          </div>
        </div>
      </section>

      <section id="section_2" className={styles.color_page}>
        <h1>{content.section2_title}</h1>
        <Text blok={content} attribute={"section2_p"} />
        <div style={{ marginTop: "48px" }} className={styles.settings_wrapper}>
          <p>{content.exit_button}</p>
          <Slider
            onKeyDown={handleOnKeyDown3}
            onChange={handleExitButton}
            checked={isExitButton}
            blackBorder={false}
            ariaLabel={content.exit_button}
          />
        </div>
      </section>
      <section id="cookies" className={styles.white_page}>
        <h1>{content.section3_title}</h1>
        <h2>{content.section3_subtitle1}</h2>
        <Text blok={content} attribute={"section3_p1"} />
        <div
          style={{ marginBottom: "96px", marginTop: "50px" }}
          className={styles.settings_wrapper}
        >
          <p>{content.section3_subtitle1}</p>
          <Slider
            onKeyDown={handleOnKeyDown4}
            onChange={handleCookies}
            checked={isEssentialCookies}
            blackBorder={true}
            ariaLabel={"cookies"}
          />
        </div>
        <h2>{content.section3_subtitle2}</h2>
        <Text blok={content} attribute={"section3_p2"} />
        <div style={{ marginTop: "35px" }} className={styles.settings_wrapper}>
          <p>{content.data}</p>
          <Slider
            blackBorder={true}
            ariaLabel={"analytics"}
            checked={isAnalytics}
            onChange={handleAnalytics}
          />
        </div>
      </section>
    </>
  );
};

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "settings",
  });
}

export default Settings;
