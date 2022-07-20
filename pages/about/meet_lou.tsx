import { pageGetStaticProps } from "../../src/lib/pageGetStaticProps";
import { Text } from "../../src/components/dynamic";
import styles from "./About.module.scss";
import iphone from "../../public/about/lou_mockup.webp";

import Image from "next/image";
import { Feedback } from "../../src/components/static/Popups/Feedback";
import { useState } from "react";

export default function Page({ story, layoutStory }) {
  const { content } = story;
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);

  return (
    <>
      <section className={styles.white_page}>
        <Text blok={content} attribute={"text1"} />
        <div className={styles.container}>
          <Image
            src={iphone}
            alt={"Lou&You"}
            layout={"fill"}
            objectFit={"contain"}
            priority
            quality={100}
          />
        </div>
      </section>
      <section style={{ display: "block" }} className={styles.white_page}>
        <Text blok={content} attribute={"text2"} />
        <div className="is-flex is-justify-content-space-between is-flex-wrap-wrap ">
          <div className={`${styles.text_blok} card`}>
            <div className="content">{content.card1}</div>
          </div>
          <div className={`${styles.text_blok} card`}>{content.card2}</div>
          <div className={`${styles.text_blok} card`}>{content.card3}</div>
          <div className={`${styles.text_blok} card`}>{content.card4}</div>
          <div className={`${styles.text_blok} card`}>{content.card5}</div>
        </div>
      </section>
      <section className={`${styles.gradient_page} is-flex-direction-column `}>
        <Text blok={content} attribute={"text3"} />
        <button
          style={{ width: "350px" }}
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
