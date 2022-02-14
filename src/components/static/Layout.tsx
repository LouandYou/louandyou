import React, { ReactElement } from "react";
import Head from "next/head";
import styles from "../../../pages/index.module.scss";
import { ExitButton, Navbar } from ".";

interface Props {
  locale?: string;
  children: JSX.Element | JSX.Element[];
}

export function Layout({ locale, children }: Props): ReactElement {
  return (
    <>
      <Head>
        <title>Lou&You</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />

        {children}

        <ExitButton />
      </main>
    </>
  );
}
