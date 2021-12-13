import React from "react";
import styles from "../styles/Slider.module.scss";

interface Props {
  cont: string;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider = React.forwardRef(
  ({ cont, label, onChange }: Props, ref: any) => {
    return (
      //@ts-ignore
      <div cont={cont} className={styles.switch_button}>
        <input
          onChange={onChange}
          ref={ref}
          className={styles.switch_button_checkbox}
          type="checkbox"
        ></input>
        <label className={styles.switch_button_label} htmlFor="">
          <span className={styles.switch_button_label_span}>{label}</span>
        </label>
      </div>
    );
  }
);

Slider.displayName = "Slider";
export default Slider;
