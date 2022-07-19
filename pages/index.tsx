import React from "react";
import Link from "next/link";

import { LinkButton, CookiesPopup } from "../src/components/static";
import { GetHelp } from "../src/components/static";
import styles from "./index.module.scss";
import { Text } from "../src/components/dynamic";
import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";

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
        <div className={styles.landing_page_container}>
          <img width="510" alt="logo" src="/logo_full_white.svg" />
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
                    className={`mx-3 px-1 ${
                      loc === locale ? styles.underlined : ""
                    }`}
                  >
                    {loc.toUpperCase()}
                  </div>
                </Link>
              ))
              .reverse()
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
      </section>

      <section className={styles.find_help}>
        <div>
          <h1>{content.question_headline}</h1>
          <GetHelp content={content} />
        </div>
      </section>

      <section className={styles.gradient_page}>
        <div style={{ zIndex: 2 }}>
          <h1>{content.title1}</h1>
          <div className={styles.btn_container}>
            <LinkButton href="/domestic_general" variant="purple">
              {content.domestic_violence}
            </LinkButton>
            <LinkButton href="/sexual_general" variant="purple">
              {content.sexual_violence}
            </LinkButton>
          </div>
        </div>
      </section>

      <section className={styles.white_page}>
        <div>
          <h1>{content.title2}</h1>
          <Text blok={content} attribute={"title2_p"} />
        </div>
      </section>
      <section className={styles.blue_section}>
        <div style={{ zIndex: 2 }}>
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
