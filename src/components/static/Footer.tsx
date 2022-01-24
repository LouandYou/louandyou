import React, { ReactElement } from "react";

import Image from "next/image";

import styles from "./Footer.module.scss";
import Link from "next/link";

export function Footer(): ReactElement {
  return (
    <section className={styles.footer}>
      <Image
        src={"/../public/full-logo-white.png"}
        layout="fixed"
        width="320"
        height="170"
        alt="logo"
      />

      <div className={styles.row_container}>
        <div className={styles.links_container}>
          {" "}
          <Link href="/">about us</Link>
          <Link href="/">about Lou</Link>
        </div>
        <div className={styles.links_container}>
          <Link href="/">feedback</Link>
          <Link href="/">impact</Link>
        </div>
        <div className={styles.links_container}>
          <Link href="/">what we do</Link>
          <Link href="/">our partners</Link>
        </div>
      </div>
      <div className={styles.row_container}>
        <div className={styles.links_container}>
          <Link href="/">follow us</Link>
          <Link href="/">newsletter</Link>
        </div>
        <div className={styles.icons_container}>
          <div className={styles.invert_color}>
            <Image
              src={"/../public/glyph-logo_May2016.png"}
              width="36"
              height="36"
              alt="instagram logo"
            />
          </div>
          <Image
            src={"/../public/f_logo_RGB-White_512.png"}
            width="36"
            height="36"
            alt="facebook logo"
          />
          <div className={styles.invert_color}>
            <Image
              src={"/../public/LI-In-Bug.png"}
              width="42"
              height="36"
              alt="linkedin logo"
            />
          </div>
        </div>
      </div>
      <div className={styles.row_container}>
        <div className={styles.links_container}>
          <Link href="/">support us</Link>
          <p>
            become <br /> a supporter
          </p>
        </div>
        <div className={styles.links_container}>
          <p>
            Spendenkonto:
            <br /> SIGE e.V.
            <br /> Berliner Sparkasse
            <br /> IBAN DE30400501500136131356<br></br> Verwendungszweck:
            <br /> Spende SIGE e.V. from [name], [adress]
          </p>
        </div>
      </div>
      <div className={styles.row_container}>
        <Image
          src="/../public/pp-acceptance-small.png"
          width="40"
          height="26"
          layout="fixed"
          alt="Donate now with PayPal"
        />
        <Image
          src="https://x.klarnacdn.net/payment-method/assets/badges/generic/white/klarna.svg"
          width="42"
          height="36"
          alt="Donate now with Klarna"
        />
        <Image
          src="/../public/Apple_Pay_Mark_RGB_041619.svg"
          width="42"
          height="36"
          alt="Donate now with Apple Pay"
        />
      </div>
      <div className={styles.row_container}>
        <p>
          Wir stellen dir gerne eine Spendenbescheinigungen aus. <br /> Schreib
          uns dazu einfach eine Mail an spende@louandyou.org
        </p>
      </div>
      <div className={styles.row_container}>
        <div className={styles.links_container}>
          {" "}
          <Link href="/">for donors</Link>
          <p>one pager</p>
          <p>pitch deck</p>
        </div>
        <div className={styles.links_container}>
          <Link href="/">for partners</Link>
          <p>one pager</p>
        </div>
        <div className={styles.links_container}>
          <Link href="/">for the press</Link>
          <p>press kit</p>
        </div>
      </div>
      <div className={styles.last_row}>
        <Link href="/">data protection</Link>
        <Link href="/">imprint</Link>
        <Link href="/">disclaimer of liability</Link>
        <Link href="/">bylaws</Link>
      </div>
    </section>
  );
}
