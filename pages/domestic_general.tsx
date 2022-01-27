import { NextPage } from "next";
import Link from "next/link";
import { DropdownBlack, Layout } from "../src/components/static";
import { Footer } from "../src/components/static/Footer";

import styles from "./general.module.scss";

const domestic_general: NextPage = () => {
  return (
    <Layout>
      <section
        data-dark-bg="true"
        id="section_1"
        className={styles.landing_page}
      >
        <h1 className={styles.main_title}>
          what’s good to know about sexual violence
        </h1>
      </section>
      <section
        data-dark-bg="false"
        id="section_2"
        className={styles.white_page}
      >
        <p className={`${styles.description} ${styles.green}`}>
          knowing if you or a loved one is experiencing violence in their home
          or relationship isn’t as easy as it might seem.
          <br />
          <br />
          while some cases are obvious, you’ll most likely have more questions
          than answers in the beginning. <br />
          <br />
          so to find out, here’s a little guide with what’s important to know
          about.{" "}
        </p>
      </section>
      <section data-dark-bg="true" id="section_3" className={styles.color_page}>
        <h2 className={styles.subtitle}>was ist sexualisierte Gewalt?</h2>
      </section>
      <section
        data-dark-bg="false"
        id="section_4"
        className={styles.white_page}
      >
        <DropdownBlack
          label={
            "A sentence describing what kind of options there are and for whom etc."
          }
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          }
        />
      </section>

      <section data-dark-bg="true" id="section_5" className={styles.color_page}>
        <h2 className={styles.subtitle}>welche Formen gibt es?</h2>
      </section>
      <section
        data-dark-bg="false"
        id="section_6"
        className={styles.white_page}
      >
        <DropdownBlack
          label={
            "A sentence describing what kind of options there are and for whom etc. A sentence describing what kind of options there are and for whom etc."
          }
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          }
        />
      </section>
      <section data-dark-bg="true" id="section_7" className={styles.color_page}>
        <h2 className={styles.subtitle}>was sollte ich jetzt tun?</h2>
      </section>
      <section
        data-dark-bg="false"
        id="section_8"
        className={styles.white_page}
      >
        <DropdownBlack
          label={
            "A sentence describing what kind of options there are and for whom etc. A sentence describing what kind of options there are and for whom etc."
          }
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          }
        />
      </section>
      <section data-dark-bg="true" id="section_9" className={styles.color_page}>
        <h2 className={styles.subtitle}>welche Rechte habe ich?</h2>
      </section>
      <section
        data-dark-bg="false"
        id="section_10"
        className={styles.white_page}
      >
        <DropdownBlack
          label={
            "A sentence describing what kind of options there are and for whom etc. A sentence describing what kind of options there are and for whom etc."
          }
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          }
        />
      </section>
      <section
        data-dark-bg="true"
        id="section_11"
        className={styles.color_page}
      >
        <h2 className={styles.subtitle}>wie kann ich mir selber helfen?</h2>
      </section>
      <section
        data-dark-bg="false"
        id="section_12"
        className={styles.white_page}
      >
        <DropdownBlack
          label={
            "A sentence describing what kind of options there are and for whom etc. A sentence describing what kind of options there are and for whom etc."
          }
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          }
        />
      </section>
      <section
        data-dark-bg="true"
        id="section_13"
        className={styles.color_page_last}
      >
        <h1 className={styles.subtitle}>
          would you like more information related to your personal situation?
        </h1>
        <button className={styles.white_btn}>
          <Link href="/">yes, that might help</Link>
        </button>
      </section>
      <Footer />
    </Layout>
  );
};

export default domestic_general;
