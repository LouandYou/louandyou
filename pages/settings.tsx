import { NextPage } from "next";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Checkbox, Layout, Slider } from "../src/components/static";
import { useRouter } from "next/router";

import en from "../locales/en";
import de from "../locales/de";

import styles from "./settings.module.scss";
import { Footer } from "../src/components/static/Footer";

const Settings: NextPage = () => {
  const checkbox1 = useRef<HTMLInputElement>();
  const checkbox2 = useRef<HTMLInputElement>();

  const checkbox3 = useRef<HTMLInputElement>();
  const checkbox4 = useRef<HTMLInputElement>();

  const checkbox5 = useRef<HTMLInputElement>();
  const checkbox6 = useRef<HTMLInputElement>();

  const [local, setLocal] = useState<string>("en");

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : de;

  // const setLanguage = () => {
  //   const locale = checkbox1.current!.value ? "de" : "en";
  //   router.push(router.pathname, router.asPath, { locale });
  // };

  const handleChange1 = () => {
    if (checkbox1.current!.checked) {
      checkbox2.current!.checked = false;
    } else {
      checkbox2.current!.checked = true;
    }
    setLocal("de");
    // setLanguage();
  };

  const handleChange2 = () => {
    if (checkbox2.current!.checked) {
      checkbox1.current!.checked = false;
    } else {
      checkbox1.current!.checked = true;
    }

    setLocal("en");
    // setLanguage();
  };
  const handleChange5 = () => {
    if (checkbox5.current!.checked) {
      checkbox6.current!.checked = false;
      document.documentElement.style.setProperty("--size-font", "1em");
    } else {
      checkbox6.current!.checked = true;
      document.documentElement.style.setProperty("--size-font", "1.25em");
    }
  };
  const handleChange6 = () => {
    if (checkbox6.current!.checked) {
      checkbox5.current!.checked = false;
      document.documentElement.style.setProperty("--size-font", "1.25em");
    } else {
      checkbox5.current!.checked = true;
      document.documentElement.style.setProperty("--size-font", "1em");
    }
  };

  // const contrastMode = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const backgroundColor = e.target.checked ? "white" : "";
  //   const borderStyle = e.target.checked ? "black 1px solid" : "";
  //   const louColorText = e.target.checked ? "black" : "";
  //   document.documentElement.style.setProperty(
  //     "--color-background",
  //     backgroundColor
  //   );
  //   document.documentElement.style.setProperty("--style-border", borderStyle);
  //   document.documentElement.style.setProperty(
  //     "--lou-color-text",
  //     louColorText
  //   );
  // };
  return (
    <>
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
                ref={checkbox1}
                label="deutsch"
                onChange={handleChange1}
              />
            </div>
            <div>
              <Checkbox
                defaultChecked={true}
                ref={checkbox2}
                label="english"
                onChange={handleChange2}
              />
            </div>
          </div>
          {/* <div className={styles.checkbox_wraper}>
            <p>mode</p>
            <div>
              <Checkbox ref={checkbox3} label="no contrast" />
            </div>
            <div>
              <Checkbox ref={checkbox4} label="contrast" />
            </div>
          </div> */}
          <div className={styles.checkbox_wraper}>
            <p>font size</p>
            <div>
              <Checkbox
                defaultChecked={true}
                ref={checkbox5}
                label="normal"
                onChange={handleChange5}
              />
            </div>
            <div>
              <Checkbox ref={checkbox6} label="big" onChange={handleChange6} />
            </div>
          </div>
        </section>

        <section
          data-dark-bg="true"
          id="section_2"
          className={styles.color_page}
        >
          <h2 className={styles.title_white}>
            i have created an optional exit button for you
          </h2>
          <p>
            The exit button down below is super helpful in all kinds of
            situations. Wether it’s your partner who mustn’t know you’re here to
            your coworker coming in the room or a parent who’d worry too much if
            they saw Lou&You. <br />
            <br /> If you know you’re only here when you’re on your own and
            you’re safe, here you can permanently remove the exit button. This
            only works with cookies enabled, so make sure to check them first
            down below.
          </p>
          <button className={styles.exit_btn}>✕</button>
          <div className={styles.switch_wraper1}>
            <p className={styles.white_lable}>
              disable exit button permanently
            </p>
            <Slider blackBorder={false} />
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
            These cookies save your preferences regarding language, contrast,
            font size and the exit button
          </p>
          <div className={styles.switch_wraper2}>
            <Slider blackBorder={true} />
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
    </>
  );
};

export default Settings;
