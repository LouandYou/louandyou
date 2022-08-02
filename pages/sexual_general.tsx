import styles from "./result.module.scss";
import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";
import { PageContent, Text } from "../src/components/dynamic";
import Link from "next/link";
import Head from "next/head";

export default function Page({ story, locale }) {
  const { content } = story;
  return (
    <>
      <Head>
        <title>
          {locale === "en"
            ? "What's Good to Know about Sexual Violence"
            : "Überblick über sexualisierte Gewalt"}
          | Lou&You
        </title>
        <meta
          name="description"
          content={
            locale === "en"
              ? `It’s not always easy to know whether you or someone else has experienced some form of sexual violence. Here is an overview to help you get a better idea.`
              : `Gewalt ist nicht immer so leicht als Gewalt zu erkennen. Hier findest du einen Überblick, der dir hilft, sexualisierte Gewalt als solche wahrzunehmen.`
          }
        />
      </Head>
      <section className={styles.landing_page}>
        <h1>{content.headline}</h1>
        <Text blok={content} attribute={"subline"} />
      </section>
      <section className={`${styles.white_page_full} is-hidden-tablet`}>
        <Text blok={content} attribute={"section_2"} />
      </section>
      <PageContent blok={content} name={"body"} />
      <section className={styles.warning}>
        <Text blok={content} attribute={"last"} />
        <div className="is-flex-tablet is-justify-content-center">
          <Link passHref href={"/result_2"}>
            <button className={`${styles.button} ${styles.white}`}>
              {content.last_btn}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "sexual_general",
  });
}
