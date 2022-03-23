import React, { useState } from "react";
import { Checkbox } from "./Checkbox";
import { SafetyPopup } from "./Popups/SafetyPopup";
import styles from "./GetHelp.module.scss";

export const SafetyCheck = ({ content }) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [safety, setSafety] = useState<string>("");

  const handleChange = (e) => {
    setSafety(e.target.value);
    safety === "yes" || "unsure" ? setIsPopupOpen(true) : null;
  };

  return (
    <>
      <p className={styles.headline}>{content.physical_question}</p>
      <div style={{ gap: "5rem" }} className="pt-5 is-flex">
        <Checkbox
          type="radio"
          checked={safety === "yes"}
          label={content.yes}
          value="yes"
          onChange={handleChange}
        />
        <Checkbox
          type="radio"
          checked={safety === "no"}
          label={content.no}
          onChange={() => setSafety("no")}
        />
      </div>
      <div className="pt-4">
        <Checkbox
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
