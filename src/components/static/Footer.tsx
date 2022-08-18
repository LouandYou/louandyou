/* eslint-disable @next/next/no-img-element */
import React, { ReactElement, useState } from "react";
import Image from "next/image";

import styles from "./Footer.module.scss";
import Link from "next/link";
import { Text } from "../dynamic";
import { Feedback } from "./Popups/Feedback";
import { useRouter } from "next/dist/client/router";

import paypal from "../../../public/payment/paypal.svg";
import instagram from "../../../public/social/Instagram.svg";
import facebook from "../../../public/social/Facebook.svg";
import twitter from "../../../public/social/Twitter.svg";
import linkedin from "../../../public/social/Linkedin.svg";

export function Footer({ content, locale }): ReactElement {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);

  const router = useRouter();

  return (
    <section aria-label="Footer" className={styles.footer}>
      <img src="/logo-lou&you.png" alt="Lou&You" className={styles.logo} />
      <div className="is-hidden-tablet">
        <div
          style={{
            paddingLeft: "19px",
            marginTop: "50px",
            lineHeight: "35px",
          }}
        >
          <b>{content.about_louandyou}</b>
          <Text blok={content} attribute={"navbar_dropdown1"} />
          <span style={{ margin: "16px" }} />
          <Text blok={content} attribute={"support"} />
        </div>

        <div className={styles.support}>
          <Text blok={content} attribute={"spende1"} />
          <span className="is-flex my-5">
            <p className="mr-3">{content.or_with}</p>

            <Image
              src={paypal}
              className="is-clickable"
              width="56"
              height="20"
              alt="Paypal"
              onClick={() =>
                router.push(
                  "https://www.paypal.com/donate/?hosted_button_id=U3KR7UUECXXXE"
                )
              }
            />
          </span>
          <div className={styles.rechnung}>
            <Text blok={content} attribute={"spende2"} />
          </div>
        </div>

        <div className="is-flex is-justify-content-space-between">
          <div
            style={{ paddingLeft: "19px", lineHeight: "35px" }}
            className="is-flex is-flex-direction-column"
          >
            <Text blok={content} attribute={"contact_menu"} />
            <a onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>Feedback</a>
          </div>
          <span className={styles.icons_container}>
            <a
              href="https://www.instagram.com/louandyouapp/"
              rel="noreferrer"
              target={"_blank"}
            >
              <Image src={instagram} width="30" height="30" alt="Instagram" />
            </a>
            <a
              href={"https://www.facebook.com/louandyou.org"}
              rel="noreferrer"
              target={"_blank"}
              className="px-3"
            >
              <Image src={facebook} width="30" height="30" alt="Facebook" />
            </a>
            <a
              href={"https://twitter.com/Louandyou_"}
              rel="noreferrer"
              target={"_blank"}
              className="pr-3"
            >
              <Image src={twitter} width="30" height="30" alt="Facebook" />
            </a>
            <a
              href={"https://www.linkedin.com/company/louandyou/"}
              rel="noreferrer"
              target={"_blank"}
            >
              <Image src={linkedin} width="30" height="30" alt="Linkedin" />
            </a>
          </span>
        </div>

        <div className="is-flex">
          <div className={styles.links_row}>
            <Link href="/legal/imprint">{content.imprint}</Link>
            <Link href="/legal/data_protection">{content.data}</Link>
            <Link href="/legal/bylaws">{content.bylaws}</Link>
          </div>
          <div className={styles.links_row}>
            <Text blok={content} attribute={"accessibility"} />
            <Link href="/legal/disclaimer_of_liability">
              {content.disclaimer}
            </Link>
          </div>
        </div>
        <div className={styles.last_icons}>
          <a href="https://heydata.eu">
            <img
              width={"108px"}
              src="/hey_data.png"
              alt={
                locale === "en"
                  ? "HeyData - seal of quality in data protection"
                  : "HeyData - Qualitätssiegel Datenschutz"
              }
            />
          </a>
          <a href="https://www.bmwk.de/">
            <img
              width={"108px"}
              src="/BMWI.png"
              alt={
                locale === "en"
                  ? "Funded by the German Federal Ministry for Economic Affairs and Climate Action following a resolution by the German Bundestag"
                  : "Gefördert durch Bundesministerium für Wirtschaft und Klimaschutz aufgrund eines Beschlusses des deutschen Bundestags"
              }
            />
          </a>
        </div>
      </div>

      <div style={{ width: "100%" }} className={`is-hidden-mobile`}>
        <div
          className="is-flex is-justify-content-space-between"
          style={{ marginTop: "65px", lineHeight: "38px" }}
        >
          <div>
            <b>{content.about_louandyou}</b>
            <Text blok={content} attribute={"navbar_dropdown1"} />
          </div>
          <div>
            <Text blok={content} attribute={"support"} />
          </div>
          <div className="is-flex is-flex-direction-column">
            <Text blok={content} attribute={"contact_menu"} />
            <a onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>
              {content.feedback}
            </a>
            <span
              style={{ marginTop: "24px" }}
              className={styles.icons_container}
            >
              <a
                href={"https://www.instagram.com/louandyouapp/"}
                rel="noreferrer"
                target={"_blank"}
              >
                <Image
                  priority
                  src={instagram}
                  width="30"
                  height="30"
                  alt="Instagram"
                />
              </a>
              <a
                href={"https://www.facebook.com/louandyou.org"}
                rel="noreferrer"
                target={"_blank"}
                className="px-3"
              >
                <Image
                  priority
                  src={facebook}
                  width="30"
                  height="30"
                  alt="Facebook"
                />
              </a>
              <a
                href={"https://twitter.com/Louandyou_"}
                rel="noreferrer"
                target={"_blank"}
                className="pr-3"
              >
                <Image
                  priority
                  src={twitter}
                  width="30"
                  height="30"
                  alt="Facebook"
                />
              </a>
              <a
                href={"https://www.linkedin.com/company/louandyou/"}
                rel="noreferrer"
                target={"_blank"}
              >
                <Image
                  priority
                  src={linkedin}
                  width="30"
                  height="30"
                  alt="Linkedin"
                />
              </a>
            </span>
          </div>
          <div className={styles.support}>
            <Text blok={content} attribute={"spende1"} />

            <span className="is-flex my-4 is-align-items-center">
              <p className="mr-5"> {content.or_with}</p>

              <Image
                priority
                src={paypal}
                width="56"
                height="20"
                className="is-clickable"
                alt="Paypal"
                onClick={() =>
                  router.push(
                    "https://www.paypal.com/donate/?hosted_button_id=U3KR7UUECXXXE"
                  )
                }
              />
            </span>
            <div className={styles.rechnung}>
              <Text blok={content} attribute={"spende2"} />
            </div>
          </div>
        </div>
        <div className="is-flex is-justify-content-space-between is-relative">
          <div>
            <a href="https://www.bmwk.de/">
              <img
                style={{
                  marginLeft: "-15px",
                  marginRight: "30px",
                  marginTop: "-15px",
                }}
                width={"130px"}
                src="/BMWI.png"
                alt={
                  locale === "en"
                    ? "Funded by the German Federal Ministry for Economic Affairs and Climate Action following a resolution by the German Bundestag"
                    : "Gefördert durch Bundesministerium für Wirtschaft und Klimaschutz aufgrund eines Beschlusses des deutschen Bundestags"
                }
              />
            </a>
            <a href="https://heydata.eu">
              <img
                width={"100px"}
                src="/hey_data.png"
                alt={
                  locale === "en"
                    ? "HeyData - seal of quality in data protection"
                    : "HeyData - Qualitätssiegel Datenschutz"
                }
              />
            </a>
          </div>
          <div
            style={{ flex: "0.8" }}
            className="is-flex is-align-items-flex-end is-justify-content-space-between"
          >
            <Text blok={content} attribute={"accessibility"} />
            <Link href="/legal/imprint">{content.imprint}</Link>
            <Link href="/legal/data_protection">{content.data}</Link>
            <Link href="/legal/bylaws">{content.bylaws}</Link>
            <Link href="/legal/disclaimer_of_liability">
              {content.disclaimer}
            </Link>
          </div>
        </div>
      </div>
      {isFeedbackOpen && (
        <Feedback
          darkBackground={true}
          content={content}
          onClose={() => setIsFeedbackOpen(!isFeedbackOpen)}
        />
      )}
    </section>
  );
}
