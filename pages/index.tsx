import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

import { Layout } from "../src/components/static/Layout";
import Storyblok, { useStoryblok } from "../src/lib/storyblok";
import { GetHelp } from "../src/components/static";

import Image from "next/image";
import styles from "./index.module.scss";
import { PageSection } from "../src/components/dynamic";
import { Footer } from "../src/components/static/Footer";

export default function Page({ story, preview, locale }) {
  const enableBridge = true; // load the storyblok bridge everywhere
  // use the preview variable to enable the bridge only in preview mode
  // const enableBridge = preview;
  const [iconsClass, setIconsClass] = useState(styles.icons);
  story = useStoryblok(story, enableBridge, locale);

  const section = useRef<HTMLElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!container.current) {
      return;
    }
    let scroll = container.current.scrollTop;
    console.log(scroll);
    if (scroll >= 643) {
      setIconsClass(styles.icons_scrolled);
    } else {
      setIconsClass(styles.icons);
    }
  };

  useEffect(() => {
    container.current?.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Layout locale={locale}>
      <div className={styles.icons}>
        <Image
          src={"/../public/logo-white.png"}
          layout="fixed"
          width="80"
          height="80"
          alt="logo"
        />

        <Image
          src={"/../public/3844473_hamburger_menu_more_navigation_icon.png"}
          layout="fixed"
          width="40"
          height="36"
          alt="logo"
          className={styles.hamburger}
        />
      </div>
      <div className={styles.page_wraper}>
        <section ref={section} className={styles.landing_page}>
          <Image
            src={"/../public/full-logo-white.png"}
            layout="fixed"
            width="320"
            height="170"
            alt="logo"
          />
          <PageSection blok={story.content} name="description" />
        </section>
      </div>
      <div className={styles.page_wraper}>
        <section className={styles.white_page_long}>
          <h1 className={styles.title}>
            find help <br />& support
          </h1>
          <p className={styles.description}>
            Tell me a little about what your
            <br /> situation is and I’ll show you what
            <br /> might be helpful for you.
          </p>
          <GetHelp />
        </section>

        <section className={styles.color_page}>
          <h1 className={styles.title_white}>
            here you can also find some general information on violence
          </h1>
          <div className={styles.btn_container}>
            <button className={styles.white_btn}>
              <Link href="/domestic_general" passHref>
                domestic violance
              </Link>
            </button>
            <button className={styles.white_btn}>
              <Link href="/sexual_general" passHref>
                sexual violance
              </Link>
            </button>
          </div>
        </section>

        <section className={styles.white_page}>
          <h1 className={styles.subtitle}>
            would you like to know more about me?
          </h1>
          <p className={styles.description}>
            I’m the first digital companion for
            <br />
            people affected by gender-based violence. You can read{" "}
            <Link passHref href={""}>
              more about me here.
            </Link>
            <br /> <br /> And if you’d like to stay in touch, sign up to my{" "}
            <Link passHref href={""}>
              newsletter
            </Link>{" "}
            . Because one thing is for sure: together, we can{" "}
            <Link passHref href={""}>
              change alot
            </Link>
            .
          </p>
        </section>
        <Footer />
      </div>
    </Layout>
  );
}

export async function getStaticProps({
  locale,
  locales,
  defaultLocale,
  preview = false,
}) {
  let slug = "home";

  let sbParams: any = {
    version: "draft",
    resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
    language: locale,
  };

  if (preview) {
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      preview,
      locale,
      locales,
      defaultLocale,
    },
    revalidate: 3600, // revalidate every hour
  };
}
