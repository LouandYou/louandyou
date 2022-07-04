import { pageGetStaticProps } from "../../src/lib/pageGetStaticProps";
import { Text } from "../../src/components/dynamic";
import styles from "./About.module.scss";

export default function Page({ story }) {
  const { content } = story;

  return (
    <>
      <section className={styles.white_page}>
        <Text blok={content} attribute={"text1"} />
      </section>
      <section className={styles.gradient_page}>
        <Text blok={content} attribute={"text2"} />
      </section>
      <section className={styles.white_page}>
        <Text blok={content} attribute={"text3"} />
      </section>
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "about/join_us",
  });
}
