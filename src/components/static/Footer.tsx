import React, { ReactElement, useState } from "react";
import Image from "next/image";

import styles from "./Footer.module.scss";
import Link from "next/link";
import { Feedback } from "./Popups/Feedback";
import Cookies from "js-cookie";

export function Footer(): ReactElement {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);

  return (
    <section className={styles.footer}>
      <div className={`${Cookies.get("CONTRAST") ? styles.black : ""}`}>
        <Image
          src={"/logo_full_white.svg"}
          width="210"
          height="60"
          alt="logo"
          quality={100}
        />
      </div>
      <div className={styles.links_container1}>
        <div className={`mb-2 pl-4 ${styles.row_container}`}>
          <Link href="/">about us</Link>
          <a onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>feedback</a>
          <Link href="/">what we do</Link>
        </div>
        <div className={`pl-4 ${styles.row_container}`}>
          <Link href="/">about Lou</Link>
          <Link href="/">impact</Link>
          <Link href="/">our partners</Link>
        </div>
      </div>

      <div className={styles.support}>
        <div className={styles.row_container}>
          <b>
            support <br /> Lou
          </b>
          <p>
            Spendenkonto:
            <br />
            SIGE e.V.
            <br />
            Berliner Sparkasse
            <br />
            IBAN DE30400501500136131356
            <br />
            Verwendungszweck: <br />
            Spende SIGE e.V. from [name], [adress]
          </p>
        </div>
        <span className="is-flex is-justify-content-space-between my-4">
          <Image
            src={"/payment/apple.svg"}
            width="43"
            height="16"
            alt="apple pay logo"
          />
          <Image
            src={"/payment/visa.svg"}
            width="90"
            height="30"
            alt="visa logo"
          />
          <Image
            src={"/payment/paypal.svg"}
            width="56"
            height="20"
            alt="paypal logo"
          />
        </span>
        <p>
          Wir stellen dir gerne eine Spendenbescheinigungen aus. Schreib uns
          dazu einfach eine Mail an spende@louandyou.org
        </p>
      </div>
      <div className={`mb-5 ${styles.row_container}`}>
        <div className="is-flex is-flex-direction-column">
          <b>follow us</b>
          <Link href="/">newsletter</Link>
        </div>
        <span
          className={`${styles.icons_container} ${
            Cookies.get("CONTRAST") ? styles.black : ""
          }`}
        >
          <div>
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
          <div>
            <Image
              src={"/social/linkedin.png"}
              width="40"
              height="34"
              alt="linkedin logo"
            />
          </div>
        </span>
      </div>
      <div className={styles.links_container2}>
        <div className={styles.row_container}>
          <p>for donors</p>
          <p>for partners</p>
          <p>for the press</p>
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
      <div className={styles.last_row}>
        <Link href="/">data protection</Link>
        <Link href="/">imprint</Link>
        <Link href="/">disclaimer of liability</Link>
        <Link href="/">bylaws</Link>
      </div>
      {isFeedbackOpen && (
        <Feedback onClose={() => setIsFeedbackOpen(!isFeedbackOpen)} />
      )}
    </section>
  );
}
