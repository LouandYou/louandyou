/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement, useEffect } from "react";
import Modal from "react-modal";
import styles from "./SafetyPopup.module.scss";
import Link from "next/link";

interface Props {
  safety: string;
  onClose: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export const SafetyPopup = ({ safety, onClose }: Props): ReactElement => {
  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

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
                call the ambulance
              </button>
            </Link>
            <Link href="tel:110" passHref>
              <button className={`mb-3 ${styles.button} ${styles.purple_full}`}>
                call the police
              </button>
            </Link>
          </div>
        )}
        {(safety === "unsure" || safety === "yes") && (
          <>
            <div className={styles.container}>
              <Link href="tel:08000116116" passHref>
                <button className={`mb-3 ${styles.button} ${styles.purple}`}>
                  call a support hotline
                </button>
              </Link>
              <p className="mb-5">
                If you’d rather like someone to talk to, you can call a support
                hotline for free
              </p>
            </div>
            <p className="mb-4">
              When you make a call, you'll be asked these questions:
            </p>
            <p>1. Where are you?</p>
            <p>2. What happened?</p>
            <p>3. Who is calling?</p>
            <p>4. Other info</p>
          </>
        )}
      </div>
    </div>
  );
};
