import React, { ReactElement, useEffect, useState } from "react";
import { Checkbox } from "./Checkbox";
import styles from "./GetHelp.module.scss";
import Link from "next/link";
import { SafetyCheck } from "./SafetyCheck";

export function GetHelp({ content }): ReactElement {
  const [violanceType, setViolanceType] = useState<string>("");
  const [isLongAgo, setIsLongAgo] = useState<boolean | null>(null);
  const [isEmptyForm, setIsEmptyForm] = useState<boolean>(true);

  const getHref = () => {
    if (violanceType === "sexual" && !isLongAgo) {
      return "/result_1";
    } else if (violanceType === "sexual" && isLongAgo) {
      return "/result_2";
    } else if (violanceType !== "sexual" && !isLongAgo) {
      return "/result_3";
    }
    return "/result_4";
  };

  const handleOnKeyDown1 = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      const checkboxValue = e.target.previousElementSibling.defaultValue;

      setViolanceType(checkboxValue);
    }
  };

  const handleOnKeyDown2 = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      const checkboxValue = e.target.previousElementSibling.defaultValue;
      setIsLongAgo(checkboxValue === "true");
    }
  };

  // const canSubmit = () => violanceType !== undefined && isLongAgo !== undefined;

  useEffect(() => {
    if (violanceType !== "" && isLongAgo !== null) {
      setIsEmptyForm(false);
    }
  }, [violanceType, isLongAgo]);

  return (
    <>
      <SafetyCheck content={content} />
      <div className="is-flex mt-4">
        <p className={styles.number}>2</p>
        <h2 className={styles.headline}>{content.violence_question}</h2>
      </div>
      <div className={styles.checkbox_wrapper}>
        <Checkbox
          type="radio"
          label={content.sexual}
          value="sexual"
          checked={violanceType === "sexual"}
          onChange={() => setViolanceType("sexual")}
          onKeyDown={handleOnKeyDown1}
        />
        <Checkbox
          type="radio"
          label={content.domestic}
          value="domestic"
          checked={violanceType === "domestic"}
          onChange={() => setViolanceType("domestic")}
          onKeyDown={handleOnKeyDown1}
        />
        <Checkbox
          type="radio"
          label={content.both}
          value="both"
          checked={violanceType === "both"}
          onChange={() => setViolanceType("both")}
          onKeyDown={handleOnKeyDown1}
        />
        <Checkbox
          type="radio"
          label={content.not_say}
          value="not sure"
          checked={violanceType === "not sure"}
          onChange={() => setViolanceType("not sure")}
          onKeyDown={handleOnKeyDown1}
        />
      </div>
      <div className="is-flex mt-4">
        <p className={styles.number}>3</p>
        <h2 style={{ paddingTop: "10px" }} className={styles.headline}>
          {content.how_long_ago}
        </h2>
      </div>

      <div className={styles.checkbox_wrapper}>
        <Checkbox
          type="radio"
          label={content.less}
          value="false"
          checked={isLongAgo === false}
          onChange={() => setIsLongAgo(false)}
          onKeyDown={handleOnKeyDown2}
        />
        <Checkbox
          type="radio"
          label={content.more}
          value="true"
          checked={isLongAgo === true}
          onChange={() => setIsLongAgo(true)}
          onKeyDown={handleOnKeyDown2}
        />
      </div>
      <div className={styles.button_container}>
        <Link href={getHref()} passHref>
          <button
            disabled={isEmptyForm}
            className={`${styles.button} ${styles.purple} ${
              isEmptyForm && styles.disabled
            }`}
          >
            {content.start}
          </button>
        </Link>
      </div>
    </>
  );
}
