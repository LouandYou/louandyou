import React, { ReactElement, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";

import styles from "./ExitButtonPopup.module.scss";
import Link from "next/link";
import { ExitButtonContext } from "../ExitButton/ExitButtonContext";

interface Props {
  onClose: () => void;
}

export function ExitButtonPopup({ onClose }: Props): ReactElement {
  const [togglePopup, setTogglePopup] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const { toggleIsVisible } = useContext(ExitButtonContext);

  useEffect(() => {
    Cookies.get("EXIT_BUTTON_POPUP") ? setIsVisible(false) : null;
  }, []);

  const handleClick = () => {
    onClose();
    Cookies.set("EXIT_BUTTON_POPUP", true);
  };

  const popupOne = () => {
    return (
      <div className={styles.container}>
        <p className="mb-5">
          With the <b>green button</b>, Lou&You closes immediately & opens a
          Wikipedia article –{" "}
          <b>even if you don’t have internet connection at that moment.</b>
        </p>
        <div className="is-flex is-justify-content-center">
          <button onClick={handleClick} className={`${styles.button}`}>
            okay, cool
          </button>
        </div>
        <p onClick={() => setTogglePopup(true)} className={styles.purple_p}>
          I’m safe right now, don’t show the exit button this session
        </p>
      </div>
    );
  };

  const popupTwo = () => {
    return (
      <div className={styles.container}>
        <p className="mb-5">
          If you are safe not only now but always, you can make the button
          disappear permanently in our settings.
        </p>
        <div className="is-flex is-justify-content-center">
          <Link passHref href={"/settings#section_2"}>
            <button onClick={handleClick} className={`${styles.button}`}>
              go to settings
            </button>
          </Link>
        </div>
        <p onClick={toggleIsVisible!} className={styles.purple_p}>
          no, thanks
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
