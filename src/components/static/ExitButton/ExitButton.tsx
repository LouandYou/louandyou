import React, { ReactElement, useContext, useEffect, useState } from "react";
import { ExitButtonPopup } from "..";
import useScrollingBackgroundColor from "../../../utils/useScrollingBackgroundColor";
import styles from "./ExitButton.module.scss";
import { ExitButtonContext } from "./ExitButtonContext";
import Cookies from "js-cookie";

export function ExitButton({ content }): ReactElement {
  const { isVisible } = useContext(ExitButtonContext);

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(true);

  const isLandingPage = useScrollingBackgroundColor({
    elements: () =>
      Array.from(document.querySelectorAll("#section_1, #section_2")),
    offset: 70,
  });

  useEffect(() => {
    Cookies.get("EXIT_BUTTON_POPUP") ? setIsPopupOpen(false) : null;
  }, []);

  const onClick = () => {
    window.location.replace("https://www.google.de/");
  };

  return (
    <>
      {isVisible && !isLandingPage && (
        <>
          {isPopupOpen && (
            <ExitButtonPopup
              content={content}
              onClose={() => setIsPopupOpen(false)}
            />
          )}

          <button
            onClick={onClick}
            className={`${styles.exit_bt} ${isPopupOpen ? styles.pulse : ""}`}
          >
            ✕
          </button>
        </>
      )}
    </>
  );
}
