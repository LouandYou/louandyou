import styles from "./result.module.scss";
import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";
import { PageContent, Text } from "../src/components/dynamic";
import Link from "next/link";

export default function Page({ story }) {
  const { content } = story;
  return (
    <>
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
