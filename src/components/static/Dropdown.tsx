import React, { ReactElement, useState } from "react";
import styles from "./Dropdown.module.scss";

interface IProps {
  label: string;
  content: string;
  id: string;
}

export function Dropdown(props: IProps): ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <section className={styles.section} data-dark-bg="false" id={props.id}>
      <div className={styles.dropdown_wrapper}>
        <p className={styles.label}>{props.label}</p>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className={styles.dropdown_button}
        ></button>
      </div>
      {isVisible && <div className={styles.content}>{props.content}</div>}
    </section>
  );
}
