import React, { ReactElement, useContext } from "react";
import styles from "./ExitButton.module.scss";
import { ExitButtonContext } from "./ExitButtonContext";

export function ExitButton(): ReactElement {
  const { isVisible } = useContext(ExitButtonContext);

  const onClick = () => {
    window.location.replace("https://www.google.de/");
  };

  return (
    <>
      {isVisible && (
        <button onClick={onClick} className={styles.exit_bt}>
          ✕
        </button>
      )}
    </>
  );
}
