import { pageGetStaticProps } from "../../src/lib/pageGetStaticProps";
import { Text } from "../../src/components/dynamic";
import styles from "./About.module.scss";
import Head from "next/head";

export default function Page({ story, locale }) {
  const { content } = story;

  return (
    <>
      <Head>
        <title>
          {locale === "en" ? "Our impact" : "Unser Impact"} | Lou&You
        </title>
        <meta
          name="description"
          content={
            locale === "en"
              ? "Lou will sustainably reduce violence. Our goal is to remove existing hurdles for people affected by violence and to help them in anything they need."
              : "Lou wird Gewalt nachhaltig reduzieren. Unser Ziel ist es, bestehende Hindernisse für Betroffene von Gewalt zu beseitigen und ihnen zu helfen."
          }
        />
      </Head>
      <section className={styles.gradient_page}>
        <Text blok={content} attribute={"text1"} />
      </section>
      <section className={styles.white_page}>
        <Text blok={content} attribute={"text2"} />
      </section>
      <section className={styles.gradient_page}>
        <Text blok={content} attribute={"text3"} />
      </section>
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "about/impact",
  });
}
