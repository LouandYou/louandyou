import { pageGetStaticProps } from "../../src/lib/pageGetStaticProps";
import { PageContent, Text } from "../../src/components/dynamic";
import styles from "./Legal.module.scss";

export default function Page({ story }) {
  const { content } = story;

  return (
    <section className={`${styles.legal} content`}>
      {/* <PageContent blok={content} name={"body"} /> */}
      <Text blok={content} attribute={"body1"} />
    </section>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "legal/accessibility",
  });
}
