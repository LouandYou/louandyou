import React, { useState } from "react";
import { Checkbox } from "./Checkbox";
import { SafetyPopup } from "./Popups/SafetyPopup";
import styles from "./GetHelp.module.scss";

export const SafetyCheck = ({ content }) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [safety, setSafety] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSafety(e.target.value);

    e.target.value !== "no" ? setIsPopupOpen(true) : "";
  };

  const handleOnKeyDown = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      const checkboxValue = e.target.previousElementSibling.defaultValue;
      setSafety(checkboxValue);
      checkboxValue !== "no" ? setIsPopupOpen(true) : "";
    }
  };

  return (
    <>
      <div className="is-flex mt-4">
        <p className={styles.number}>1</p>
        <h2 className={styles.headline}>{content.physical_question}</h2>
      </div>
      <div className={styles.checkbox_wrapper}>
        <Checkbox
          onKeyDown={handleOnKeyDown}
          type="radio"
          checked={safety === "yes"}
          label={content.yes}
          value="yes"
          onChange={handleChange}
        />

        <Checkbox
          onKeyDown={handleOnKeyDown}
          type="radio"
          checked={safety === "no"}
          value="no"
          label={content.no}
          onChange={() => setSafety("no")}
        />

        <Checkbox
          onKeyDown={handleOnKeyDown}
          type="radio"
          checked={safety === "unsure"}
          label={content.unsure}
          value="unsure"
          onChange={handleChange}
        />
      </div>
      {isPopupOpen && (
        <SafetyPopup
          content={content}
          onClose={() => setIsPopupOpen(false)}
          safety={safety}
        />
      )}
    </>
  );
};
