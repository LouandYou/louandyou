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

    const onClickOne = () => {
        checkbox3.current!.checked = false;
        checkbox2.current!.checked = false;
    };

    const onClickTwo = () => {
        checkbox3.current!.checked = false;
        checkbox1.current!.checked = false;
        setSafety(safety === "no" ? "" : "no");
        if (checkbox2.current!.checked) {
            toggleIsOpen();
        }
    };
    const onClickThree = () => {
        checkbox1.current!.checked = false;
        checkbox2.current!.checked = false;
        setSafety(safety === "unsure" ? "" : "unsure");
        if (checkbox3.current!.checked) {
            toggleIsOpen();
        }
    };

    const toggleIsOpen = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    };

    return (
        <>
            <div className="card-content">
                <p className="py-2">Are you safe right now?</p>
                <Checkbox
                    className="checkbox"
                    ref={checkbox1}
                    label="Yes"
                    onChange={onClickOne}
                />
                <Checkbox
                    className="checkbox px-2"
                    label="No"
                    ref={checkbox2}
                    onChange={onClickTwo}
                />
                <Checkbox
                    className="checkbox px-2 "
                    label="Not sure"
                    ref={checkbox3}
                    onChange={onClickThree}
                />
            </div>

            {isOpen && <SafetyPopup onClick={toggleIsOpen} safety={safety} />}
        </>
    );
};

export default SafetyCheck;
