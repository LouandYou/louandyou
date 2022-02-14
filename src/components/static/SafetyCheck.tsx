import React, { useRef, useState } from "react";
import { Checkbox } from "./Checkbox";
import { SafetyPopup } from "./SafetyPopup";
import styles from "./SafetyCheck.module.scss";

export const SafetyCheck = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [safety, setSafety] = useState<string>("");

  const checkbox1 = useRef<HTMLInputElement>();
  const checkbox2 = useRef<HTMLInputElement>();
  const checkbox3 = useRef<HTMLInputElement>();

  const onClickOne = () => {
    checkbox3.current!.checked = false;
    checkbox2.current!.checked = false;
  };

  const onClickTwo = () => {
    checkbox3.current!.checked = false;
    checkbox1.current!.checked = false;
    setSafety(safety === "yes" ? "" : "yes");
    if (checkbox2.current!.checked) {
      toggleIsOpen();
    }
  };

  const onClickThree = () => {
    checkbox2.current!.checked = false;
    checkbox1.current!.checked = false;
    setSafety(safety === "unsure" ? "" : "unsure");
    if (checkbox3.current!.checked) {
      toggleIsOpen();
    }
  };

  const toggleIsOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <p className={styles.headline}>are you in physical danger right now?</p>
      <div className="pt-5 is-flex">
        <Checkbox
          type="checkbox"
          ref={checkbox2}
          label="yes"
          onChange={onClickTwo}
        />
        <Checkbox
          type="checkbox"
          label="no"
          ref={checkbox1}
          onChange={onClickOne}
        />
      </div>
      <div className="pt-4">
        <Checkbox
          type="checkbox"
          label="I’m not sure"
          ref={checkbox3}
          onChange={onClickThree}
        />
      </div>
      <SafetyPopup isOpen={isOpen} onClose={toggleIsOpen} safety={safety} />
    </>
  );
};
