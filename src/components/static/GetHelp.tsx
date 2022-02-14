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
        what kind of violence did you experience?
      </h2>

      <div className="pt-5 is-flex">
        <Checkbox
          type="checkbox"
          label="sexual"
          ref={checkbox1}
          onChange={onClickOne}
        />
        <Checkbox
          type="checkbox"
          label="domestic"
          ref={checkbox2}
          onChange={onClickTwo}
        />
      </div>
      <div className="pt-4">
        <Checkbox
          type="checkbox"
          label="I’m not sure / I’d rather not say"
          ref={checkbox3}
          onChange={onClickThree}
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
            <button className={styles.button}>find out how I can help</button>
          </Link>
        )}
      </div>
    </>
  );
}
