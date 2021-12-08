import React, { useRef, useState } from "react";
import Checkbox from "./Checkbox";
import SafetyPopup from "./SafetyPopup";
import styles from "../styles/Home.module.scss";

const SafetyCheck = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [safety, setSafety] = useState<string>("");

    const checkbox1 = useRef<HTMLInputElement>();
    const checkbox2 = useRef<HTMLInputElement>();
    const checkbox3 = useRef<HTMLInputElement>();

    const handleChangeOne = () => {
        checkbox3.current!.checked = false;
        checkbox2.current!.checked = false;
        setSafety(safety === "yes" ? "" : "yes");
    };

    const handleChangeTwo = () => {
        checkbox3.current!.checked = false;
        checkbox1.current!.checked = false;
        setSafety(safety === "no" ? "" : "no");
    };
    const handleChangeThree = () => {
        checkbox1.current!.checked = false;
        checkbox2.current!.checked = false;
        setSafety(safety === "unsure" ? "" : "unsure");
    };

    const handleClick = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    };

    return (
        <>
            <div className={styles.get_help}>
                <div className="card-content">
                    <p className="py-2 ">Are you safe right now?</p>
                    <Checkbox
                        className="checkbox"
                        ref={checkbox1}
                        label="Yes"
                        onChange={handleChangeOne}
                    />
                    <Checkbox
                        className="checkbox px-2 "
                        label="No"
                        ref={checkbox2}
                        onChange={handleChangeTwo}
                    />
                    <Checkbox
                        className="checkbox px-2 "
                        label="Not sure"
                        ref={checkbox3}
                        onChange={handleChangeThree}
                    />
                </div>
                <div className="card-content">
                    <button
                        className="button is-fullwidth"
                        onClick={handleClick}
                    >
                        Submit
                    </button>
                </div>
            </div>
            {isOpen && <SafetyPopup onClick={handleClick} safety={safety} />}
        </>
    );
};

export default SafetyCheck;
