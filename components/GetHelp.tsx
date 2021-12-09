import React, {ReactElement, useState} from "react";
import Checkbox from "./Checkbox";
import styles from "../styles/GetHelp.module.scss";
import Link from "next/link";

function GetHelp(): ReactElement {
    const [isSexual, setIsSexual] = useState<boolean>();
    const [isLongAgo, setIsLongAgo] = useState<boolean>();

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
            <div className={styles.get_help}>
                <div className="card-content">
                    <p className="py-2">
                        What type of violence did you experience?
                    </p>
                    <Checkbox
                        className="checkbox"
                        label="Sexual"
                        value={isSexual === true}
                        onChange={() => setIsSexual(true)}
                    />
                    <Checkbox
                        className="checkbox px-2"
                        label="Domestic"
                        value={isSexual === false}
                        onChange={() => setIsSexual(false)}
                    />
                </div>
                <div className="card-content">
                    <p className="py-2 ">How long ago did it happen?</p>
                    <Checkbox
                        className="checkbox"
                        label="Long ago"
                        value={isLongAgo === true}
                        onChange={() => setIsLongAgo(true)}
                    />
                    <Checkbox
                        className="checkbox px-2"
                        label="Last 7 days"
                        value={isLongAgo === false}
                        onChange={() => setIsLongAgo(false)}
                    />
                </div>
                <div className="card-content">
                    {
                        canSubmit() && <Link href={getHref()} passHref>
                            <button className="button is-fullwidth">Submit</button>
                        </Link>
                    }
                </div>
            </div>
        </>
    );
}

export default GetHelp;
