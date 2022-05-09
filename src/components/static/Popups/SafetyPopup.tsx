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
          className="is-flex is-justify-content-flex-end is-clickable mb-3"
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

            <div
              style={{ padding: 0, margin: 0 }}
              className="columns is-hidden-mobile"
            >
              <div style={{ padding: 0 }} className="column">
                <p> {content.ambulance} </p>
                <p className="py-1"> {content.police}</p>
              </div>
              <div
                style={{ padding: 0 }}
                className="column has-text-weight-bold"
              >
                <p>112</p>
                <p className="py-1">110</p>
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
            <div
              style={{ padding: 0, margin: 0 }}
              className="columns is-hidden-mobile pb-2 is-flex"
            >
              <p style={{ padding: 0 }} className="column ">
                {content.Hilfetelefon}
              </p>
              <p style={{ padding: 0 }} className="column has-text-weight-bold">
                08000 116116
              </p>
            </div>
            <p style={{ color: "#979797", marginBottom: "30px" }}>
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
