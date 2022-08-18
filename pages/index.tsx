import React from "react";
import { LinkButton } from "../src/components/static";
import { SearchMask } from "../src/components/static";
import styles from "./index.module.scss";
import { Text } from "../src/components/dynamic";
import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";

export default function Page({ story }) {
  const content = story.content;
  return (
    <>
      <section
        is-landing-page="true"
        id="section_1"
        className={styles.gradient_page}
      >
        <div className={styles.landing_page_container}>
          <img width="510" alt="Lou&You" src="/logo-lou&you.png" />
          <Text blok={content} attribute={"description"} />
        </div>
      </section>

      <section className={styles.find_help}>
        <Text blok={content} attribute={"question_headline"} />
        <div className={styles.container}>
          <SearchMask content={content} />
        </div>
      </section>

      <section className={styles.gradient_page}>
        <div style={{ zIndex: 2 }}>
          <h1>{content.title1}</h1>
          <div className={styles.btn_container}>
            <LinkButton href="/general-domestic-violence" variant="purple">
              {content.domestic_violence}
            </LinkButton>
            <LinkButton href="/general-sexual-violence" variant="purple">
              {content.sexual_violence}
            </LinkButton>
          </div>
        </div>
      </section>

      <section className={styles.white_page}>
        <div>
          <h1>{content.title2}</h1>
          <Text blok={content} attribute={"title2_p"} />
        </div>
      </section>
      <section className={styles.blue_section}>
        <div style={{ zIndex: 2 }}>
          <Text blok={content} attribute={"title3"} />
          <div className={styles.btn_container}>
            <LinkButton
              href={"https://seu2.cleverreach.com/f/314808-318550/"}
              variant="white"
            >
              {content.newsletter}
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "home",
  });
}
