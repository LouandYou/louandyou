import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Checkbox, Layout, Slider } from "../src/components/static";
import { useStoryblok } from "../src/lib/storyblok";
import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";
import Cookies from "js-cookie";

import styles from "./settings.module.scss";
import { Footer } from "../src/components/static/Footer";
import { useRouter } from "next/dist/client/router";
import { ExitButtonContext } from "../src/components/static/ExitButton/ExitButtonContext";

const Settings = ({ story, locale, preview, defaultLocale }) => {
  story = useStoryblok(story, preview, locale);
  const router = useRouter();

  const [fontSize, setFontSize] = useState<string>("normal");
  const [isCookies, setIsCookies] = useState<boolean>(true);

  const { toggleIsVisible } = useContext(ExitButtonContext);

  useEffect(() => {
    Cookies.get("FONT_BIG") ? setFontSize("big") : null;
    Cookies.get("DISABLE_COOKIES") ? setIsCookies(false) : null;
  }, []);

  const handleLocale = (e: React.ChangeEvent<HTMLInputElement>) => {
    isCookies && Cookies.set("NEXT_LOCALE", e.target.value);
    e.target.value === defaultLocale
      ? router.push("/settings", "/settings", { locale: "de" })
      : router.push("/en/settings");
  };

  const handleFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "normal") {
      document.documentElement.style.setProperty("--size-font", "1em");
      document.documentElement.style.setProperty(
        "--size-font-checkbox",
        "12px"
      );
      setFontSize(e.target.value);
      Cookies.remove("FONT_BIG");
    } else {
      document.documentElement.style.setProperty("--size-font", "1.25em");
      document.documentElement.style.setProperty(
        "--size-font-checkbox",
        "18px"
      );
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
    <Layout>
      <section
        data-dark-bg="false"
        id="section_1"
        className={styles.landing_page}
      >
        <h1 className={styles.title}>settings</h1>
        <div className={styles.checkbox_wraper}>
          <p>language</p>
          <div>
            <Checkbox
              type="radio"
              value="de"
              checked={locale === "de"}
              label="deutsch"
              onChange={handleLocale}
            />
          </div>
          <div>
            <Checkbox
              type="radio"
              value="en"
              checked={locale === "en"}
              label="english"
              onChange={handleLocale}
            />
          </div>
        </div>

        <div className={styles.checkbox_wraper}>
          <p>font size</p>
          <div>
            <Checkbox
              type="radio"
              checked={fontSize === "normal"}
              label="normal"
              value="normal"
              onChange={handleFontSize}
            />
          </div>
          <div>
            <Checkbox
              type="radio"
              checked={fontSize === "big"}
              label="big"
              value="big"
              onChange={handleFontSize}
            />
          </div>
        </div>
      </section>

      <section data-dark-bg="true" id="section_2" className={styles.color_page}>
        <h2 className={styles.title_white}>
          i have created an optional exit button for you
        </h2>
        <p>
          The exit button down below is super helpful in all kinds of
          situations. Wether it’s your partner who mustn’t know you’re here to
          your coworker coming in the room or a parent who’d worry too much if
          they saw Lou&You. <br />
          <br /> If you know you’re only here when you’re on your own and you’re
          safe, here you can permanently remove the exit button. This only works
          with cookies enabled, so make sure to check them first down below.
        </p>
        <button className={styles.exit_btn}>✕</button>
        <div className={styles.switch_wraper1}>
          <p className={styles.white_lable}>disable exit button permanently</p>
          <Slider onChange={handleExitButton} blackBorder={false} />
        </div>
      </section>
      <section
        data-dark-bg="false"
        id="section_3"
        className={styles.landing_page}
      >
        <h2 className={styles.title_black}>cookies & privacy</h2>
        <p>
          <b>Warning:</b> If this device is not safe you should not allow any
          cookies.
        </p>
        <p>
          <b>essential cookies</b>
          <br />
          These cookies save your preferences regarding language, contrast, font
          size and the exit button
        </p>
        <div className={styles.switch_wraper2}>
          <Slider
            onChange={handleCookies}
            checked={isCookies}
            blackBorder={true}
          />
        </div>
        <p>
          <b>share usage data</b>
          <br />I want my data to be shared anonymously with LouAndYou and
          researchers, so that the site can be improved and we can learn about
          helping victims of domestic violence
        </p>
        <div className={styles.switch_wraper2}>
          <Slider blackBorder={true} />
        </div>
        <div className={styles.button_wraper}>
          <button className={styles.button}>
            <Link href={"/"}>back to previous page</Link>
          </button>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "home",
  });
}

export default Settings;
