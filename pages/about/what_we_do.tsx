import { pageGetStaticProps } from "../../src/lib/pageGetStaticProps";
import { Text } from "../../src/components/dynamic";
import styles from "./About.module.scss";
import iphone from "../../public/about/Flat_Home_EN.webp";
import projecttogether from "../../public/about/projectTogether_logo.webp";
import kreativpiloten from "../../public/about/logo_kreativpiloten_.webp";
import updateDE from "../../public/about/UpdateDE_Logo.webp";
import Image from "next/image";
import { LinkButton } from "../../src/components/static";

export default function Page({ story }) {
  const { content } = story;

  return (
    <>
      <section className={styles.white_page}>
        <Text blok={content} attribute={"text1"} />
        <div className={styles.container}>
          <Image
            src={iphone}
            alt={"Lou&You"}
            layout={"fill"}
            objectFit={"contain"}
            priority
            quality={100}
          />
        </div>
      </section>
      <section className={styles.gradient_page}>
        <div>
          <Text blok={content} attribute={"text2"} />
          <div className={"mt-5 is-mobile-flex"}>
            <LinkButton variant={"white"} href={"/about/meet_lou"}>
              {content.button1}
            </LinkButton>
            <LinkButton variant={"white"} href={"about/impact"}>
              {content.button2}
            </LinkButton>
            <LinkButton variant={"white"} href={"about/donate"}>
              {content.button3}
            </LinkButton>
          </div>
        </div>
      </section>
      <section className={styles.white_page}>
        <div>
          <Text blok={content} attribute={"text3"} />
          <div className={styles.grid}>
            <a
              href="https://kultur-kreativpiloten.de/"
              rel="noreferrer"
              target={"_blank"}
            >
              <Image
                src={kreativpiloten}
                alt={"Lou&You"}
                width="210%"
                height="100%"
                objectFit={"contain"}
                priority
                quality={100}
              />
            </a>
            <a
              href="https://updatedeutschland.org/"
              rel="noreferrer"
              target={"_blank"}
            >
              <Image
                src={updateDE}
                alt={"Lou&You"}
                width="210%"
                height="100%"
                objectFit={"contain"}
                priority
                quality={100}
              />
            </a>
            <a
              href="https://projecttogether.org/"
              rel="noreferrer"
              target={"_blank"}
            >
              <Image
                src={projecttogether}
                alt={"Lou&You"}
                width="210%"
                height="100%"
                objectFit={"contain"}
                priority
                quality={100}
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "about/what_we_do",
  });
}
