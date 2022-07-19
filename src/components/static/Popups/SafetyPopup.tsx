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
        <div className="is-flex is-justify-content-space-between">
          <h2>{content.headline}</h2>
          <b onClick={onClose}>✕</b>
        </div>
        {safety === "yes" && (
          <>
            <div className={`${styles.container} is-hidden-tablet`}>
              <Link href="tel:112" passHref>
                <button className={`mb-3 ${styles.button} ${styles.orange}`}>
                  {content.call_ambulance}
                </button>
              </Link>
              <Link href="tel:110" passHref>
                <button className={`mb-3 ${styles.button} ${styles.orange}`}>
                  {content.call_police}
                </button>
              </Link>
            </div>

            <div className="is-hidden-mobile">
              <p className="is-flex">
                {content.ambulance}:<p className={styles.orange_text}>112</p>
              </p>
              <p className="is-flex py-1">
                {content.police}: <p className={styles.orange_text}>110</p>
              </p>
            </div>
          </>
        )}
        {(safety === "unsure" || safety === "yes") && (
          <>
            <div className={`${styles.container} is-hidden-tablet`}>
              <Link href="tel:08000116116" passHref>
                <button className={` ${styles.button} ${styles.orange_border}`}>
                  {content.hotline}
                </button>
              </Link>
            </div>
            <div className="is-hidden-mobile">
              <p className="is-flex">
                {content.Hilfetelefon}:
                <p className={styles.orange_text}> 08000 116116</p>
              </p>
            </div>
            {/* <p style={{ color: "#979797", marginBottom: "30px" }}>
              {content.safety_p1}
            </p> */}

            <p style={{ marginTop: "32px" }} className="mb-2">
              {content.safety_p3}
            </p>
            <div style={{ fontWeight: 600, fontSize: "16px" }}>
              <Text blok={content} attribute={"safety_p2"} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
