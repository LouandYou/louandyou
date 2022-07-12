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
        <div className="is-hidden-mobile">{props.content}</div>
      )}
      <div
        onClick={() => setIsVisible(!isVisible)}
        className={`${styles.dropdown_wrapper} ${
          props.label === "" ? "is-hidden-tablet" : ""
        }`}
      >
        <h3 style={{ fontSize: "24px", margin: 0, color: "#5353E9" }}>
          {props.label}
        </h3>
        <button
          className={`${styles.dropdown_button} ${
            isVisible ? styles.rotate : ""
          }`}
        />
      </div>
      <div className={`${styles.content} ${isVisible ? styles.active : ""} `}>
        {props.content}
      </div>
    </>
  );
}
