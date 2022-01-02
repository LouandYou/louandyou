import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Slider} from "../src/components/static";
import and_logo from "../public/and_logo.png";
import { useRouter } from "next/router";

import en from "../locales/en";
import de from "../locales/de";

import { Button } from "../src/components/static";

const settings: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : de;

  const setLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const locale = e.target.checked ? "de" : "en";
    router.push(router.pathname, router.asPath, { locale });
  };

  const setFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fontSize = e.target.checked ? "1.25em" : "1em";
    document.documentElement.style.setProperty("--size-font", fontSize);
  };

  const contrastMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const backgroundColor = e.target.checked ? "white" : "";
    const borderStyle = e.target.checked ? "black 1px solid" : "";
    const louColorText = e.target.checked ? "black" : "";
    document.documentElement.style.setProperty(
      "--color-background",
      backgroundColor
    );
    document.documentElement.style.setProperty("--style-border", borderStyle);
    document.documentElement.style.setProperty(
      "--lou-color-text",
      louColorText
    );
  };
  return (
    <>
      <Link href={"/"} passHref>
        <Image src={and_logo} width="110" height="110" alt="logo" />
      </Link>
      <Slider
        onChange={setLanguage}
        cont={"Deutsch"}
        label={"English"}
      />
      <Slider
        onChange={contrastMode}
        cont={"Contrast"}
        label={"No Contrast"}
      />
      <Slider
        onChange={setFontSize}
        cont={"Big Font"}
        label={"Small Font"}
      />
      <div className="block py-1">
        <Button>Read Texts To Me</Button>
      </div>
      <section className="py-3">
        <p>{t.test}</p>
        <p className="block is-bold">Hide Exit Button Permanently</p>
        <p className="block">
          The exit button down below is super helpful in all kinds of
          situations. Wether it’s your partner who mustn’t know you’re here to
          your coworker coming in the room or a parent who’d worry too much if
          they saw Lou&You. If you know you’re only here when you’re on your
          own and you’re safe, here you can permanently remove the exit
          button. This only works with cookies enabled, so make sure to check
          them first down below.
        </p>
        <div className="block">
          <Slider cont={"Off"} label={"On"}/>
        </div>
      </section>
    </>
  );
};

export default settings;
