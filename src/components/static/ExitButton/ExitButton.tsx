import React, { ReactElement, useContext, useEffect, useState } from "react";
import { ExitButtonPopup } from "..";
import useScrollingBackgroundColor from "../../../utils/useScrollingBackgroundColor";
import styles from "./ExitButton.module.scss";
import { ExitButtonContext } from "./ExitButtonContext";
import Cookies from "js-cookie";
import { useRouter } from "next/dist/client/router";
import { COOKIES } from "../../../config";

let paths: string[] = [];
let exiting = false;

function exitPage() {
  window.location.replace("https://www.google.de/");
}

export function ExitButton({ content, locale }): ReactElement {
  const { isVisible } = useContext(ExitButtonContext);
  let router = useRouter();
  const pathname = router.pathname;
  const stepToBeginning = () => {
    if (paths.length === 1) {
      exitPage();
      return;
    }
    paths.pop();
    history.back();
  };

  useEffect(() => {
    if (exiting) {
      stepToBeginning();
      return;
    }

    if (pathname.length === 0 || pathname !== paths[paths.length - 1]) {
      paths.push(pathname);
    }
  }, [pathname]);

  const onClick = () => {
    exiting = true;

    // If the history is too long recursing backwards could take too much time
    // so exiting immediately is safer
    if (paths.length > 12) {
      exitPage();
      return;
    }
    stepToBeginning();
  };

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(true);

  const isLandingPage = useScrollingBackgroundColor({
    elements: () =>
      Array.from(document.querySelectorAll("#section_1, #section_2")),
    offset: 70,
  });

  useEffect(() => {
    Cookies.get(COOKIES.EXIT_BUTTON_POPUP) ? setIsPopupOpen(false) : null;
  }, []);

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
            {/* <FontAwesomeIcon icon={faXmark} width={13} height={13} /> */}
            <img
              src="/x.svg"
              alt={locale === "en" ? "exit button" : "Exit Knopf"}
            />
          </button>
        </>
      )}
    </>
  );
}
