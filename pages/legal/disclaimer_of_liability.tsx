import { pageGetStaticProps } from "../../src/lib/pageGetStaticProps";
import { Text } from "../../src/components/dynamic";
import styles from "./Legal.module.scss";

export default function Page({ story }) {
  const { content } = story;
  return (
    <section className={`${styles.legal} content`}>
      <Text blok={content} attribute={"body1"} />
    </section>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "legal/disclaimer_of_liability",
  });
}
