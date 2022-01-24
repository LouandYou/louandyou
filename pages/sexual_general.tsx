import { NextPage } from "next";
import { Layout } from "../src/components/static";

import styles from "./index.module.scss";

const sexual_general: NextPage = () => {
  return (
    <Layout>
      <div className={styles.color_page}>
        <h1> Sexual Violance</h1>
      </div>
    </Layout>
  );
};

export default sexual_general;
