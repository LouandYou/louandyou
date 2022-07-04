import { pageGetStaticProps } from "../../src/lib/pageGetStaticProps";
import { Text } from "../../src/components/dynamic";
import styles from "./About.module.scss";
import Image from "next/image";

import projecttogether from "../../public/about/projectTogether_logo.webp";
import kreativpiloten from "../../public/about/logo_kreativpiloten_.webp";
import updateDE from "../../public/about/UpdateDE_Logo.webp";

export default function Page({ story }) {
  const { content } = story;

  const team = [
    {
      name: "Chelsea",
      title: content.Former_Project_manager,
    },
    {
      name: "Clara",
      title: content.Copywriter,
    },
    {
      name: "Nessa",
      title: content.Development,
    },
    {
      name: "Maria",
      title: content.Social,
    },
    {
      name: "Em",
      title: content.Graphic,
    },
    {
      name: "Nadav",
      title: content.Developer,
    },
    {
      name: "Christoph",
      title: content.Developer,
    },
    {
      name: "Ashlen",
      title: content.Developer,
    },
    {
      name: "Isabel",
      title: content.Founder,
    },
    {
      name: "Thomas",
      title: content.Co,
    },
  ];

  return (
    <>
      <section className={styles.gradient_page}>
        <Text blok={content} attribute={"text1"} />
      </section>
      <section className={`${styles.white_page}  is-flex-direction-column`}>
        <div className={styles.team}>
          {team.map((member, index) => (
            <div key={index}>
              <Image
                src={`/team_photos/L&Y_${member.name}.jpg`}
                alt={member.name}
                width={187}
                height={245}
                priority
                quality={100}
              />
              <p>{member.name}</p>
              <p style={{ fontSize: "0.6rem" }}>{member.title}</p>
            </div>
          ))}
        </div>
        <Text blok={content} attribute={"text2"} />
        <div style={{ width: "100%" }} className={styles.grid}>
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
      </section>
      <section className={`${styles.gradient_page} is-flex-direction-column`}>
        <h1>{content.headline}</h1>
        <div
          style={{
            fontSize: "0.9rem",
          }}
          className="columns mt-5 has-text-left"
        >
          <div className="column">
            <span className={styles.timeline}>
              <p>11/2017</p>
              <p> {content.timeline1}</p>
            </span>
            <span
              style={{ marginBottom: "3.5rem" }}
              className={styles.timeline}
            >
              <p>05/2019</p>
              <p>{content.timeline2}</p>
            </span>
            <span className={styles.timeline}>
              <p>02/2020</p>
              <p>{content.timeline3}</p>
            </span>
            <span className={styles.timeline}>
              <p>08/2021</p>
              <p>{content.timeline4}</p>
            </span>
          </div>
          <div className="column">
            <span className={styles.timeline}>
              <p>12/2021</p>
              <p>{content.timeline5}</p>
            </span>
            <span
              style={{ marginBottom: "3.5rem" }}
              className={styles.timeline}
            >
              <p>04/2022</p>
              <p>{content.timeline6}</p>
            </span>
            <span className={styles.timeline}>
              <p>08/2022</p>
              <p>{content.timeline7}</p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(props) {
  return pageGetStaticProps({
    ...props,
    slug: "about/team",
  });
}
