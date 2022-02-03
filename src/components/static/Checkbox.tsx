import React from "react";
import styles from "./Checkbox.module.scss";

interface Props {
  defaultChecked?: boolean;
  label: string;
  checked?: boolean;
  type: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = React.forwardRef(
  (
    { type, label, value, checked, onChange, defaultChecked }: Props,
    ref: any
  ) => {
    return (
      <label className={styles.container}>
        <input
          defaultChecked={defaultChecked}
          type={type}
          value={value}
          ref={ref}
          checked={checked}
          onChange={onChange}
        />
        {label}
        <span className={styles.checkmark}></span>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
