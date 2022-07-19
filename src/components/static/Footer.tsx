import React, { ReactElement, useState } from "react";
import Image from "next/image";

import styles from "./Footer.module.scss";
import Link from "next/link";
import { Text } from "../dynamic";
import { Feedback } from "./Popups/Feedback";
import { useRouter } from "next/dist/client/router";

import louLogo from "../../../public/logo_full_color.svg";
import paypal from "../../../public/payment/paypal.svg";
import instagram from "../../../public/social/Instagram.svg";
import facebook from "../../../public/social/Facebook.svg";
import linkedin from "../../../public/social/Linkedin.svg";
import heyData from "../../../public/hey_data.svg";
import BMWI from "../../../public/BMWI.svg";
import background from "../../../public/gradients/gradient_footer.png";

export function Footer({ content }): ReactElement {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);

  const router = useRouter();

  return (
    <section aria-label="Footer" className={styles.footer}>
      {/* <div className={styles.foreground} /> */}
      {/* <img
        className={styles.background}
        src={"/gradients/gradient_footer.png"}
      /> */}
      <Image
        src={louLogo}
        width="200"
        height="70"
        alt="logo"
        priority
        quality={100}
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
                width="40"
                height="40"
                alt="instagram logo"
              />
            </a>
            <a
              href={"https://www.facebook.com/louandyou.org"}
              rel="noreferrer"
              target={"_blank"}
            >
              <Image
                src={facebook}
                width="40"
                height="40"
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
                width="40"
                height="40"
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
          <Image
            priority
            src={heyData}
            width="150"
            height="150"
            alt="hey data"
            quality={100}
          />
          <Image
            quality={100}
            priority
            src={BMWI}
            width="160"
            height="150"
            alt="gefördert durch bundesministerium für wirtschaft und klimaschutz"
          />
        </div>
      </div>

      <div style={{ width: "100%" }} className={`is-hidden-mobile`}>
        <div
          className="is-flex is-justify-content-space-between"
          style={{ marginTop: "70px", lineHeight: "42px" }}
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
          <Image
            quality={100}
            priority
            src={BMWI}
            width="160"
            height="150"
            alt="gefördert durch bundesministerium für wirtschaft und klimaschutz"
          />
          <Image
            priority
            quality={100}
            src={heyData}
            width="150"
            height="150"
            alt="hey data"
          />

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
