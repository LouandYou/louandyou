import React from "react";
import Link from "next/link";

import { LinkButton, CookiesPopup } from "../src/components/static";
import { useStoryblok } from "../src/lib/storyblok";
import { GetHelp } from "../src/components/static";

import Image from "next/image";
import styles from "./index.module.scss";
import { Text } from "../src/components/dynamic";
import { Footer } from "../src/components/static";
import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";

export default function Page({
  story,
  preview,
  locales,
  locale,
  defaultLocale,
}) {
  story = useStoryblok(story, preview, locale);
  console.log(story.content);

  return (
    <>
      <div className={styles.page_wrapper}>
        <section
          is-landing-page="true"
          id="section_1"
          className={styles.gradient_page}
        >
          <Image
            src={"/logo_full_white.svg"}
            layout="fixed"
            width="250"
            height="100"
            alt="logo"
            priority
          />
          <Text blok={story.content} attribute={"description"} />

          <div className={styles.language_wrapper}>
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
        </section>
      </div>
      <div className={styles.page_wrapper}>
        <section className={styles.find_help}>
          <h1>{story.content.question_headline}</h1>
          <GetHelp content={story.content} />
        </section>

        <section className={styles.gradient_page}>
          <h1>{story.content.title1}</h1>
          <div className={styles.btn_container}>
            <LinkButton href="/domestic_general" variant="white">
              {story.content.domestic_violence}
            </LinkButton>
            <LinkButton href="/sexual_general" variant="white">
              {story.content.sexual_violence}
            </LinkButton>
          </div>
        </section>

        <section className={styles.white_page}>
          <h1>{story.content.title2}</h1>
          <p>{story.content.title2_p}</p>
        </section>
        <section className={styles.gradient_page}>
          <h1>{story.content.title3}</h1>
          <div className={styles.btn_container}>
            <LinkButton href={"./"} variant="white">
              {story.content.newsletter}
            </LinkButton>
          </div>
        </section>
        <section className={styles.footer_wrapper}>
          <Footer />
        </section>
      </div>
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "home",
  });
}
