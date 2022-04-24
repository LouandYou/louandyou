import React from "react";
import styles from "./Checkbox.module.scss";

interface Props {
  defaultChecked?: boolean;
  label: string;
  checked?: boolean;
  type: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
}

export const Checkbox = ({
  type,
  label,
  value,
  checked,
  onChange,
  onKeyDown,
  defaultChecked,
}: Props) => {
  return (
    <label onKeyDown={onKeyDown} className={styles.container}>
      <input
        defaultChecked={defaultChecked}
        type={type}
        value={value}
        checked={checked}
        onChange={onChange}
        role="checkbox"
        aria-checked={checked}
        tabIndex={-1}
      />
      {label}
      <span aria-label={label} tabIndex={1} className={styles.checkmark}></span>
    </label>
  );
};

Checkbox.displayName = "Checkbox";
