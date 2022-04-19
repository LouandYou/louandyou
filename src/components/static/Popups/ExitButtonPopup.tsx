import React, { ReactElement, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

import styles from "./ExitButtonPopup.module.scss";
import Link from "next/link";
import { ExitButtonContext } from "../ExitButton/ExitButtonContext";
import { Text } from "../../dynamic";

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

  const popupOne = () => {
    return (
      <div className={styles.container}>
        <div className="mb-4">
          <Text blok={content} attribute="Exit_Button_Popup1_Paragraph" />
        </div>
        <div className="is-flex is-justify-content-center">
          <button onClick={handleClickOne} className={`${styles.button}`}>
            {content.Exit_Button_Popup1_Button}
          </button>
        </div>
        <p
          tabIndex={0}
          onKeyDown={({ code }) =>
            code === "Enter" ? setTogglePopup(true) : ""
          }
          onClick={() => setTogglePopup(true)}
          className={styles.purple_p}
        >
          {content.Exit_Button_Popup2_Link}
        </p>
      </div>
    );
  };

  const popupTwo = () => {
    return (
      <div className={styles.container}>
        <p className="mb-5">{content.Exit_Button_Popup2_Paragraph}</p>
        <div className="is-flex is-justify-content-center">
          <button onClick={handleClickOne} className={`${styles.button}`}>
            <Link passHref href={"/settings#section_2"}>
              {content.Exit_Button_Popup2_Button}
            </Link>
          </button>
        </div>
        <p
          tabIndex={0}
          onKeyDown={({ code }) => (code === "Enter" ? handleClickTwo() : "")}
          onClick={handleClickTwo}
          className={styles.purple_p}
        >
          {content.Exit_Button_Popup2_Link}
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
