import Link from "next/link";
import React, { ReactElement, useState } from "react";
import Image from "next/image";

import useScrollingBackgroundColor from "../../utils/useScrollingBackgroundColor";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "./Dropdown";
import { Text } from "../dynamic/Text";
import { useRouter } from "next/dist/client/router";
import { pageGetStaticProps } from "../../lib/pageGetStaticProps";
import { Feedback } from "./Popups/Feedback";

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
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);

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
        aria-label="Navbar Header"
        className={`${styles.header} ${
          isLandingPage && !isOpen ? "" : styles.nav_background
        }`}
      >
        <div aria-label="logo-home" className={styles.logo}>
          <Link passHref href="/">
            <a>
              <Image
                src={"/ampersand.svg"}
                layout="fixed"
                width="50"
                height="50"
                alt="logo-home"
                priority
                onClick={() => setIsOpen(false)}
              />
            </a>
          </Link>
        </div>
        <input
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
          className={styles.checkbox}
          type="checkbox"
          tabIndex={-1}
          aria-label={!isOpen ? "Open Navbar" : "Close Navbar"}
        />
        <div
          onKeyDown={({ code }) => (code === "Enter" ? setIsOpen(!isOpen) : "")}
          tabIndex={0}
          className={styles.hamburger_lines}
          aria-label={!isOpen ? "Open Navbar" : "Close Navbar"}
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
                  <a>
                    <div
                      style={{ margin: "0 5px" }}
                      aria-label={loc === "de" ? "Deutsch" : "English"}
                      className={loc === locale ? styles.selected : ""}
                    >
                      {loc}
                    </div>
                  </a>
                </Link>
              ))
              .reverse()
              .reduce((prev, curr) => [prev, "/", curr])}
          </div>
        </div>
        <div className={styles.menu_items}>
          <div id="search" className="control has-icons-right">
            <input
              className="input is-rounded"
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
              onClick={() => {
                search();
                setIsOpen(false);
              }}
              className="icon is-right"
            >
              <i className="fas fa-envelope">
                <FontAwesomeIcon icon={faSearch} />
              </i>
            </span>
          </div>
          <h3
            className="is-hidden-tablet"
            onClick={() => handleOnClick("/")}
            style={{ marginTop: "85px" }}
          >
            Home
          </h3>
          <div className="is-hidden-tablet">
            <h2>{content.find_support}</h2>
            <h3 onClick={() => handleOnClick("/result_2")}>
              {content.for_domestic}
            </h3>
            <h3
              onClick={() => handleOnClick("/result_1")}
              style={{ marginBottom: "30px" }}
            >
              {content.for_sexual}
            </h3>

            <h2>{content.good_to_know}</h2>
            <h3 onClick={() => handleOnClick("/domestic_general")}>
              {content.about_domestic}
            </h3>
            <h3
              onClick={() => handleOnClick("/sexual_general")}
              style={{ marginBottom: "30px" }}
            >
              {" "}
              {content.about_sexual}
            </h3>
            <h3 onClick={() => handleOnClick("/safety_tips")}>
              {content.safety_tips}
            </h3>
            <h3
              style={{ marginBottom: "50px" }}
              onClick={() => handleOnClick("/settings")}
            >
              {content.settings}
            </h3>
            <div className={styles.wrapper}>
              <h2>{content.about_louandyou}</h2>
              <Dropdown
                content={<Text blok={content} attribute={"navbar_dropdown1"} />}
              />
            </div>
            <div style={{ marginTop: "20px" }} className={styles.wrapper}>
              <h2>{content.contact}</h2>
              <Dropdown
                content={
                  <>
                    <Text blok={content} attribute={"navbar_dropdown2"} />
                    <h3 onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>
                      Feedback
                    </h3>
                  </>
                }
              />
            </div>
          </div>

          <div
            style={{ marginTop: "90px" }}
            className="is-hidden-mobile columns"
          >
            <div className="column">
              <h2>{content.find_support}</h2>
              <h3 onClick={() => handleOnClick("/result_2")}>
                {content.for_domestic}
              </h3>
              <h3 onClick={() => handleOnClick("/result_1")}>
                {content.for_sexual}
              </h3>

              <h2 style={{ marginTop: "90px" }}>{content.about_louandyou}</h2>
              <Text blok={content} attribute={"navbar_dropdown1"} />
            </div>

            <div className="column">
              <h2>{content.good_to_know}</h2>
              <h3 onClick={() => handleOnClick("/domestic_general")}>
                {content.about_domestic}
              </h3>
              <h3 onClick={() => handleOnClick("/sexual_general")}>
                {" "}
                {content.about_sexual}
              </h3>

              <h2 style={{ marginTop: "90px" }}>{content.contact}</h2>
              <Text blok={content} attribute={"navbar_dropdown2"} />
              <h3 onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>
                Feedback
              </h3>
            </div>
            <div style={{ marginTop: "33px" }} className="column">
              <h3 onClick={() => handleOnClick("/safety_tips")}>
                {content.safety_tips}
              </h3>
              <h3 onClick={() => handleOnClick("/settings")}>
                {content.settings}
              </h3>
            </div>
          </div>
        </div>
      </div>
      {isFeedbackOpen && (
        <Feedback
          darkBackground={true}
          content={content}
          onClose={() => setIsFeedbackOpen(!isFeedbackOpen)}
        />
      )}
    </nav>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "home",
  });
}
