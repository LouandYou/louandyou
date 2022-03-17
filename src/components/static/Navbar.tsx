import Link from "next/link";
import React, { ReactElement, useState } from "react";
import Image from "next/image";

import useScrollingBackgroundColor from "../../utils/useScrollingBackgroundColor";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "./Dropdown";
import { Text } from "../dynamic/Text";

export function Navbar({ content }): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isLandingPage = useScrollingBackgroundColor({
    elements: () =>
      Array.from(document.querySelectorAll("#section_1, #section_2")),
    offset: 60,
  });
  console.log(content);

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
        <div className={styles.menu_items}>
          <p className="control has-icons-right">
            <input className="input is-rounded" placeholder="search" />
            <span className="icon is-small is-right">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </p>
          <li style={{ marginTop: "55px" }}>
            <Link href="/">home</Link>
          </li>
          <li>{content.find_support}</li>
          <div className="mb-3">
            <Dropdown
              content={<Text blok={content} attribute={"subline"} />}
              label={"about domestic violence"}
            />
          </div>
          <div style={{ marginBottom: "25px" }}>
            <Dropdown
              content={<Text blok={content} attribute={"dropdown_sexual_2"} />}
              label={"about sexual violence"}
            />
          </div>
          <li>
            <Link href="#">what’s good to know</Link>
          </li>
          <div className="mb-3">
            <Dropdown
              content={<Text blok={content} attribute={"subline"} />}
              label={"about domestic violence"}
            />
          </div>
          <div style={{ marginBottom: "25px" }}>
            <Dropdown content={""} label={"about sexual violence"} />
          </div>
          <li>
            <Link href="#">safety tips</Link>
          </li>
          <li>
            <Link href="#">settings</Link>
          </li>
          <li>
            <Link href="#">Lou’s impact</Link>
          </li>
          <li>
            <Link href="#">about</Link>
          </li>
          <li>
            <Link href="#">support Lou</Link>
          </li>
          <li>
            <Link href="#">get in touch</Link>
          </li>
        </div>
      </div>
    </nav>
  );
}
