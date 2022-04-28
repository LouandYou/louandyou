import React, { ReactElement, useState } from "react";
import Image from "next/image";

import styles from "./Footer.module.scss";
import Link from "next/link";
import { Text } from "../dynamic";
import { Feedback } from "./Popups/Feedback";
import { useRouter } from "next/dist/client/router";

export function Footer({ content }): ReactElement {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);

  const router = useRouter();

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

      <div className="is-hidden-desktop">
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
            <p className="mr-5">{content.or_with}</p>

            <Image
              src={"/payment/paypal.svg"}
              className="is-clickable"
              width="56"
              height="20"
              alt="paypal logo"
              onClick={() =>
                router.push(
                  "https://www.paypal.com/donate?token=TGxRqEWjrdgIdRKtpTLEMuEE50hJl-zIU2eq3wO9kofXnpqVMlTxpCtoyEx2lfGRjHiGi35hRpOpwVD2"
                )
              }
            />
          </span>
          <p style={{ fontSize: "11px" }}>{content.spende2}</p>
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
            <a
              href={"https://www.instagram.com/louandyouapp/"}
              rel="noreferrer"
              target={"_blank"}
            >
              <Image
                src={"/social/instagram.svg"}
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
                src={"/social/facebook.svg"}
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
                src={"/social/linkedin.svg"}
                width="40"
                height="40"
                alt="linkedin logo"
              />
            </a>
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
          <Image src={"/Data.svg"} width="129" height="150" alt="hey data" />
          <Image
            src={"/BMWI.svg"}
            width="160"
            height="150"
            alt="gefördert durch bundesministerium für wirtschaft und klimaschutz"
          />
        </div>
      </div>

      <div className={`is-hidden-mobile`}>
        <div
          className="is-flex is-justify-content-space-between"
          style={{ marginTop: "70px", lineHeight: "45px" }}
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
            <a onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>Feedback</a>
            <span
              style={{ marginTop: "44px" }}
              className={styles.icons_container}
            >
              <a
                href={"https://www.instagram.com/louandyouapp/"}
                rel="noreferrer"
                target={"_blank"}
              >
                <Image
                  src={"/social/instagram.svg"}
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
                  src={"/social/facebook.svg"}
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
                  src={"/social/linkedin.svg"}
                  width="40"
                  height="40"
                  alt="linkedin logo"
                />
              </a>
            </span>
          </div>
          <div className={styles.support}>
            <Text blok={content} attribute={"spende1"} />

            <span className="is-flex my-5 is-align-items-center">
              <p className="mr-5"> {content.or_with}</p>

              <Image
                src={"/payment/paypal.svg"}
                width="56"
                height="20"
                className="is-clickable"
                alt="paypal logo"
                onClick={() =>
                  router.push(
                    "https://www.paypal.com/donate?token=TGxRqEWjrdgIdRKtpTLEMuEE50hJl-zIU2eq3wO9kofXnpqVMlTxpCtoyEx2lfGRjHiGi35hRpOpwVD2"
                  )
                }
              />
            </span>
            <p style={{ fontSize: "11px" }}>{content.spende2}</p>
          </div>
        </div>
        <div className="is-flex is-justify-content-space-between">
          <Image src={"/Data.svg"} width="129" height="150" alt="hey data" />
          <Image
            src={"/BMWI.svg"}
            width="160"
            height="150"
            alt="gefördert durch bundesministerium für wirtschaft und klimaschutz"
          />
          <div
            style={{ flex: "0.8" }}
            className="is-flex is-align-items-center is-justify-content-space-between"
          >
            <Link href="/">{content.imprint}</Link>
            <Link href="/">{content.data}</Link>
            <Link href="/">{content.bylaws}</Link>
            <Link href="/">{content.accessibility}</Link>
            <Link href="/">{content.disclaimer}</Link>
          </div>
        </div>
      </div>
      {isFeedbackOpen && (
        <Feedback
          content={content}
          onClose={() => setIsFeedbackOpen(!isFeedbackOpen)}
        />
      )}
    </section>
  );
}
