import React, { ReactElement, useState } from "react";
import styles from "./Dropdown.module.scss";

interface IProps {
  label?: string;
  content: string | ReactElement;
}

export function Dropdown(props: IProps): ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      {props.label === "" && (
        <p className="is-hidden-mobile">{props.content}</p>
      )}
      <div
        className={`${styles.dropdown_wrapper} ${
          props.label === "" ? "is-hidden-tablet" : ""
        }`}
      >
        <p className={isVisible ? styles.purple : ""}>{props.label}</p>
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
