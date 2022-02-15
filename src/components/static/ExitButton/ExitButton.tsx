import React, { ReactElement, useContext } from "react";
import useScrollingBackgroundColor from "../../../utils/useScrollingBackgroundColor";
import styles from "./ExitButton.module.scss";
import { ExitButtonContext } from "./ExitButtonContext";

export function ExitButton(): ReactElement {
  const { isVisible } = useContext(ExitButtonContext);

  const isLandingPage = useScrollingBackgroundColor({
    elements: () =>
      Array.from(document.querySelectorAll("#section_1, #section_2")),
    offset: 70,
  });

  const onClick = () => {
    window.location.replace("https://www.google.de/");
  };

  return (
    <>
      {isVisible && !isLandingPage && (
        <button onClick={onClick} className={styles.exit_bt}>
          ✕
        </button>
      )}
    </>
  );
}
