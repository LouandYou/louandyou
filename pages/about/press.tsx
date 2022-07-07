import { pageGetStaticProps } from "../../src/lib/pageGetStaticProps";
import { Text } from "../../src/components/dynamic";
import styles from "./About.module.scss";
import Image from "next/image";
import maria from "../../public/team_photos/L&Y_Maria.jpg";

export default function Page({ story }) {
  const { content } = story;

  return (
    <>
      <section className={`${styles.better_together} is-flex-direction-column`}>
        <Text blok={content} attribute={"text1"} />
        <button className={`${styles.button} ${styles.white} my-5`}>
          <Text blok={content} attribute={"press"} />
        </button>
        <div className={styles.container}>
          <Image
            priority
            alt="Nessa"
            src={maria}
            objectFit={"contain"}
            width={135}
            height={180}
            quality={100}
          />
          <div className={`${styles.description} `}>
            <Text blok={content} attribute={"nessa"} />
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "about/press",
  });
}
