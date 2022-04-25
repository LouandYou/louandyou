import React from "react";
import styles from "./Slider.module.scss";

interface Props {
  blackBorder: boolean;
  ariaLabel: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
}

export const Slider = ({
  blackBorder,
  checked,
  ariaLabel,
  onChange,
  onKeyDown,
}: Props) => {
  return (
    <>
      <label onKeyDown={onKeyDown} className={styles.switch}>
        <input onChange={onChange} checked={checked} type="checkbox" />
        <span
          aria-label={ariaLabel}
          tabIndex={0}
          className={blackBorder ? styles.slider_black : styles.slider_white}
        ></span>
      </label>
    </>
  );
};
