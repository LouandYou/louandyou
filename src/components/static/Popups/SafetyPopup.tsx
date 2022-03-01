import React, { ReactElement, useEffect } from "react";
import Modal from "react-modal";
import styles from "./SafetyPopup.module.scss";
import Link from "next/link";
import { DropdownBlack } from "../DropdownBlack";

interface Props {
  isOpen: boolean;
  safety: string;
  onClose: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export const SafetyPopup = ({
  isOpen,
  safety,
  onClose,
}: Props): ReactElement => {
  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

  return (
    <Modal
      style={{
        overlay: {
          zIndex: 2,
        },
        content: {
          boxShadow: "2px 2px 2px #8D8BF4",
          borderRadius: "35px",
          inset: "20px",
          padding: "38px",
        },
      }}
      isOpen={isOpen}
    >
      <div className={styles.container}>
        <div className={styles.close_btn} onClick={onClose}>
          ✕
        </div>
        {safety === "yes" && (
          <>
            <Link href="tel:112" passHref>
              <button className={styles.call_btn}>call the ambulance</button>
            </Link>
            <p className="pt-3 pb-5">
              if you’re in physical danger and hurt, an ambulance will treat you
              for free
            </p>
            <Link href="tel:110" passHref>
              <button className={styles.call_btn}>call the police</button>
            </Link>
            <p className="mt-3">what to say:</p>
            <ol className={styles.list}>
              <li>your location</li>
              <li>what has happend</li>
              <li>other infos</li>
            </ol>
            <DropdownBlack label={""} content={""} />
          </>
        )}
        {(safety === "unsure" || safety === "yes") && (
          <>
            <Link href="tel:08000116116" passHref>
              <button className={styles.call_btn}>
                call a support hotline
              </button>
            </Link>
            <p className="pt-3 pb-5">
              If you’d like someone to talk to, you can call a support hotline
              for free
            </p>
            <div className={styles.colored_paragraph}>
              <b>Can’t talk right now?</b>
              <Link href={"/"}>
                Here’s what to do if you need help but can’t speak right now
              </Link>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};
