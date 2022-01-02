import React from "react";
import styles from "./Slider.module.scss";

interface Props {
  cont: string;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Slider = React.forwardRef(
  ({ cont, label, onChange }: Props, ref: any) => {
    return (
      <div className="block py-1">
        {/* @ts-ignore */}
        <div cont={cont} className={styles.switch_button}>
          <input
            onChange={onChange}
            ref={ref}
            className={styles.switch_button_checkbox}
            type="checkbox"
          />
          <label className={styles.switch_button_label} htmlFor="">
            <span className={styles.switch_button_label_span}>{label}</span>
          </label>
        </div>
      </div>
    );
  }
);

Slider.displayName = "Slider";
