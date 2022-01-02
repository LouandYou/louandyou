import React from "react";
import Link from "next/link";

import {Layout} from "../src/components/static/Layout";
import Storyblok, { useStoryblok } from "../src/lib/storyblok";
import {GetHelp} from "../src/components/static";

import styles from "./index.module.scss";
import { PageSection } from "../src/components/dynamic";

export default function Page({
                               story,
                               preview,
                               locale
                             }) {
  const enableBridge = true; // load the storyblok bridge everywhere
  // use the preview variable to enable the bridge only in preview mode
  // const enableBridge = preview;
  story = useStoryblok(story, enableBridge, locale);

  return (
    <Layout locale={locale}>
      <div className={styles.wrapper}>
        <div className="block py-2">
          <PageSection blok={story.content} name="description" />
        </div>
        <GetHelp />
        <p className="block pt-5">
          Learn more about
          <Link href="/sexual_general" passHref>
            {" sexual"}
          </Link>
          {" or"}
          <Link href="/domestic_general" passHref>
            {" domestic"}
          </Link>
          {""} violence.
        </p>
        <p className="block">
          You’d like to know more about me?
          <br /> Let me <a>introduce myself to you.</a>
          <br /> And if you’d like to stay in touch, sign up to my newsletter{" "}
          <a>here</a>. One thing is for sure: together,{" "}
          <a>we can change a lot.</a>
        </p>
      </div>
    </Layout>
  );

}

export async function getStaticProps({
                                       locale,
                                       locales,
                                       defaultLocale,
                                       preview = false
                                     }) {
  let slug = "home";

  let sbParams: any = {
    version: "published",
    resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
    language: locale
  };
  console.debug('preview', preview);
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
      defaultLocale
    },
    revalidate: 3600 // revalidate every hour
  };
}

