import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/image";

import useScrollingBackgroundColor from "../../utils/useScrollingBackgroundColor";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "./Dropdown";
import { Text } from "../dynamic/Text";
import { useRouter } from "next/dist/client/router";
import { Storyblok } from "../../lib/storyblok";

export function Navbar({
  content,
  locale,
  locales,
  defaultLocale,
}): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const isLandingPage = useScrollingBackgroundColor({
    elements: () =>
      Array.from(document.querySelectorAll("#section_1, #section_2")),
    offset: 60,
  });

  useEffect(() => {
    const params = {
      token: process.env.STORYBLOK_TOKEN_SEARCH,
      search_term: "online",
    };

    Storyblok.get("cdn/stories", params)
      .then(({ data }) => {
        let content = data.stories.map((story) => {
          return story.content;
        });

        console.log(content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleOnClick = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <nav className={styles.navbar}>
      <div
        className={`${styles.header} ${
          isLandingPage ? "" : styles.nav_background
        }`}
      >
        <div className={styles.logo}>
          <Link passHref href="/">
            <a>
              <Image
                src={"/ampersand_white.svg"}
                layout="fixed"
                width="23"
                height="23"
                alt="logo"
                priority
              />
            </a>
          </Link>
        </div>
        <input
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
          className={styles.checkbox}
          type="checkbox"
        />
        <div className={styles.hamburger_lines}>
          <span className={`${styles.line} ${styles.line1}`} />
          <span className={`${styles.line} ${styles.line2}`} />
          <span className={`${styles.line} ${styles.line3}`} />
        </div>
        <div className={`is-hidden-mobile ${styles.language_wrapper}`}>
          <div className={styles.language_switch}>
            {locales
              .map((loc) => (
                <Link
                  key={loc}
                  href={`/${loc === defaultLocale ? "" : loc}`}
                  locale={false}
                  passHref
                >
                  <div
                    className={`mx-1 ${
                      loc === locale ? styles.underlined : ""
                    }`}
                  >
                    {loc.toUpperCase()}
                  </div>
                </Link>
              ))
              .reduce((prev, curr) => [prev, "|", curr])}
          </div>
        </div>
        <div className={styles.menu_items}>
          <p className="control has-icons-right">
            <input className="input is-rounded" placeholder="search" />
            <span className="icon is-small is-right">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </p>
          <h3 onClick={() => handleOnClick("/")} style={{ marginTop: "55px" }}>
            home
          </h3>
          <h2>{content.find_support}</h2>
          <div className={styles.dropdown_wrapper}>
            <Dropdown
              content={<Text blok={content} attribute={"dropdown_sexual_2"} />}
              label={"about domestic violence"}
            />
          </div>
          <div
            className={styles.dropdown_wrapper}
            style={{ marginBottom: "25px" }}
          >
            <Dropdown
              content={<Text blok={content} attribute={"dropdown_sexual_2"} />}
              label={"about sexual violence"}
            />
          </div>
          <h2>what’s good to know</h2>
          <div className={styles.dropdown_wrapper}>
            <Dropdown
              content={<Text blok={content} attribute={"dropdown_sexual_2"} />}
              label={"about domestic violence"}
            />
          </div>
          <div
            className={styles.dropdown_wrapper}
            style={{ marginBottom: "25px" }}
          >
            <Dropdown
              content={<Text blok={content} attribute={"dropdown_sexual_2"} />}
              label={"about sexual violence"}
            />
          </div>
          <h3 onClick={() => handleOnClick("/safety_tips")}>safety tips</h3>
          <h3
            style={{ marginBottom: "75px" }}
            onClick={() => handleOnClick("/settings")}
          >
            settings
          </h3>
          <h3 onClick={() => handleOnClick("/")}>Lou’s impact</h3>
          <h3 onClick={() => handleOnClick("/")}>about</h3>
          <h3 onClick={() => handleOnClick("/")}>support Lou</h3>
          <h3 onClick={() => handleOnClick("/")}>get in touch</h3>
        </div>
      </div>
    </nav>
  );
}
