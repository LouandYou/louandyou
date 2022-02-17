import React, { ReactElement, useState } from "react";
import Image from "next/image";

import styles from "./Footer.module.scss";
import Link from "next/link";
import { Feedback } from "./Feedback";

export function Footer(): ReactElement {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);

  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Image
          src={"/logo_full_white.svg"}
          width="210"
          height="60"
          alt="logo"
          quality={100}
        />
      </div>
      <div className={styles.links_container1}>
        <div className={styles.column_container}>
          <Link href="/">about us</Link>
          <Link href="/">about Lou</Link>
          <a onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>feedback</a>
          <Link href="/">impact</Link>
        </div>
        <div className={styles.column_container}>
          <Link href="/">what we do</Link>
          <Link href="/">our partners</Link>
          <Link href="/">support us</Link>
          <Link href="/">newsletter</Link>
        </div>
      </div>
      <div className={styles.icons_container}>
        <div className={styles.invert_color}>
          <Image
            src={"/social/instagram.png"}
            width="34"
            height="34"
            alt="instagram logo"
          />
        </div>
        <div>
          <Image
            src={"/social/facebook.png"}
            width="34"
            height="34"
            alt="facebook logo"
          />
        </div>
        <div className={styles.invert_color}>
          <Image
            src={"/social/linkedin.png"}
            width="40"
            height="34"
            alt="linkedin logo"
          />
        </div>
      </div>
      <div className={styles.links_container2}>
        <div className={styles.row_container}>
          <b>for donors</b>
          <b>for partners</b>
          <b>for the press</b>
        </div>
        <div className={styles.row_container}>
          <Link href="/">one pager</Link>
          <Link href="/">one pager</Link>
          <Link href="/">press kit</Link>
        </div>
        <div className={styles.row_container}>
          <Link href="/">pitch deck</Link>
        </div>
      </div>
      <div className={styles.links_container2}>
        <div className={styles.row_container}>
          <Link href="/">data protection</Link>
          <Link href="/">disclaimer of liability</Link>
        </div>
        <div className={styles.row_container}>
          <Link href="/">imprint</Link>
          <Link href="/">bylaws</Link>
        </div>
      </div>
      {isFeedbackOpen && (
        <Feedback
          isOpen={isFeedbackOpen}
          onClose={() => setIsFeedbackOpen(!isFeedbackOpen)}
        />
      )}
    </section>
  );
}
