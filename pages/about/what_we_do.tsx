import { pageGetStaticProps } from "../../src/lib/pageGetStaticProps";
import { Text } from "../../src/components/dynamic";
import styles from "./About.module.scss";
import projecttogether from "../../public/about/projectTogether_logo.webp";
import kreativpiloten from "../../public/about/logo_kreativpiloten_.webp";
import updateDE from "../../public/about/UpdateDE_Logo.webp";
import Image from "next/image";
import { LinkButton } from "../../src/components/static";
import Head from "next/head";

export default function Page({ story, locale }) {
  const { content } = story;

  return (
    <>
      <Head>
        <title>
          {locale === "en" ? "What we do" : "Was wir tun"} | Lou&You
        </title>
        <meta
          name="description"
          content={
            locale === "en"
              ? "We are a non-profit start-up from Berlin and our web-app Lou is the first digital companion to help create a better future for survivors."
              : "Wir sind ein gemeinnütziges Start-up aus Berlin und unsere Web-App Lou die erste digitale Begleitung, die eine bessere Zukunft für Betroffene ermöglicht."
          }
        />
      </Head>
      <section className={styles.white_page}>
        <Text blok={content} attribute={"text1"} />

        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          style={{ width: "350px" }}
          alt={
            locale === "en"
              ? "Lou&You webapp opened on a smartphone"
              : "Lou&You Web-App geöffnet auf einem Smartphone"
          }
          src={"/about/Flat_Home_EN.webp"}
        />
      </section>
      <section className={styles.gradient_page}>
        <div>
          <Text blok={content} attribute={"text2"} />
          <div
            className={
              "mt-5 is-flex-tablet is-justify-content-space-between has-text-centered"
            }
          >
            <LinkButton variant={"purple"} href={"/about/meet_lou"}>
              {content.button1}
            </LinkButton>
            <LinkButton variant={"purple"} href={"/about/impact"}>
              {content.button2}
            </LinkButton>
            <LinkButton variant={"purple"} href={"/about/donate"}>
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
                alt={"Kultur und Kreativpiloten Deutschland"}
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
                alt={"Update Deutschland"}
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
                alt={"Project Together"}
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
