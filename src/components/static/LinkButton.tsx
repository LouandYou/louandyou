import Link from "next/link";
import React from "react";
import styles from "./Button.module.scss";
import { LinkProps } from "next/dist/client/link";

type Props = {
  variant: "purple" | "white" | "purple_full" | "green";
} & React.PropsWithChildren<LinkProps>

export const LinkButton = ({ children, variant, ...props }: Props) => <Link passHref {...props}>
  <button className={`${styles.button} ${styles[variant]}`}>{children}</button>
</Link>;
