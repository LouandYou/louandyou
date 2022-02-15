import Link from "next/link";
import React, { ReactElement, useRef, useState } from "react";
import Image from "next/image";

// import useScrollingBackgroundColor from "../../utils/useScrollingBackgroundColor";
import styles from "./Navbar.module.scss";

interface IProps {
  isColorWhite?: boolean;
}

export function Navbar(props: IProps): ReactElement {
  // const isDarkBgColor = useScrollingBackgroundColor({
  //   elements: () => Array.from(document.querySelectorAll("main section")),
  //   offset: 70,
  // });

  // const handleCheckbox = () => {
  //   checkbox.current!.checked && isDarkBgColor
  //     ? setInvertColor(`${styles.invert_color}`)
  //     : setInvertColor("");
  // };

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_container}>
        <div className={styles.logo}>
          <Link passHref href="/">
            <Image
              src={"/ampersand_white.svg"}
              layout="fixed"
              width="23"
              height="23"
              alt="logo"
              priority
            />
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
