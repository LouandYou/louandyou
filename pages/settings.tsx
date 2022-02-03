import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Checkbox, Layout, Slider } from "../src/components/static";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

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

  // const setLanguage = () => {
  //   const locale = checkbox1.current!.value ? "de" : "en";
  //   router.push(router.pathname, router.asPath, { locale });
  // };
  useEffect(() => {
    if (Cookies.get("size")) {
      checkbox6.current!.checked = true;
      checkbox5.current!.checked = false;
    }
  }, []);

  const handleChange1 = () => {
    if (checkbox1.current!.checked) {
      checkbox2.current!.checked = false;
    } else {
      checkbox2.current!.checked = true;
    }
    setLocal("de");
  };

  const handleChange2 = () => {
    if (checkbox2.current!.checked) {
      checkbox1.current!.checked = false;
    } else {
      checkbox1.current!.checked = true;
    }

    setLocal("en");
  };
  const handleChange5 = () => {
    if (checkbox5.current!.checked) {
      checkbox6.current!.checked = false;
      document.documentElement.style.setProperty("--size-font", "1em");
      document.documentElement.style.setProperty(
        "--size-font-checkbox",
        "12px"
      );
      Cookies.remove("size");
    }
  };
  const handleChange6 = () => {
    if (checkbox6.current!.checked) {
      checkbox5.current!.checked = false;
      document.documentElement.style.setProperty("--size-font", "1.25em");
      document.documentElement.style.setProperty(
        "--size-font-checkbox",
        "18px"
      );
      Cookies.set("size", "big");
    }
  };

  const handleExitButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      Cookies.set("disableExitButton", true);
    } else {
      Cookies.remove("disableExitButton");
    }
  };

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
                type="radio"
                ref={checkbox1}
                label="deutsch"
                onChange={handleChange1}
              />
            </div>
            <div>
              <Checkbox
                type="radio"
                defaultChecked={true}
                ref={checkbox2}
                label="english"
                onChange={handleChange2}
              />
            </div>
          </div>

          <div className={styles.checkbox_wraper}>
            <p>font size</p>
            <div>
              <Checkbox
                type="radio"
                defaultChecked={true}
                ref={checkbox5}
                label="normal"
                value="normal"
                onChange={handleChange5}
              />
            </div>
            <div>
              <Checkbox
                type="radio"
                ref={checkbox6}
                label="big"
                value="big"
                onChange={handleChange6}
              />
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
