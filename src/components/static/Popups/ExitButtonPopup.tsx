import React, { ReactElement, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";

import styles from "./ExitButtonPopup.module.scss";
import Link from "next/link";
import { ExitButtonContext } from "../ExitButton/ExitButtonContext";
import { PageContent } from "../../dynamic";

interface Props {
  onClose: () => void;
  content: any;
}

export function ExitButtonPopup({ onClose, content }: Props): ReactElement {
  const [togglePopup, setTogglePopup] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const { toggleIsVisible } = useContext(ExitButtonContext);

  useEffect(() => {
    Cookies.get("EXIT_BUTTON_POPUP") ? setIsVisible(false) : null;
  }, []);

  const handleClickOne = () => {
    onClose();
    Cookies.set("EXIT_BUTTON_POPUP", true);
  };

  const handleClickTwo = () => {
    toggleIsVisible!();
    Cookies.set("EXIT_BUTTON_POPUP", true);
  };
  console.log("content", content);

  const popupOne = () => {
    return (
      <div className={styles.container}>
        <p className="mb-5">
          <PageContent blok={content} name="exitButton_popup1_paragraph" />
        </p>
        <div className="is-flex is-justify-content-center">
          <button onClick={handleClickOne} className={`${styles.button}`}>
            okay, cool
          </button>
        </div>
        <p onClick={() => setTogglePopup(true)} className={styles.purple_p}>
          {content.exitButton_popup1_link}
        </p>
      </div>
    );
  };

  const popupTwo = () => {
    return (
      <div className={styles.container}>
        <p className="mb-5">{content.exitButton_popup2_paragraph}</p>
        <div className="is-flex is-justify-content-center">
          <Link passHref href={"/settings#section_2"}>
            <button onClick={handleClickOne} className={`${styles.button}`}>
              ok, cool
            </button>
          </Link>
        </div>
        <p onClick={handleClickTwo} className={styles.purple_p}>
          {content.exitButton_popup2_link}
        </p>
      </div>
    );
  };

  return (
    <>
      {isVisible && (
        <div className={styles.overlay}>
          {!togglePopup ? popupOne() : popupTwo()}
        </div>
      )}
    </>
  );
}
