import { NextPage } from "next";

import styles from "./safety_tips.module.scss";
import { Layout } from "../src/components/static";
import { Footer } from "../src/components/static/Footer";

const safety_tips: NextPage = () => {
  return (
    <Layout>
      <section
        data-dark-bg="false"
        id="section_1"
        className={styles.landing_page}
      >
        <h1 className={styles.title}>tips for your safety</h1>
        <p className="py-5">
          Hier ein kurzer Infotext mit 5-10 Zeilen zur Einführung in das Thema.
          Consent Wann es wichtig ist, weshalb wird hier beschrieben und auch
          beantwortet, welche Infos hier noch gefunden werden können... Hier ein
          kurzer Infotext
        </p>
      </section>
      <section data-dark-bg="true" id="section_2" className={styles.color_page}>
        <h2>safety online</h2>
      </section>
      <section
        data-dark-bg="false"
        id="section_3"
        className={styles.white_page}
      >
        <b className="pb-2">how to delete your browser history</b>
        <p>
          Hier ein kurzer Infotext mit 5-10 Zeilen zur Einführung in das Thema.
          Consent Wann es wichtig ist, weshalb wird hier beschrieben und auch
          beantwortet, welche Infos hier noch gefunden
          <br />
          <br />
        </p>
        <b className="pb-2">
          how to find out if you have spyware on your phone
        </b>
        <p>
          werden können... Hier ein kurzer Infotext mit 5-10 Zeilen zur
          Einführung in das Thema. Consent Wann es wichtig ist, weshalb wird
          hier beschrieben und auch beantwortet, welche Infos hier noch gefunden
          werden können... <br />
          <br />
        </p>
        <b className="pb-2">how to report unsolicited nudes (‘dick pics’)</b>
        <p>
          Hier ein kurzer Infotext mit 5-10 Zeilen zur Einführung in das Thema.
          Consent Wann es wichtig ist, weshalb wird hier beschrieben und auch
          beantwortet, welche Infos hier noch gefunden werden können...
        </p>
      </section>
      <section data-dark-bg="true" id="section_4" className={styles.color_page}>
        <h2>safety in real life</h2>
      </section>
      <section
        data-dark-bg="false"
        id="section_5"
        className={styles.white_page}
      >
        <b className="pb-2">how you can get a restraining order</b>
        <p>
          Hier ein kurzer Infotext mit 5-10 Zeilen zur Einführung in das Thema.
          Consent Wann es wichtig ist, weshalb wird hier beschrieben und auch
          beantwortet, welche Infos hier noch gefunden
          <br />
          <br />
        </p>
        <b className="pb-2">what to do if you suspect...</b>
        <p>
          werden können... Hier ein kurzer Infotext mit 5-10 Zeilen zur
          Einführung in das Thema. Consent Wann es wichtig ist, weshalb wird
          hier beschrieben und auch beantwortet, welche Infos hier noch gefunden
          werden können... <br />
          <br />
        </p>
      </section>
      <Footer />
    </Layout>
  );
};

export default safety_tips;
