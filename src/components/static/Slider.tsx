import React from "react";
import styles from "./Slider.module.scss";

interface Props {
  blackBorder: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Slider = ({ blackBorder, checked, onChange }: Props) => {
  return (
    <>
      <label className={styles.switch}>
        <input onChange={onChange} checked={checked} type="checkbox" />
        <span
          className={blackBorder ? styles.slider_black : styles.slider_white}
        ></span>
      </label>
    </>
  );
};
