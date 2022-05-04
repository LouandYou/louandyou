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
        className={`${styles.dropdown_wrapper} ${
          props.label === "" ? "is-hidden-tablet" : ""
        }`}
      >
        <p
          style={{ fontSize: "24px", margin: 0 }}
          className={isVisible ? styles.purple : ""}
        >
          {props.label}
        </p>
        <button
          onClick={() => setIsVisible(!isVisible)}
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
