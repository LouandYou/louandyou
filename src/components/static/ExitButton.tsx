import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "./ExitButton.module.scss";

export function ExitButton(): ReactElement {
  const onClick = () => {
    window.location.replace("https://www.google.de/");
  };

  return (
    <button onClick={onClick} className={styles.exit_bt}>
      ✕
    </button>
  );
}
