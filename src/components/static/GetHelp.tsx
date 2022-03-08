import React, { ReactElement, useState } from "react";
import { Checkbox } from "./Checkbox";
import styles from "./GetHelp.module.scss";
import Link from "next/link";
import { SafetyCheck } from "./SafetyCheck";

export function GetHelp({ content }): ReactElement {
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
      <SafetyCheck content={content} />
      <h2 className={styles.headline}>{content.violence_question}</h2>

      <div className="pt-5 is-flex">
        <Checkbox
          type="radio"
          label={content.sexual}
          checked={violanceType === "sexual"}
          onChange={() => setViolanceType("sexual")}
        />
        <Checkbox
          type="radio"
          label={content.domestic}
          checked={violanceType === "domestic"}
          onChange={() => setViolanceType("domestic")}
        />
      </div>
      <div className="pt-4">
        <Checkbox
          type="radio"
          label={content.both}
          checked={violanceType === "both"}
          onChange={() => setViolanceType("both")}
        />
      </div>
      <div className="pt-4">
        <Checkbox
          type="radio"
          label={content.not_say}
          checked={violanceType === "not sure"}
          onChange={() => setViolanceType("not sure")}
        />
      </div>
      <h2 className={styles.headline}>how long ago did it happen?</h2>
      <div className="pt-5">
        <Checkbox
          type="checkbox"
          label={content.less}
          checked={isLongAgo === false}
          onChange={() => setIsLongAgo(false)}
        />
      </div>
      <div className="pt-4">
        <Checkbox
          type="checkbox"
          label={content.more}
          checked={isLongAgo === true}
          onChange={() => setIsLongAgo(true)}
        />
      </div>
      <div className={styles.button_container}>
        {canSubmit() && (
          <Link href={getHref()} passHref>
            <button className={`${styles.button} ${styles.purple}`}>
              {content.start}
            </button>
          </Link>
        )}
      </div>
    </>
  );
}
