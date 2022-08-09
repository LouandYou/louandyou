import { pageGetStaticProps } from "../../src/lib/pageGetStaticProps";
import { Text } from "../../src/components/dynamic";
import styles from "./About.module.scss";
import iphone from "../../public/about/lou_mockup.webp";

import Image from "next/image";
import { Feedback } from "../../src/components/static/Popups/Feedback";
import { useState } from "react";
import Head from "next/head";

export default function Page({ story, layoutStory, locale }) {
  const { content } = story;
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>{locale === "en" ? "About Lou" : "Über Lou"} | Lou&You</title>
        <meta
          name="description"
          content={
            locale === "en"
              ? "Hi, I'm Lou. Have you yourself experienced violence or want to support someone else who has? No matter your questions or concerns: I am here to help."
              : "Hallo, ich bin Lou. Hast du selbst Gewalt erlebt oder willst jemanden unterstützen? Egal welche Fragen oder Sorgen du hast: ich bin hier, um dir zu helfen."
          }
        />
      </Head>
      <section className={styles.white_page}>
        <Text blok={content} attribute={"text1"} />
        <div className={styles.container}>
          <Image
            src={iphone}
            alt={
              locale === "en"
                ? "Lou&You webapp opened on a smartphone"
                : "Lou&You Web-App geöffnet auf einem Smartphone"
            }
            layout={"fill"}
            objectFit={"contain"}
            priority
            quality={100}
          />
        </div>
      </section>
      <section style={{ display: "block" }} className={styles.white_page}>
        <Text blok={content} attribute={"text2"} />
        <div className={styles.cards_container}>
          <div className={styles.text_blok}>{content.card1}</div>
          <div className={styles.text_blok}>{content.card2}</div>
          <div className={styles.text_blok}>{content.card3}</div>
          <div className={styles.text_blok}>{content.card4}</div>
          <div className={styles.text_blok}>{content.card5}</div>
        </div>
      </section>
      <section className={`${styles.gradient_page} is-flex-direction-column `}>
        <Text blok={content} attribute={"text3"} />
        <button
          onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}
          className={`${styles.button} ${styles.purple}`}
        >
          {content.feedback}
        </button>
        {isFeedbackOpen && (
          <Feedback
            darkBackground={true}
            content={layoutStory.content}
            onClose={() => setIsFeedbackOpen(!isFeedbackOpen)}
          />
        )}
      </section>
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "about/meet_lou",
  });
}
