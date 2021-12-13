import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "../components/Slider";
import and_logo from "../public/and_logo.png";
import { useRouter } from "next/router";

import en from "../locales/en";
import de from "../locales/de";

const settings: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : de;

  const changeLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const locale = e.target.checked ? "de" : "en";
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <>
      <Link href={"/"} passHref>
        <Image src={and_logo} width="110" height="110" alt="logo" />
      </Link>

      <div className="block py-1">
        <Slider
          onChange={changeLanguage}
          cont={"Deutsch"}
          label={"English"}
        ></Slider>
      </div>
      <div className="block py-1">
        <Slider cont={"Contrast"} label={"No Contrast"}></Slider>
      </div>
      <div className="block py-1">
        <Slider cont={"Big Font"} label={"Small Font"}></Slider>
      </div>

      <section className="py-3">
        <p>{t.test}</p>
        <p className="subtitle">Hide Exit Button Permanently</p>
        <p className="block">
          The exit button down below is super helpful in all kinds of
          situations. Wether it’s your partner who mustn’t know you’re here to
          your coworker coming in the room or a parent who’d worry too much if
          they saw Lou&You. If you know you’re only here when you’re on your own
          and you’re safe, here you can permanently remove the exit button. This
          only works with cookies enabled, so make sure to check them first down
          below.
        </p>
        <div className="block">
          <Slider cont={""} label={""}></Slider>
        </div>
      </section>
    </>
  );
};

export default settings;
