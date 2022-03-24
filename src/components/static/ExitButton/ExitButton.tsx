import React, { ReactElement, useContext, useEffect, useState } from "react";
import { ExitButtonPopup } from "..";
import useScrollingBackgroundColor from "../../../utils/useScrollingBackgroundColor";
import styles from "./ExitButton.module.scss";
import { ExitButtonContext } from "./ExitButtonContext";
import Cookies from "js-cookie";
import { useRouter } from "next/dist/client/router";
import { Simulate } from "react-dom/test-utils";
import load = Simulate.load;
import exit from "../../../../pages/api/exit-preview";

let paths: string[] = [];
let exiting = false;

export function ExitButton({ content }): ReactElement {
  const { isVisible } = useContext(ExitButtonContext);
  let router = useRouter();
  const pathname = router.pathname;
  const stepToBeginning = () => {
    if (paths.length === 1) {
      window.location.replace("https://www.google.de/");
      return;
    }
    paths.pop();
    router.back();
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
    stepToBeginning();
  };

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(true);


  const isLandingPage = useScrollingBackgroundColor({
    elements: () =>
      Array.from(document.querySelectorAll("#section_1, #section_2")),
    offset: 70
  });

  useEffect(() => {
    Cookies.get("EXIT_BUTTON_POPUP") ? setIsPopupOpen(false) : null;
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
            ✕
          </button>
        </>
      )}
    </>
  );
}
