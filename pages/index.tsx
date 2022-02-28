import React from "react";
import Link from "next/link";

import { CookiesPopup, Layout } from "../src/components/static";
import { Storyblok, useStoryblok } from "../src/lib/storyblok";
import { GetHelp } from "../src/components/static";

import Image from "next/image";
import styles from "./index.module.scss";
import { PageContent } from "../src/components/dynamic";
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

  return (
    <Layout>
      <div className={styles.page_wrapper}>
        <section
          is-landing-page="true"
          id="section_1"
          className={styles.landing_page}
        >
          <div className="pb-3">
            <Image
              src={"/logo_full_white.svg"}
              layout="fixed"
              width="250"
              height="100"
              alt="logo"
              priority
            />
          </div>
          <PageContent blok={story.content} name="description" />
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
                      className={`px-1 ${
                        loc === locale ? "is-underlined" : ""
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
        <section className={styles.white_page_long}>
          <h1 className={styles.title}>
            let’s find out how <br /> I can help you
          </h1>
          <GetHelp />
        </section>

        <section className={styles.color_page}>
          <h1 className={styles.title_white}>
            here you find some helpful things to know about violence:
          </h1>
          <div className={styles.btn_container}>
            <Link href="/domestic_general" passHref>
              <button className={`${styles.button} ${styles.white}`}>
                domestic violence
              </button>
            </Link>

            <Link href="/sexual_general" passHref>
              <button className={`${styles.button} ${styles.white}`}>
                sexual violence
              </button>
            </Link>
          </div>
        </section>

        <section className={styles.white_page}>
          <h1 className={styles.subtitle}>
            come along & find out how we can create a better future for
            everyone.
          </h1>
          <p className={styles.description}>
            Let me introduce myself to you: <br /> I’m the first digital
            companion for people who experienced sexual and domestic violence. I
            have quite ambitious plans for the future.
          </p>
        </section>
        <section className={styles.color_page}>
          <h1 className={styles.title_white}>
            join me on my journey & let me share when big things are happening
            for me
          </h1>
          <div className={styles.btn_container}>
            <Link href="/" passHref>
              <button className={`${styles.button} ${styles.white}`}>
                sign up to my newsletter
              </button>
            </Link>
          </div>
        </section>
        <section className={styles.footer_wrapper}>
          <Footer />
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "home",
  });
}
