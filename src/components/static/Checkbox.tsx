import React from "react";
import styles from "./Checkbox.module.scss";

interface Props {
  className?: string;
  label: string;
  value?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = React.forwardRef(
  ({ className, label, value, onChange }: Props, ref: any) => {
    return (
      <label className={styles.container}>
        <input type="checkbox" ref={ref} checked={value} onChange={onChange} />
        {label}
        <span className={styles.checkmark}></span>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
