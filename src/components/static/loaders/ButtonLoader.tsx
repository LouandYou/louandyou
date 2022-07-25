import React from "react";
import styles from "./Loaders.module.scss";

function ButtonLoader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
    </div>
  );
}

export default ButtonLoader;
