import { LinkButton } from "../src/components/static";
import styles from "./result.module.scss";
import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";
import { PageContent, Text } from "../src/components/dynamic";
import { Feedback } from "../src/components/static/Popups/Feedback";
import { useState } from "react";

export default function Page({ story }) {
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
      <section className={styles.warning} id="section_14">
        <h1 className="mb-5">{content.warning_title}</h1>
        <p id="trigger-warning">{content.warning_p}</p>
        <div className="is-flex is-justify-content-center">
          <LinkButton variant={`white`} href={"#section_17"}>
            {content.warning_button}
          </LinkButton>
        </div>
      </section>
      <PageContent blok={content} name={"body2"} />
      <section className={styles.landing_page}>
        <h2 className="mb-5">{content.where_to_title}</h2>
        <Text blok={content} attribute={"where_to_p"} />
      </section>
      <section className={styles.white_page}>
        <h2>{content.lets_build_title1}</h2>
        <p className="mb-5">{content.lets_build_p3}</p>
        <Text blok={content} attribute={"lets_build_p1"} />
        <h3>{content.lets_build_title2}</h3>
        <Text blok={content} attribute={"lets_build_p2"} />

        <div className="is-flex is-justify-content-center">
          <button
            onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}
            className={`${styles.button} ${styles.purple}`}
          >
            give feedback
          </button>
        </div>
        {isFeedbackOpen && (
          <Feedback onClose={() => setIsFeedbackOpen(!isFeedbackOpen)} />
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
