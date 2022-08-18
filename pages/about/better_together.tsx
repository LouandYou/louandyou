import { pageGetStaticProps } from "../../src/lib/pageGetStaticProps";
import { Text } from "../../src/components/dynamic";
import styles from "./About.module.scss";
import Image from "next/image";
import nessa from "../../public/team_photos/L&Y_Nessa.jpg";

export default function Page({ story }) {
  const { content } = story;

  return (
    <>
      <section className={styles.gradient_page}>
        <Text blok={content} attribute={"text1"} />
      </section>
      <section className={`${styles.white_page}`}>
        <Text blok={content} attribute={"text2"} />
      </section>
      <section className={styles.better_together}>
        <Text blok={content} attribute={"text3"} />
        <div className={styles.container}>
          <Image
            priority
            alt="Nessa"
            src={nessa}
            objectFit={"contain"}
            width={135}
            height={180}
            quality={100}
          />
          <div className="ml-5">
            {" "}
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
    slug: "about/better_together",
  });
}
