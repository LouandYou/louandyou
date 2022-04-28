import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";
import { PageContent, Text } from "../src/components/dynamic";
import styles from "./result.module.scss";

export default function Page({ story }) {
  const { content } = story;
  return (
    <>
      <section className={`${styles.landing_page} `}>
        <Text blok={content} attribute={"section_1"} />
      </section>

      <PageContent blok={content} name={"body"} />
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "safety_tips",
  });
}
