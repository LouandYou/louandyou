import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

function ExitButton(): ReactElement {
    return (
        <Link href="https://www.google.de/" passHref>
            <button className={styles.exit_bt}>X</button>
        </Link>
    );
}

export default ExitButton;
