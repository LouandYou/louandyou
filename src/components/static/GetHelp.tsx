import React, { ReactElement, useRef, useState } from "react";
import {Checkbox} from "./Checkbox";
import styles from "./GetHelp.module.scss";
import Link from "next/link";
import {SafetyCheck} from "./SafetyCheck";

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
    <div className={styles.get_help}>
      <SafetyCheck />
      <div className="card-content">
        <p className="py-2">What type of violence did you experience?</p>
        <Checkbox
          className="checkbox"
          label="Sexual"
          ref={checkbox1}
          onChange={onClickOne}
        />
        <Checkbox
          className="checkbox px-2"
          label="Domestic"
          ref={checkbox2}
          onChange={onClickTwo}
        />
        <Checkbox
          className="checkbox px-2"
          label="Both"
          ref={checkbox3}
          onChange={onClickThree}
        />
      </div>
      <div className="card-content">
        <p className="py-2 ">How long ago did it happen?</p>
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
      <div className="card-content">
        {canSubmit() && (
          <Link href={getHref()} passHref>
            <button className="button is-fullwidth">Submit</button>
          </Link>
        )}
      </div>
    </div>
  );
}
