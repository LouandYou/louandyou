import React, { ReactElement, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

import styles from "./ExitButtonPopup.module.scss";
import { ExitButtonContext } from "../ExitButton/ExitButtonContext";
import { Text } from "../../dynamic";
import { COOKIES } from "../../../config";
import { useRouter } from "next/router";

interface Props {
  onClose: () => void;
  content: any;
}

export function ExitButtonPopup({ onClose, content }: Props): ReactElement {
  const [togglePopup, setTogglePopup] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const router = useRouter();
  const { toggleIsVisible } = useContext(ExitButtonContext);

  useEffect(() => {
    Cookies.get(COOKIES.EXIT_BUTTON_POPUP) ? null : setIsVisible(true);
  }, []);

  const handleClickOne = () => {
    // Closes first popup and set a cookie that the pop was handled
    onClose();
    Cookies.set(COOKIES.EXIT_BUTTON_POPUP, true);
  };

  const handleClickTwo = () => {
    // Hide exit button, set a cookie that the pop was handled and save cookie to hide exit button
    toggleIsVisible!();
    Cookies.set(COOKIES.EXIT_BUTTON_POPUP, true);
    !Cookies.get(COOKIES.DISABLE_COOKIES) &&
      Cookies.set(COOKIES.HIDE_EXIT_BUTTON, true);
  };

  const handleClickThree = () => {
    onClose();
    Cookies.set(COOKIES.EXIT_BUTTON_POPUP, true);
    router.push("/settings#section_2");
  };

  const popupOne = () => {
    return (
      <div className={styles.container}>
        <h2>Exit Button</h2>
        <Text blok={content} attribute="Exit_Button_Popup1_Paragraph" />

        <div className="is-flex is-justify-content-center">
          <button
            onClick={handleClickOne}
            className={`${styles.button} ${styles.purple}`}
          >
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
          {content.Exit_Button_Popup1_Link}
        </p>
      </div>
    );
  };

  const popupTwo = () => {
    return (
      <div className={styles.container}>
        <p>{content.Exit_Button_Popup2_Paragraph}</p>
        <div className="is-flex is-justify-content-center">
          <button
            onClick={handleClickThree}
            className={`${styles.button} ${styles.purple}`}
          >
            {content.Exit_Button_Popup2_Button}
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
