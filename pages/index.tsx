import React from "react";
import Link from "next/link";

import { Layout } from "../src/components/static";
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
    <Layout locale={locale}>
      <div className={styles.page_wrapper}>
        <section className={styles.landing_page}>
          <div className="py-4">
            <Image
              src={"/logo_full_white.svg"}
              layout="fixed"
              width="220"
              height="70"
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
            <button className={styles.white_btn}>
              <Link href="/domestic_general" passHref>
                domestic violence
              </Link>
            </button>
            <button className={styles.white_btn}>
              <Link href="/sexual_general" passHref>
                sexual violence
              </Link>
            </button>
          </div>
        </section>

        <section className={styles.white_page}>
          <h1 className={styles.subtitle}>
            come along & <br /> find out how we <br /> can create a better
            future for everyone.
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
            <button className={styles.white_btn}>
              <Link href="/" passHref>
                sign up to my newsletter
              </Link>
            </button>
          </div>
        </section>
        {/* <Footer /> */}
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
