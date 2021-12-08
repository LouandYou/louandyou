import { NextPage } from "next";
import Image from "next/image";
import and_logo from "../public/and_logo.png";
import styles from "../styles/Home.module.scss";

const domestic_general: NextPage = () => {
    return (
        <>
            <Image src={and_logo} width="110" height="110" alt="logo" />
            <h1 className={styles.title}>Domestic Violence</h1>
        </>
    );
};

export default domestic_general;
