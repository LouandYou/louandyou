import React, { ReactElement, useRef, useState } from "react";
import { Checkbox } from "./Checkbox";
import styles from "./GetHelp.module.scss";
import Link from "next/link";
import { SafetyCheck } from "./SafetyCheck";

export function GetHelp(): ReactElement {
  const [isSexual, setIsSexual] = useState<boolean>();
  const [isLongAgo, setIsLongAgo] = useState<boolean>();

  const checkbox1 = useRef<HTMLInputElement>();
  const checkbox2 = useRef<HTMLInputElement>();
  const checkbox3 = useRef<HTMLInputElement>();

  const onClickOne = () => {
    checkbox3.current!.checked = false;
    checkbox2.current!.checked = false;
    if (checkbox1.current!.checked) {
      setIsSexual(true);
    }
  };

  const onClickTwo = () => {
    checkbox3.current!.checked = false;
    checkbox1.current!.checked = false;
    if (checkbox2.current!.checked) {
      setIsSexual(false);
    }
  };
  const onClickThree = () => {
    checkbox1.current!.checked = false;
    checkbox2.current!.checked = false;
    if (checkbox3.current!.checked) {
      setIsSexual(false);
    }
  };

  const getHref = () => {
    if (isSexual && !isLongAgo) {
      return "/result_1";
    } else if (isSexual && isLongAgo) {
      return "/result_2";
    } else if (!isSexual && !isLongAgo) {
      return "/result_3";
    }

    return "/result_4";
  };

  const canSubmit = () => isSexual !== undefined && isLongAgo !== undefined;

  return (
    <>
      <SafetyCheck />
      <h2 className={styles.headline}>
        what type of
        <br /> violence did you
        <br /> experience?
      </h2>
      <div className="py-5 ">
        <div className="is-flex is-flex-direction-row">
          <Checkbox
            className="checkbox"
            label="sexual"
            ref={checkbox1}
            onChange={onClickOne}
          />
          <Checkbox
            className="checkbox px-2"
            label="domestic"
            ref={checkbox2}
            onChange={onClickTwo}
          />
          <Checkbox
            className="checkbox px-2"
            label="both"
            ref={checkbox3}
            onChange={onClickThree}
          />
        </div>
        <div className="pt-5">
          <Checkbox
            className="checkbox px-2"
            label="not sure or would rather not say
          "
            ref={checkbox3}
            onChange={onClickThree}
          />
        </div>
      </div>

      <h2 className={styles.headline}>
        how long ago did
        <br /> it happen?
      </h2>
      <div className="py-5 is-flex is-flex-direction-row">
        <Checkbox
          className="checkbox px-2"
          label="Last 7 days"
          value={isLongAgo === false}
          onChange={() => setIsLongAgo(false)}
        />
        <Checkbox
          className="checkbox"
          label="Long ago"
          value={isLongAgo === true}
          onChange={() => setIsLongAgo(true)}
        />
      </div>
      <div className={styles.button_container}>
        {canSubmit() && (
          <Link href={getHref()} passHref>
            <button className={styles.button}>find support</button>
          </Link>
        )}
      </div>
    </>
  );
}
