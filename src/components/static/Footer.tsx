import React, { ReactElement, useState } from "react";
import Image from "next/image";

import styles from "./Footer.module.scss";
import Link from "next/link";
import { Text } from "../dynamic";
import { Feedback } from "./Popups/Feedback";
import Cookies from "js-cookie";

export function Footer({ content }): ReactElement {
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
      <div className="is-hidden-tablet">
        <div className={styles.links_container1}>
          <div className={`mb-2 pl-4 ${styles.row_container}`}>
            <Link href="/">{content.about_us}</Link>
            <a onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>feedback</a>
            <Link href="/">{content.what_we_do}</Link>
          </div>
          <div className={`pl-4 ${styles.row_container}`}>
            <Link href="/">{content.about_lou}</Link>
            <Link href="/">impact</Link>
            <Link href="/">{content.partners}</Link>
          </div>
        </div>

        <div className={styles.support}>
          <div>
            <b className="mb-1">{content.support}</b>
            <Text blok={content} attribute={"spende1"} />
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
          <p>{content.spende2}</p>
        </div>
        <div className={`mb-5 ${styles.row_container}`}>
          <div className="is-flex is-flex-direction-column">
            <b>{content.follow}</b>
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
            <p>{content.donors}</p>
            <p>{content.for_partners}</p>
            <p>{content.press}</p>
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
          <Link href="/">{content.data}</Link>
          <Link href="/">{content.imprint}</Link>
          <Link href="/">{content.disclaimer}</Link>
          <Link href="/">{content.bylaws}</Link>
        </div>
      </div>
      <div className={`is-hidden-mobile ${styles.desktop_container}`}>
        <div>
          <h1>{content.about}</h1>
          <div className={styles.column_desktop}>
            <Link href="/">{content.what_we_do}</Link>
            <Link href="/">{content.about_lou}</Link>
            <Link href="/">{content.about_us}</Link>
            <Link href="/">{content.partners}</Link>
            <Link href="/">Impact</Link>
          </div>
        </div>
        <div>
          <div>
            <h1>{content.donors}</h1>
            <div className={styles.column_desktop}>
              <Link href="/">One Pager</Link>
              <Link href="/">Pitch Deck</Link>
            </div>
          </div>
          <div>
            <h1 style={{ marginTop: "40px" }}>{content.press}</h1>
            <Link href="/">Press Kit</Link>
          </div>
          <div>
            <h1 style={{ marginTop: "40px" }}>{content.for_partners}</h1>
            <Link href="/">One Pager</Link>
          </div>
        </div>
        <div>
          <h1>{content.legal}</h1>
          <div className={styles.column_desktop}>
            <Link href="/">{content.imprint}</Link>
            <Link href="/">{content.data}</Link>
            <Link href="/">{content.disclaimer}</Link>
            <Link href="/">{content.bylaws}</Link>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.column_desktop}>
              <h1>{content.follow}</h1>
              <Link href="/">Newsletter</Link>
              <a onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>feedback</a>
            </div>
          </div>
          <span
            style={{ marginTop: "32px" }}
            className={`${styles.icons_container} ${
              Cookies.get("CONTRAST") ? styles.black : ""
            }`}
          >
            <Link href={"https://www.instagram.com/louandyouapp/"} passHref>
              <Image
                src={"/social/instagram.png"}
                width="34"
                height="34"
                alt="instagram logo"
              />
            </Link>
            <Link href={"https://www.facebook.com/louandyou.org"} passHref>
              <Image
                src={"/social/facebook.png"}
                width="34"
                height="34"
                alt="facebook logo"
              />
            </Link>
            <Link href={"https://www.linkedin.com/company/louandyou/"} passHref>
              <Image
                src={"/social/linkedin.png"}
                width="40"
                height="34"
                alt="linkedin logo"
              />
            </Link>
          </span>
        </div>
        <div style={{ width: "500px", margin: 0 }} className={styles.support}>
          <div style={{ textAlign: "center" }}>
            <b>{content.support}</b>
            <div style={{ textAlign: "left" }}>
              <Text blok={content} attribute={"spende1"} />
            </div>
          </div>
          <span className="is-flex is-justify-content-space-around my-4">
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
          <p>{content.spende2}</p>
        </div>
      </div>
      {isFeedbackOpen && (
        <Feedback onClose={() => setIsFeedbackOpen(!isFeedbackOpen)} />
      )}
    </section>
  );
}
