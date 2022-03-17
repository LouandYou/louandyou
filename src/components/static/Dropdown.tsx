import React, { ReactElement, useState } from "react";
import styles from "./Dropdown.module.scss";

interface IProps {
  label?: string;
  content: string;
}

export function Dropdown(props: IProps): ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <div className={styles.dropdown_wrapper}>
        <p>{props.label}</p>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className={`${styles.dropdown_button} ${
            isVisible ? styles.rotate : ""
          }`}
        ></button>
      </div>
      <div className={`${styles.content} ${isVisible ? styles.active : ""}`}>
        {props.content}
      </div>
    </>
  );
}
