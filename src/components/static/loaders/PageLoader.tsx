import React from "react";
import styles from "./Loaders.module.scss";

function PageLoader() {
  return (
    <div className={styles.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default PageLoader;
