import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";
import { Text } from "../src/components/dynamic";
import styles from "./index.module.scss";
import Head from "next/head";

export default function Page({ story, locale }) {
  const { content } = story;

  return (
    <>
      <Head>
        <title>
          {content.headline}
        </title>
        <meta
          name="description"
          content={
            locale === "en"
              ? `We want no one, who experiences violence, to feel alone on their journey towards healing. If you want to support our work, we are thankful for any donation.`
              : `Wir möchten, dass keine Person die Gewalt erfährt, sich auf ihrem Weg alleine fühlt. Wenn du uns unterstützen möchtest, sind wir dankbar für jede Spende.`
          }
        />
      </Head>
      <section
        className={`${styles.gradient_page}`}
      >
        <h1>{content.headline}</h1>
        <p className="mt-4">{content.subline}</p>
        <a  className="mt-2" href={"/pitchdeck.pdf"} download="Lou&You Pitch Deck">Lou&You Pitch Deck.pdf</a>
        <div className="mt-5">
        <Text blok={content} attribute={"cta"}/>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "pitchdeck",
  });
}
