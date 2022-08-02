import { pageGetStaticProps } from "../../src/lib/pageGetStaticProps";
import { Text } from "../../src/components/dynamic";
import styles from "./About.module.scss";
import { useRouter } from "next/dist/client/router";
import paypal from "../../public/payment/paypal.svg";
import Image from "next/image";
import Head from "next/head";

export default function Page({ story, layoutStory, locale }) {
  const { content } = story;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          {locale === "en"
            ? "Support us with a Donation"
            : "Fördere uns mit einer Spende"}
          | Lou&You
        </title>
        <meta
          name="description"
          content={
            locale === "en"
              ? `We want no one, who experiences violence, to feel alone on their journey towards healing. If you want to support our work, we are thankful for any donation.`
              : `Wir möchten, dass keine Person die Gewalt erfährt, sich auf ihrem Weg alleine fühlt. Wenn du uns unterstützen möchtest, sind wir dankbar für jede Spende.`
          }
        />
      </Head>
      <section
        className={`${styles.gradient_page} is-flex-direction-column is-justify-content-space-around`}
      >
        <Text blok={content} attribute={"text1"} />
        <div className={styles.support}>
          <Text blok={layoutStory.content} attribute={"spende1"} />
          <span className="is-flex my-3">
            <p className="mr-5">{layoutStory.content.or_with}</p>

            <Image
              src={paypal}
              className="is-clickable"
              width="56"
              height="20"
              alt="paypal logo"
              onClick={() =>
                router.push(
                  "https://www.paypal.com/donate/?hosted_button_id=U3KR7UUECXXXE"
                )
              }
            />
          </span>
          <div className={styles.rechnung}>
            <Text blok={content} attribute={"spende2"} />
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "about/donate",
  });
}
