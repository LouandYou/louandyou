import React, { ReactElement, useState } from "react";
import Checkbox from "./Checkbox";
import styles from "../styles/GetHelp.module.scss";

function GetHelp(): ReactElement {
    const [isSafe, setIsSafe] = useState(true);
    const [isSexual, setIsSexual] = useState(true);
    const [isLongAgo, setisLongAgo] = useState(true);

    const handleChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsSafe(!isSafe);
    };

    const handleChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsSexual(!isSexual);
    };

    const handleChangeThree = (e: React.ChangeEvent<HTMLInputElement>) => {
        setisLongAgo(!isLongAgo);
    };

    const handleSubmit = () => {};

    return (
        <div className={styles.get_help}>
            <div className="card-content">
                <p className="py-2 ">Are you safe right now?</p>
                <Checkbox
                    className="checkbox "
                    label="Yes"
                    value={isSafe}
                    onChange={handleChangeOne}
                />
                <Checkbox
                    className="checkbox px-2 "
                    label="No"
                    value={!isSafe}
                    onChange={handleChangeOne}
                />
            </div>
            <div className="card-content py-1">
                <p className="py-2 ">
                    What type of violence did you experience?
                </p>
                <Checkbox
                    className="checkbox"
                    label="Sexualle"
                    value={isSexual}
                    onChange={handleChangeTwo}
                />
                <Checkbox
                    className="checkbox px-2"
                    label="Domestic"
                    value={!isSexual}
                    onChange={handleChangeTwo}
                />
            </div>
            <div className="card-content">
                <p className="py-2 ">How long ago did it happen?</p>
                <Checkbox
                    className="checkbox"
                    label="Long ago"
                    value={isLongAgo}
                    onChange={handleChangeThree}
                />
                <Checkbox
                    className="checkbox px-2"
                    label="Last 7 days"
                    value={!isLongAgo}
                    onChange={handleChangeThree}
                />
            </div>
            <div className="card-content">
                <button className="button is-fullwidth" onSubmit={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default GetHelp;
