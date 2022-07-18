import styles from "./result.module.scss";
import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";
import { PageContent, Text } from "../src/components/dynamic";
import { Feedback } from "../src/components/static/Popups/Feedback";
import { useState } from "react";

export default function Page({ story, layoutStory }) {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);
  const { content } = story;
  return (
    <>
      <section className={styles.landing_page}>
        <h1>{content.headline}</h1>
        <Text blok={content} attribute={"subline"} />
      </section>
      <section className={styles.white_page_full}>
        <Text blok={content} attribute={"most_importantly"} />
      </section>
      <PageContent blok={content} name={"body"} />
      <section id="trigger-warning" className={styles.warning}>
        <Text blok={content} attribute={"warning_p"} />
        <div className="is-flex-tablet is-justify-content-center">
          <a href={"#headline_7"}>
            <button className={`${styles.button} ${styles.white}`}>
              {content.warning_button}
            </button>
          </a>
        </div>
      </section>
      <PageContent blok={content} name={"body2"} />
      <section className={styles.white_page}>
        <h2>{content.lets_build_title1}</h2>
        <Text blok={content} attribute={"lets_build_p1"} />
        <h2 style={{ marginTop: "200px" }}>{content.lets_build_title2}</h2>
        <Text blok={content} attribute={"lets_build_p2"} />

        <div className="is-flex is-justify-content-center">
          <button
            onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}
            className={`${styles.button} ${styles.purple}`}
          >
            {content.feedback}
          </button>
        </div>
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
    slug: "result_4",
  });
}
