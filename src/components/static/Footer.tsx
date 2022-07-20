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
import linkedin from "../../../public/social/Linkedin.svg";

export function Footer({ content }): ReactElement {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);

  const router = useRouter();

  return (
    <section aria-label="Footer" className={styles.footer}>
      <img
        src="/logo_full_color.svg"
        alt="Lou&You Logo"
        className={styles.logo}
      />
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
              alt="paypal logo"
              onClick={() =>
                router.push(
                  "https://www.paypal.com/donate/?hosted_button_id=U3KR7UUECXXXE"
                )
              }
            />
          </span>
          <p style={{ fontSize: "11px", lineHeight: "18px" }}>
            {content.spende2}
          </p>
        </div>

        <div className="is-flex is-justify-content-space-between">
          <div
            style={{ paddingLeft: "19px", lineHeight: "35px" }}
            className="is-flex is-flex-direction-column"
          >
            <b>{content.contact}</b>
            <a onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>
              {content.contact_us}
            </a>
            <Text blok={content} attribute={"navbar_dropdown2"} />
            <a onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>Feedback</a>
          </div>
          <span className={styles.icons_container}>
            <a
              href="https://www.instagram.com/louandyouapp/"
              rel="noreferrer"
              target={"_blank"}
            >
              <Image
                src={instagram}
                width="38"
                height="38"
                alt="instagram logo"
              />
            </a>
            <a
              href={"https://www.facebook.com/louandyou.org"}
              rel="noreferrer"
              target={"_blank"}
              className="px-3"
            >
              <Image
                src={facebook}
                width="38"
                height="38"
                alt="facebook logo"
              />
            </a>
            <a
              href={"https://www.linkedin.com/company/louandyou/"}
              rel="noreferrer"
              target={"_blank"}
            >
              <Image
                src={linkedin}
                width="38"
                height="38"
                alt="linkedin logo"
              />
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
          <img width={"108px"} src="/hey_data.png" alt="hey data" />
          <img
            width={"108px"}
            src="/BMWI.svg"
            alt="gefördert durch bundesministerium für wirtschaft und klimaschutz"
          />
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
          <div>
            <b>{content.contact}</b>
            <a onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>
              {content.contact_us}
            </a>
            <Text blok={content} attribute={"navbar_dropdown2"} />
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
                  src={instagram}
                  width="30"
                  height="30"
                  alt="instagram logo"
                />
              </a>
              <a
                href={"https://www.facebook.com/louandyou.org"}
                rel="noreferrer"
                target={"_blank"}
                className="px-3"
              >
                <Image
                  src={facebook}
                  width="30"
                  height="30"
                  alt="facebook logo"
                />
              </a>
              <a
                href={"https://www.linkedin.com/company/louandyou/"}
                rel="noreferrer"
                target={"_blank"}
              >
                <Image
                  src={linkedin}
                  width="30"
                  height="30"
                  alt="linkedin logo"
                />
              </a>
            </span>
          </div>
          <div className={styles.support}>
            <Text blok={content} attribute={"spende1"} />

            <span className="is-flex my-4 is-align-items-center">
              <p className="mr-5"> {content.or_with}</p>

              <Image
                src={paypal}
                width="56"
                height="20"
                className="is-clickable"
                alt="paypal logo"
                onClick={() =>
                  router.push(
                    "https://www.paypal.com/donate/?hosted_button_id=U3KR7UUECXXXE"
                  )
                }
              />
            </span>
            <p style={{ fontSize: "11px", lineHeight: "18px" }}>
              {content.spende2}
            </p>
          </div>
        </div>
        <div className="is-flex is-justify-content-space-between is-relative">
          <div>
            <img
              style={{
                marginLeft: "-15px",
                marginRight: "30px",
                marginTop: "-15px",
              }}
              width={"130px"}
              src="/BMWI.svg"
              alt="gefördert durch bundesministerium für wirtschaft und klimaschutz"
            />

            <img width={"83px"} src="/hey_data.png" alt="hey data" />
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
