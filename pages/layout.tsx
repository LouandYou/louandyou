import { Layout, Footer } from "../src/components/static";

import styles from "./result.module.scss";
import { useStoryblok } from "../src/lib/storyblok";
import { pageGetStaticProps } from "../src/lib/pageGetStaticProps";

export default function LayoutPage({ layoutStory, preview, locale }) {
  const { content } = useStoryblok(layoutStory, preview, locale);

  return (
    <Layout content={content}>
      <section
        data-dark-bg="true"
        id="section_1"
        className={styles.landing_page}
      >
        <h1 className={styles.main_title}>Layout test page</h1>
        <h2>(only visible on dev)</h2>
      </section>
      {/* <Footer /> */}
    </Layout>
  );
}

export async function getStaticProps(props) {
  return {
    ...(await pageGetStaticProps({
      ...props,
      // TODO replace with content
      slug: "home",
    })),
    // Hide this page in production
    notFound: process.env.NODE_ENV === "production",
  };
}
