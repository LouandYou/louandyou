/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from "react";
import styles from "./SafetyPopup.module.scss";
import Link from "next/link";
import { Text } from "../../dynamic/Text";

interface Props {
  safety: string;
  onClose: (event: React.MouseEvent<HTMLInputElement>) => void;
  content: any;
}

export const SafetyPopup = ({
  safety,
  onClose,
  content,
}: Props): ReactElement => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <b
          className="is-size-5 mb-2 is-flex is-justify-content-flex-end"
          onClick={onClose}
        >
          ✕
        </b>
        {safety === "yes" && (
          <div className={styles.container}>
            <Link href="tel:112" passHref>
              <button className={`mb-3 ${styles.button} ${styles.purple_full}`}>
                {content.ambulance}
              </button>
            </Link>
            <Link href="tel:110" passHref>
              <button className={`mb-3 ${styles.button} ${styles.purple_full}`}>
                {content.police}
              </button>
            </Link>
          </div>
        )}
        {(safety === "unsure" || safety === "yes") && (
          <>
            <div className={styles.container}>
              <Link href="tel:08000116116" passHref>
                <button className={`mb-3 ${styles.button} ${styles.purple}`}>
                  {content.hotline}
                </button>
              </Link>
              <p className="mb-5">{content.safety_p1}</p>
            </div>
            {/* <p className="mb-4">
              When you make a call, you'll be asked these questions:
            </p>
            <p>1. Where are you?</p>
            <p>2. What happened?</p>
            <p>3. Who is calling?</p>
            <p>4. Other info</p> */}
            <Text blok={content} attribute={"safety_p2"} />
          </>
        )}
      </div>
    </div>
  );
};
