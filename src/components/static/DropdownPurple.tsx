import React, { ReactElement, useState } from "react";
import styles from "./Dropdown.module.scss";

interface IProps {
  label: string;
  content: string;
}

export function DropdownPurple(props: IProps): ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [rotate, setRotate] = useState<boolean>(false);

  const handleClick = () => {
    if (rotate) {
      setRotate(false);
      setIsVisible(!isVisible);
    } else {
      setIsVisible(!isVisible);
      setRotate(true);
    }
  };

  return (
    <section className={styles.section_purple}>
      <div className={styles.dropdown_wrapper_purple}>
        <p className={styles.label_purple}>{props.label}</p>
        <button
          onClick={handleClick}
          className={`${styles.dropdown_button_purple} ${
            rotate ? styles.rotate : ""
          }`}
        ></button>
      </div>
      {isVisible && (
        <div className={styles.content_purple}>{props.content}</div>
      )}
    </section>
  );
}
