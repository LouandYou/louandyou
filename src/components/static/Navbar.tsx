import Link from "next/link";
import React, { ReactElement } from "react";
import Image from "next/image";

import useScrollingBackgroundColor from "../../utils/useScrollingBackgroundColor";
import styles from "./Navbar.module.scss";

export function Navbar(): ReactElement {
  const isLandingPage = useScrollingBackgroundColor({
    elements: () =>
      Array.from(document.querySelectorAll("#section_1, #section_2")),
    offset: 60,
  });

  return (
    <nav className={styles.navbar}>
      <div
        className={`${styles.nav_container} ${
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
        <input className={styles.checkbox} type="checkbox" />
        <div className={styles.hamburger_lines}>
          <span className={`${styles.line} ${styles.line1}`} />
          <span className={`${styles.line} ${styles.line2}`} />
          <span className={`${styles.line} ${styles.line3}`} />
        </div>
        <div className={styles.menu_items}>
          <li>
            <Link href="#">about</Link>
          </li>
          <li>
            <Link href="#">blogs</Link>
          </li>
          <li>
            <Link href="#">portfolio</Link>
          </li>
          <li>
            <Link href="#">contact</Link>
          </li>
        </div>
      </div>
    </nav>
  );
}
