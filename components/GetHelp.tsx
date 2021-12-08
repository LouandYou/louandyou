import React, { ReactElement, useState } from "react";
import Checkbox from "./Checkbox";
import styles from "../styles/GetHelp.module.scss";
import Link from "next/link";

function GetHelp(): ReactElement {
    const [isSexual, setIsSexual] = useState<boolean>(true);
    const [isLongAgo, setisLongAgo] = useState<boolean>(true);
    const [href, setHref] = useState<string>("/result_2");

    const handleChangeTwo = () => {
        console.log("handleChange 1");

        setIsSexual(!isSexual);
        console.log("isSexual after change", isSexual);
        setUrl();
        console.log("href", href);
    };
    const handleChangeThree = () => {
        setisLongAgo(!isLongAgo);

        console.log("href", href);
    };

    // setting the url still doesnt work :(

    const setUrl = () => {
        if (isSexual && !isLongAgo) {
            console.log("block 1");

            setHref("/result_1");
        } else if (isSexual && isLongAgo) {
            console.log("isSexual", isSexual);

            console.log("block 2");
            setHref("/result_2");
        } else if (!isSexual && !isLongAgo) {
            console.log("block 3");
            setHref("/result_3");
        } else if (!isSexual && isLongAgo) {
            console.log("block 4");
            setHref("/result_4");
        }
    };

    return (
        <>
            <div
                onClick={() => console.log("isSexual", isSexual, "href", href)}
                className={styles.get_help}
            >
                <div className="card-content">
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
                    <Link href={href} passHref>
                        <button className="button is-fullwidth">Submit</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default GetHelp;
