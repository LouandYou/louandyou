import React, { ReactElement, useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import useScrollingBackgroundColor from "../../utils/useScrollingBackgroundColor";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "./Dropdown";
import { Text } from "../dynamic/Text";
import { useRouter } from "next/dist/client/router";
import { pageGetStaticProps } from "../../lib/pageGetStaticProps";
import { Feedback } from "./Popups/Feedback";
import LanguageSwitch from "./LanguageSwitch";

export function Navbar({
  content,
  locales,
  locale,
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
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleOnClick("/");
          }
        }}
        aria-label="Navbar Header"
        className={`${styles.header} ${
          isLandingPage && !isOpen ? "" : styles.nav_background
        }`}
      >
        <div
          aria-label="home button"
          tabIndex={0}
          onClick={() => handleOnClick("/")}
          className={styles.logo_container}
        >
          <img src="/ampersand.png" alt="logo-home" />
        </div>
        <LanguageSwitch
          locales={locales}
          locale={locale}
          defaultLocale={defaultLocale}
        />
        <Hamburger
          rounded
          size={20}
          toggled={isOpen}
          toggle={setIsOpen}
          duration={0.6}
          label="Show menu"
        />
      </div>
      <div className={`${styles.menu_items} ${isOpen && styles.active}`}>
        <div id="search" className="control has-icons-right is-flex">
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
            <i className="fas fa-envelope is-clickable">
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </span>
        </div>
        <h3
          className="is-hidden-tablet"
          onClick={() => handleOnClick("/")}
          style={{ marginTop: "40px" }}
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
          <div className={styles.wrapper}>
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

        <div className="is-hidden-mobile columns">
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
            <div>
              <h2 style={{ marginTop: "90px" }}>{content.contact}</h2>
              <Text blok={content} attribute={"navbar_dropdown2"} />
              <h3 onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>
                Feedback
              </h3>
            </div>
          </div>
          <div style={{ marginTop: "38px" }} className="column">
            <h3 onClick={() => handleOnClick("/safety_tips")}>
              {content.safety_tips}
            </h3>
            <h3 onClick={() => handleOnClick("/settings")}>
              {content.settings}
            </h3>
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
