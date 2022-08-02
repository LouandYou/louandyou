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
          {locale === "en" ? "Join our Team" : "Werde Teil unseres Teams"} |
          Lou&You
        </title>
        <meta
          name="description"
          content={
            locale === "en"
              ? "We are looking for people who bring Lou to life with us, shape our work, contribute ideas, ask critical questions, or in short: become a part of Lou."
              : "Wir suchen Menschen, die Lou gemeinsam mit uns zum Leben erwecken möchten, mitgestalten, kritische Fragen stellen, kurz gesagt: Ein Teil von Lou werden."
          }
        />
      </Head>
      <section className={styles.white_page}>
        <Text blok={content} attribute={"text1"} />
      </section>
      <section className={styles.gradient_page}>
        <Text blok={content} attribute={"text2"} />
      </section>
      <section className={styles.white_page}>
        <Text blok={content} attribute={"text3"} />
      </section>
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "about/join_us",
  });
}
