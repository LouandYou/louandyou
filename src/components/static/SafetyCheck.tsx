import React, { useRef, useState } from "react";
import { Checkbox } from "./Checkbox";
import { SafetyPopup } from "./Popups/SafetyPopup";
import styles from "./SafetyCheck.module.scss";

export const SafetyCheck = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [safety, setSafety] = useState<string>("");

  const handleChange = (e) => {
    setSafety(e.target.value);
    safety === "yes" || "unsure" ? setIsPopupOpen(true) : null;
  };

  return (
    <>
      <p className={styles.headline}>are you in physical danger right now?</p>
      <div className="pt-5 is-flex">
        <Checkbox
          type="radio"
          checked={safety === "yes"}
          label="yes"
          value="yes"
          onChange={handleChange}
        />
        <Checkbox
          type="radio"
          checked={safety === "no"}
          label="no"
          onChange={() => setSafety("no")}
        />
      </div>
      <div className="pt-4">
        <Checkbox
          type="radio"
          checked={safety === "unsure"}
          label="I’m not sure"
          value="unsure"
          onChange={handleChange}
        />
      </div>
      {isPopupOpen && (
        <SafetyPopup onClose={() => setIsPopupOpen(false)} safety={safety} />
      )}
    </>
  );
};
