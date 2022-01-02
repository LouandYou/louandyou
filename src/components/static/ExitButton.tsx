import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "./ExitButton.module.scss";

export function ExitButton(): ReactElement {
    return (
        <Link href="https://www.google.de/" passHref>
            <button className={styles.exit_bt}>X</button>
        </Link>
    );
}
