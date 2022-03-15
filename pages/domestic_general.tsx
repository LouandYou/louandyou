import styles from "./result.module.scss";
import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";
import { PageContent, Text } from "../src/components/dynamic";

export default function Page({ story }) {
  const { content } = story;
  return (
    <>
      <PageContent blok={content} name={"section_1"} />
      <section className={styles.white_page_full}>
        <Text blok={content} attribute={"most_importantly"} />
      </section>
      <PageContent blok={content} name={"body"} />
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "domestic_general",
  });
}
