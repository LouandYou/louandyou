import React, { ReactElement, useState } from "react";
import Image from "next/image";

import styles from "./Footer.module.scss";
import Link from "next/link";
import { Text } from "../dynamic";
import { Feedback } from "./Popups/Feedback";

export function Footer({ content }): ReactElement {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);

  return (
    <section aria-label="Footer" className={styles.footer}>
      <Image
        src={"/logo_full_color.png"}
        width="180"
        height="65"
        alt="logo"
        priority
        quality={100}
      />

      <div className="">
        <div
          style={{ paddingLeft: "22px", marginTop: "50px", lineHeight: "35px" }}
        >
          <b>{content.about_louandyou}</b>
          <Text blok={content} attribute={"navbar_dropdown1"} />
          <span style={{ margin: "20px" }} />
          <Text blok={content} attribute={"support"} />
        </div>

        <div className={styles.support}>
          <Text blok={content} attribute={"spende1"} />

          <span className="is-flex my-5">
            <p className="mr-5"> {content.or_with}</p>
            <a href="https://www.paypal.com/donate/?token=i_YUxdgDwqrbHyMpuxPouj5DnWgnw8VpxUYVeqxLiF_NTfXhvP7liQn9F4PhmTGTbfhmfmliyYEA8F0d">
              <Image
                src={"/payment/paypal.svg"}
                width="56"
                height="20"
                alt="paypal logo"
              />
            </a>
          </span>
          <p>{content.spende2}</p>
        </div>

        <div className="is-flex is-justify-content-space-between">
          <div
            style={{ paddingLeft: "22px", lineHeight: "35px" }}
            className="is-flex is-flex-direction-column"
          >
            <b>{content.contact}</b>
            <Text blok={content} attribute={"navbar_dropdown2"} />
            <a onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>Feedback</a>
          </div>
          <span className={styles.icons_container}>
            <Image
              src={"/social/instagram.png"}
              width="34"
              height="34"
              alt="instagram logo"
            />
            <Image
              src={"/social/facebook.png"}
              width="34"
              height="34"
              alt="facebook logo"
            />
            <Image
              src={"/social/linkedin.png"}
              width="40"
              height="34"
              alt="linkedin logo"
            />
          </span>
        </div>

        <div className="is-flex">
          <div className={styles.links_row}>
            <Link href="/">{content.imprint}</Link>
            <Link href="/">{content.data}</Link>
            <Link href="/">{content.bylaws}</Link>
          </div>
          <div className={styles.links_row}>
            <Link href="/">{content.accessibility}</Link>
            <Link href="/">{content.disclaimer}</Link>
          </div>
        </div>
        <div className={styles.last_icons}>
          <Image
            src={"/data-protection.png"}
            width="129"
            height="150"
            alt="hey data"
          />
          <Image
            src={"/german.png"}
            width="160"
            height="150"
            alt="gefördert durch bundesministerium für wirtschaft und klimaschutz"
          />
        </div>
      </div>

      <div className={`is-hidden-mobile ${styles.desktop_container}`}></div>
      {isFeedbackOpen && (
        <Feedback
          content={content}
          onClose={() => setIsFeedbackOpen(!isFeedbackOpen)}
        />
      )}
    </section>
  );
}
