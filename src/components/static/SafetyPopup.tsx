import React, { ReactElement } from "react";
import Modal from "react-modal";
import styles from "./SafetyPopup.module.scss";
import phone from "../../../public/phone.png";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <Modal isOpen={isOpen}>
      <div className={styles.popup}>
        <div className={styles.close_bt} onClick={onClose}>
          <p>X</p>
        </div>
        {safety === "yes" && (
          <>
            <p className="block">
              Do you need an ambulance? (free in Germany){" "}
            </p>
            <div className={styles.call_bt}>
              <Link href="tel:112" passHref>
                <Image src={phone} alt="phone" width="25" height="25" />
              </Link>
            </div>
            <p className="block">Do you need police?</p>
            <div className={styles.call_bt}>
              <Link href="tel:110" passHref>
                <Image src={phone} alt="phone" width="25" height="25" />
              </Link>
            </div>
            <p className="block is-size-7">
              If you don’t know what to say, tell them your location first and
              then what has happened. More about that here
            </p>
          </>
        )}
        {(safety === "unsure" || safety === "yes") && (
          <>
            <p className="block is-size-7">
              If you’d like to talk to somebody or just not be alone right now,
              you can call the national helpline.
            </p>
            <div className={styles.call_bt}>
              <Link href="tel:08000116116" passHref>
                <Image src={phone} alt="phone" width="25" height="25" />
              </Link>
            </div>
            <p className="block is-size-7">
              Here’s what to do if you need help but can’t speak on the phone
              right now
            </p>
          </>
        )}
      </div>
    </Modal>
  );
};
