import React from "react";
import Link from "next/link";

import { LinkButton, CookiesPopup } from "../src/components/static";
import { GetHelp } from "../src/components/static";

import Image from "next/image";
import styles from "./index.module.scss";
import { Text } from "../src/components/dynamic";
import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";
import Blobs from "../src/components/static/Popups/Blobs";

export default function Page({
  story,
  preview,
  locales,
  locale,
  defaultLocale,
}) {
  const content = story.content;
  return (
    <>
      <section
        is-landing-page="true"
        id="section_1"
        className={styles.gradient_page}
      >
        <div style={{ zIndex: 2, maxWidth: "650px" }}>
          <Image
            className={styles.color}
            src={"/logo_full_white.svg"}
            layout="responsive"
            width="250"
            height="100"
            alt="logo"
            priority
          />

          <Text blok={content} attribute={"description"} />
        </div>
        <div className={`is-hidden-tablet ${styles.language_wrapper}`}>
          <div className={styles.language_switch}>
            {locales
              .map((loc) => (
                <Link
                  key={loc}
                  href={`/${loc === defaultLocale ? "" : loc}`}
                  locale={false}
                  passHref
                >
                  <div
                    className={`px-1 mx-1 ${
                      loc === locale ? styles.underlined : ""
                    }`}
                  >
                    {loc.toUpperCase()}
                  </div>
                </Link>
              ))
              .reduce((prev, curr) => [prev, "|", curr])}
          </div>
        </div>
        <CookiesPopup
          locales={locales}
          locale={locale}
          defaultLocale={defaultLocale}
          story={story}
          preview={preview}
        />
        <Blobs />
      </section>

      <section className={styles.find_help}>
        <h1>{content.question_headline}</h1>
        <GetHelp content={content} />
      </section>

      <section className={styles.gradient_page}>
        <div style={{ zIndex: 2 }}>
          <h1>{content.title1}</h1>
          <div className={styles.btn_container}>
            <LinkButton href="/domestic_general" variant="white">
              {content.domestic_violence}
            </LinkButton>
            <LinkButton href="/sexual_general" variant="white">
              {content.sexual_violence}
            </LinkButton>
          </div>
        </div>
      </section>

      <section className={styles.white_page}>
        <h1>{content.title2}</h1>
        <Text blok={content} attribute={"title2_p"} />
      </section>
      <section className={styles.gradient_page}>
        <div style={{ zIndex: 2, textAlign: "left" }}>
          <Text blok={content} attribute={"title3"} />
          <div className={styles.btn_container}>
            <LinkButton
              href={"https://seu2.cleverreach.com/f/314808-318550/"}
              variant="white"
            >
              {content.newsletter}
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "home",
  });
}
