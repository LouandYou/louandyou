import React, { ReactElement, useState } from "react";
import { Checkbox } from "./Checkbox";
import styles from "./GetHelp.module.scss";
import Link from "next/link";
import { SafetyCheck } from "./SafetyCheck";

export function GetHelp(): ReactElement {
  const [violanceType, setViolanceType] = useState<string>();
  const [isLongAgo, setIsLongAgo] = useState<boolean>();

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

  const canSubmit = () => violanceType !== undefined && isLongAgo !== undefined;

  return (
    <>
      <SafetyCheck />
      <h2 className={styles.headline}>
        what kind of violence did you experience?
      </h2>

      <div className="pt-5 is-flex">
        <Checkbox
          type="radio"
          label="sexual"
          checked={violanceType === "sexual"}
          onChange={() => setViolanceType("sexual")}
        />
        <Checkbox
          type="radio"
          label="domestic"
          checked={violanceType === "domestic"}
          onChange={() => setViolanceType("domestic")}
        />
      </div>
      <div className="pt-4">
        <Checkbox
          type="radio"
          label="both"
          checked={violanceType === "both"}
          onChange={() => setViolanceType("both")}
        />
      </div>
      <div className="pt-4">
        <Checkbox
          type="radio"
          label="I’m not sure / I’d rather not say"
          checked={violanceType === "not sure"}
          onChange={() => setViolanceType("not sure")}
        />
      </div>
      <h2 className={styles.headline}>how long ago did it happen?</h2>
      <div className="pt-5">
        <Checkbox
          type="checkbox"
          label="less than a month ago"
          checked={isLongAgo === false}
          onChange={() => setIsLongAgo(false)}
        />
      </div>
      <div className="pt-4">
        <Checkbox
          type="checkbox"
          label="more than a month ago"
          checked={isLongAgo === true}
          onChange={() => setIsLongAgo(true)}
        />
      </div>
      <div className={styles.button_container}>
        {canSubmit() && (
          <Link href={getHref()} passHref>
            <button className={`${styles.button} ${styles.purple}`}>
              get started
            </button>
          </Link>
        )}
      </div>
    </>
  );
}
