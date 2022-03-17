import React, { useContext, useEffect, useState } from "react";
import { Checkbox, Slider } from "../src/components/static";
import { useStoryblok } from "../src/lib/storyblok";
import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";
import { Text } from "../src/components/dynamic";
import Cookies from "js-cookie";
import { setBigFont, setSmallFont } from "../src/utils/cookies";

import styles from "./settings.module.scss";
import { useRouter } from "next/dist/client/router";
import { ExitButtonContext } from "../src/components/static/ExitButton/ExitButtonContext";

const Settings = ({ story, locale, preview, defaultLocale }) => {
  const { content } = useStoryblok(story, preview, locale);
  const router = useRouter();

  const [fontSize, setFontSize] = useState<string>("normal");
  const [isCookies, setIsCookies] = useState<boolean>(true);
  const [contrast, setContrast] = useState<string>("no contrast");

  const { toggleIsVisible } = useContext(ExitButtonContext);

  useEffect(() => {
    Cookies.get("FONT_BIG") ? setFontSize("big") : null;
    Cookies.get("DISABLE_COOKIES") ? setIsCookies(false) : null;
    Cookies.get("CONTRAST") ? setContrast("contrast") : null;
  }, []);

  const handleLocale = (e: React.ChangeEvent<HTMLInputElement>) => {
    isCookies && Cookies.set("NEXT_LOCALE", e.target.value);
    e.target.value === defaultLocale
      ? router.push("/settings", "/settings", { locale: "de" })
      : router.push("/en/settings");
  };

  const handleContrast = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "no contrast") {
      setContrast(e.target.value);
      Cookies.remove("CONTRAST");
      document.documentElement.style.setProperty("--color-font", "white");
      document.documentElement.style.setProperty("--color-invert", "1");
    } else {
      document.documentElement.style.setProperty("--color-font", "#101223");
      document.documentElement.style.setProperty("--color-invert", "0");
      Cookies.set("CONTRAST", true);
      setContrast(e.target.value);
    }
  };

  const handleFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "normal") {
      setSmallFont();
      setFontSize(e.target.value);
      Cookies.remove("FONT_BIG");
    } else {
      setBigFont();
      setFontSize(e.target.value);
      isCookies && Cookies.set("FONT_BIG", true);
    }
  };

  const handleExitButton = () => {
    toggleIsVisible!();
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
        <p className="mb-5">{content.language}</p>
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
        <p className="mb-5">{content.contrast}</p>
        <div className={styles.checkbox_wraper}>
          <Checkbox
            type="radio"
            value="no contrast"
            checked={contrast === "no contrast"}
            label={content.no_contrast}
            onChange={handleContrast}
          />
          <Checkbox
            type="radio"
            value="contrast"
            checked={contrast === "contrast"}
            label={content.contrast}
            onChange={handleContrast}
          />
        </div>
        <p className="mb-5">{content.font_size}</p>
        <div className={styles.checkbox_wraper}>
          <Checkbox
            type="radio"
            checked={fontSize === "normal"}
            label="normal"
            value="normal"
            onChange={handleFontSize}
          />
          <Checkbox
            type="radio"
            checked={fontSize === "big"}
            label="big"
            value={content.big}
            onChange={handleFontSize}
          />
        </div>
      </section>

      <section className={styles.color_page}>
        <h1>{content.section2_title}</h1>

        <Text blok={content} attribute={"section2_p"} />

        <div className={styles.switch_wraper1}>
          <p style={{ fontFamily: "Lato" }}>exit button</p>
          <Slider onChange={handleExitButton} blackBorder={false} />
        </div>
      </section>
      <section className={styles.white_page}>
        <h1>{content.section3_title}</h1>
        <p className="pb-4">
          <b>{content.section3_subtitle1}</b>
        </p>
        <div>
          <Text blok={content} attribute={"section3_p1"} />
        </div>
        <div className={styles.switch_wraper2}>
          <Slider
            onChange={handleCookies}
            checked={isCookies}
            blackBorder={true}
          />
        </div>
        <p className="pb-4">
          <b>{content.section3_subtitle2}</b>
        </p>
        <p>{content.section3_p2}</p>
        <div className={styles.switch_wraper2}>
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
