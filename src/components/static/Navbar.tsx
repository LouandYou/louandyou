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
import { pageGetStaticProps } from "../../lib/pageGetStaticProps";

const prependSlash = (path: string) =>
  path.charAt(0) === "/" ? path : `/${path}`;

export function Navbar({
  content,
  locale,
  locales,
  defaultLocale,
}): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const router = useRouter();

  const isLandingPage = useScrollingBackgroundColor({
    elements: () =>
      Array.from(document.querySelectorAll("#section_1, #section_2")),
    offset: 60,
  });

  const handleOnClick = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  const search = () => {
    if (searchInput.length > 0) {
      router.push(`/search?q=${searchInput}`);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div
        className={`${styles.header} ${
          isLandingPage ? "" : styles.nav_background
        }`}
      >
        <div tabIndex={0} className={styles.logo}>
          <Image
            className={styles.color}
            src={"/ampersand_white.svg"}
            layout="fixed"
            width="23"
            height="23"
            alt="logo"
            priority
            onClick={() => handleOnClick("/")}
          />
        </div>
        <input
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
          className={styles.checkbox}
          type="checkbox"
        />
        <div
          tabIndex={0}
          className={`${styles.hamburger_lines} ${styles.color}`}
        >
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
                  href={prependSlash(
                    `${loc === defaultLocale ? "" : loc}${router.pathname}`
                  )}
                  locale={false}
                  passHref
                >
                  <div
                    tabIndex={0}
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
            <input
              style={{ height: "50px", borderWidth: "2px" }}
              className="input is-rounded is-dark"
              placeholder="search"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  search();
                  setIsOpen(false);
                }
              }}
            />
            <span
              className="icon is-right is-clickable"
              onClick={() => {
                search();
                setIsOpen(false);
              }}
            >
              <FontAwesomeIcon color="#363636" icon={faSearch} />
            </span>
          </p>
          <h3
            onClick={() => handleOnClick("/")}
            style={{ marginTop: "40px", marginBottom: "40px" }}
          >
            Home
          </h3>
          <h2>{content.find_support}</h2>
          <p>about domestic violence</p>
          <p style={{ marginBottom: "40px" }}>about sexual violence</p>
          <h2>what’s good to know</h2>
          <p> about domestic violence</p>
          <p style={{ marginBottom: "40px" }}> about sexual violence</p>
          <h3 onClick={() => handleOnClick("/safety_tips")}>safety tips</h3>
          <h3
            style={{ marginBottom: "50px" }}
            onClick={() => handleOnClick("/settings")}
          >
            settings
          </h3>
          <div className={styles.wrapper}>
            <h3>Über Lou&You</h3>
            <Dropdown
              content={<Text blok={content} attribute={"dropdown_sexual_2"} />}
            />
          </div>
          <div className={styles.wrapper}>
            <h3>Contact</h3>
            <Dropdown
              content={<Text blok={content} attribute={"dropdown_sexual_2"} />}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "home",
  });
}
