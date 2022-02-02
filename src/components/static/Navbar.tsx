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
    offset: 70,
  });

  const handleCheckbox = () => {
    checkbox.current!.checked && isDarkBgColor
      ? setInvertColor(`${styles.invert_color}`)
      : setInvertColor("");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_container}>
        <div className={styles.header_bg} />
        <div
          className={
            isDarkBgColor
              ? `${styles.logo} ${invertColor}`
              : `${styles.logo} ${styles.invert_color}`
          }
        >
          <Image
            src={"/ampersand_white.svg"}
            layout="fixed"
            width="32"
            height="32"
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
          <span className={`${styles.line} ${styles.line1}`}/>
          <span className={`${styles.line} ${styles.line2}`}/>
          <span className={`${styles.line} ${styles.line3}`}/>
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
