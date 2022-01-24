import React, { useEffect } from "react";
import styles from "./Slider.module.scss";

interface Props {
  blackBorder: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Slider = ({ blackBorder, onChange }: Props, ref: any) => {
  return (
    <>
      <label className={styles.switch}>
        <input onChange={onChange} type="checkbox" />
        <span
          className={blackBorder ? styles.slider_black : styles.slider_white}
        ></span>
      </label>
    </>
  );
};
