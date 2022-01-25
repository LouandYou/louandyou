import Link from "next/link";
import React, { ReactElement, useRef, useState } from "react";
import Image from "next/image";

import useScrollingBackgroundColor from "../../utils/useScrollingBackgroundColor";
import styles from "./Navbar.module.scss";

interface IProps {
  isColorWhite?: boolean;
}

export function Navbar(props: IProps): ReactElement {
  const checkbox = useRef<any>();
  const [invertColor, setInvertColor] = useState<string>("");

  const isDarkBgColor = useScrollingBackgroundColor({
    elements: () => Array.from(document.querySelectorAll("main section")),
    // root: document && document.querySelector(".App"),
    offset: 23,
  });

  const handleCheckbox = () => {
    checkbox.current!.checked && isDarkBgColor
      ? setInvertColor(`${styles.invert_color}`)
      : setInvertColor("");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_container}>
        <div
          className={
            isDarkBgColor
              ? `${styles.logo} ${invertColor}`
              : `${styles.logo} ${styles.invert_color}`
          }
        >
          <Image
            src={"/../public/&_logo_white.png"}
            layout="fixed"
            width="80"
            height="80"
            alt="logo"
            priority
          />
        </div>
        <input
          onChange={handleCheckbox}
          className={styles.checkbox}
          ref={checkbox}
          type="checkbox"
          name=""
          id=""
        />
        <div
          className={
            isDarkBgColor
              ? `${styles.hamburger_lines} ${invertColor}`
              : `${styles.hamburger_lines} ${styles.invert_color}`
          }
        >
          <span className={`${styles.line} ${styles.line1}`}></span>
          <span className={`${styles.line} ${styles.line2}`}></span>
          <span className={`${styles.line} ${styles.line3}`}></span>
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
