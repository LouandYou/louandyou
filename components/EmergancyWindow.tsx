import React, { ReactElement, useState } from "react";
import styles from "../styles/EmergencyWindow.module.scss";
import phone from "../public/phone.png";
import Image from "next/image";
import Link from "next/link";
import GetHelp from "./GetHelp";

function EmergancyWindow(): ReactElement {
    const [isHidden, setisHidden] = useState<boolean>(true);

    const handleCloseBt = () => {
        setisHidden(false);
    };

    return (
        <>
            {isHidden && (
                <div className={styles.popup}>
                    <div className={styles.close_bt} onClick={handleCloseBt}>
                        <p>X</p>
                    </div>
                    <p className="block">Do you need the police?</p>

                    <div className={styles.call_bt}>
                        <Link href="tel:110" passHref>
                            <Image
                                src={phone}
                                alt="phone"
                                width="25"
                                height="25"
                            ></Image>
                        </Link>
                    </div>

                    <p className="block">Do you need an ambulance?</p>
                    <div className={styles.call_bt}>
                        <Link href="tel:112" passHref>
                            <Image
                                src={phone}
                                alt="phone"
                                width="25"
                                height="25"
                            ></Image>
                        </Link>
                    </div>
                    <p className="block is-size-7">
                        If you don’t know what to say, tell them your location
                        first and then what has happened.{" "}
                    </p>
                    <p className="block is-size-7">
                        If you’d like to talk to somebody or just not be alone
                        right now, you can call the national helpline.
                    </p>
                    <div className={styles.call_bt}>
                        <Link href="tel:08000116116" passHref>
                            <Image
                                src={phone}
                                alt="phone"
                                width="25"
                                height="25"
                            ></Image>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default EmergancyWindow;
