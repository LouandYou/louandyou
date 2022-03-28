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
          className="mb-2 is-flex is-justify-content-flex-end is-clickable"
          onClick={onClose}
        >
          ✕
        </b>
        {safety === "yes" && (
          <>
            <div className={`${styles.container} is-hidden-tablet`}>
              <Link href="tel:112" passHref>
                <button
                  className={`mb-3 ${styles.button} ${styles.purple_full}`}
                >
                  {content.call_ambulance}
                </button>
              </Link>
              <Link href="tel:110" passHref>
                <button
                  className={`mb-3 ${styles.button} ${styles.purple_full}`}
                >
                  {content.call_police}
                </button>
              </Link>
            </div>
            <div className={`${styles.numbers_desktop} mb-2 is-hidden-mobile`}>
              <div className="is-flex is-flex-direction-column">
                <p> {content.ambulance} </p>
                <p>{content.police}</p>
                <p>Hotline:</p>
              </div>
              <div className="is-flex is-flex-direction-column">
                <b>112</b> <b>110</b> <b>080-1234567</b>
              </div>
            </div>
          </>
        )}
        {(safety === "unsure" || safety === "yes") && (
          <>
            <div className={`${styles.container} is-hidden-tablet`}>
              <Link href="tel:08000116116" passHref>
                <button className={`mb-3 ${styles.button} ${styles.purple}`}>
                  {content.hotline}
                </button>
              </Link>
            </div>
            <p
              style={{ color: "#979797", fontSize: "var(--size-font-footer4)" }}
              className="mb-5"
            >
              {content.safety_p1}
            </p>

            <p className="mb-3">{content.safety_p3}</p>
            <Text blok={content} attribute={"safety_p2"} />
          </>
        )}
      </div>
    </div>
  );
};
