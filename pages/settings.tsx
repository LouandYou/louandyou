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

const Settings = ({ story, locale, preview, defaultLocale }) => {
  const { content } = useStoryblok(story, preview, locale);
  const router = useRouter();

  const [isBigFont, setIsBigFont] = useState<boolean>(false);
  const [isCookies, setIsCookies] = useState<boolean>(true);
  const [isContrast, setIsContrastState] = useState<boolean>(false);
  const [isExitButton, setIsExitButton] = useState<boolean>(true);

  const { toggleIsVisible } = useContext(ExitButtonContext);

  useEffect(() => {
    Cookies.get("FONT_BIG") ? setIsBigFont(true) : setIsBigFont(false);
    Cookies.get("DISABLE_COOKIES") ? setIsCookies(false) : setIsCookies(true);
    Cookies.get("CONTRAST")
      ? setIsContrastState(true)
      : setIsContrastState(false);
    Cookies.get("EXIT_BUTTON") ? setIsExitButton(false) : setIsExitButton(true);
  }, []);

  const handleLocale = (e: React.ChangeEvent<HTMLInputElement>) => {
    isCookies && Cookies.set("NEXT_LOCALE", e.target.value);
    e.target.value === defaultLocale
      ? router.push("/settings", "/settings", { locale: "de" })
      : router.push("/en/settings");
  };

  const handleContrast = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setIsContrastState(true);
      setContrast();
      Cookies.set("CONTRAST", true);
    } else {
      setIsContrastState(false);
      removeContrast();
      Cookies.remove("CONTRAST");
    }
  };

  const handleFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setBigFont();
      setIsBigFont(true);
      isCookies && Cookies.set("FONT_BIG", true);
    } else {
      setSmallFont();
      setIsBigFont(false);
      Cookies.remove("FONT_BIG");
    }
  };

  const handleExitButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setIsExitButton(true);
      isCookies && Cookies.set("EXIT_BUTTON", true);
      toggleIsVisible!();
    } else {
      setIsExitButton(false);
      Cookies.remove("EXIT_BUTTON");
      toggleIsVisible!();
    }
  };

  const handleCookies = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      Cookies.remove("DISABLE_COOKIES");
      setIsCookies(true);
    } else {
      Cookies.set("DISABLE_COOKIES", true);
      Cookies.remove("FONT_BIG");
      Cookies.remove("NEXT_LOCALE");
      setIsCookies(false);
    }
  };

  return (
    <>
      <section className={styles.landing_page}>
        <h1>{content.section1_title}</h1>
        <h2 className="mb-4">{content.contrast}</h2>
        <div className="is-flex is-justify-content-space-between">
          <p>{content.higher_contrast}</p>
          <Slider
            onChange={handleContrast}
            checked={isContrast}
            blackBorder={true}
          />
        </div>
        <h2 className="mb-4"> {content.font_size}</h2>
        <div className="is-flex is-justify-content-space-between">
          <p>{content.big}</p>
          <Slider
            onChange={handleFontSize}
            checked={isBigFont}
            blackBorder={true}
          />
        </div>
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
      </section>

      <section className={styles.color_page}>
        <h1>{content.section2_title}</h1>
        <Text blok={content} attribute={"section2_p"} />
        <div className={styles.switch_wraper}>
          <p style={{ fontFamily: "Lato" }}>{content.exit_button}</p>
          <Slider
            onChange={handleExitButton}
            checked={isExitButton}
            blackBorder={false}
          />
        </div>
      </section>
      <section className={styles.white_page}>
        <h1>{content.section3_title}</h1>
        <h2>{content.section3_subtitle1}</h2>
        <Text blok={content} attribute={"section3_p1"} />
        <div
          style={{ marginBottom: "110px", marginTop: "48px" }}
          className="is-flex is-justify-content-flex-end"
        >
          <Slider
            onChange={handleCookies}
            checked={isCookies}
            blackBorder={true}
          />
        </div>
        <h2>{content.section3_subtitle2}</h2>
        <Text blok={content} attribute={"section3_p2"} />
        <div
          style={{ marginTop: "35px" }}
          className="is-flex is-justify-content-flex-end"
        >
          <Slider blackBorder={true} />
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
