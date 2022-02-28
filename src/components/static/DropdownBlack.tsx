import React, { ReactElement, useState } from "react";
import styles from "./Dropdown.module.scss";

interface IProps {
  label?: string;
  content: string;
}

export function DropdownBlack(props: IProps): ReactElement {
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
    <>
      <div className={styles.dropdown_wrapper}>
        <p>{props.label}</p>
        <button
          onClick={handleClick}
          className={`${styles.dropdown_button} ${rotate ? styles.rotate : ""}`}
        ></button>
      </div>
      {isVisible && <div className={styles.content}>{props.content}</div>}
    </>
  );
}
