import React, { ReactElement, useState } from "react";
import styles from "../styles/SafetyPopup.module.scss";
import phone from "../public/phone.png";
import Image from "next/image";
import Link from "next/link";

interface Props {
    safety: string;
    onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const SafetyPopup = ({ safety, onClick }: Props): ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const handleCloseBt = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div className={styles.popup}>
                    <div className={styles.close_bt} onClick={onClick}>
                        <p>X</p>
                    </div>
                    {safety === "no" && (
                        <>
                            <p className="block">Do you need the police?</p>
                            <div className={styles.call_bt}>
                                <Link href="tel:110" passHref>
                                    <Image
                                        src={phone}
                                        alt="phone"
                                        width="25"
                                        height="25"
                                    />
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
                                    />
                                </Link>
                            </div>
                            <p className="block is-size-7">
                                If you don’t know what to say, tell them your
                                location first and then what has happened.{" "}
                            </p>
                        </>
                    )}
                    {(safety === "unsure" || safety === "no") && (
                        <>
                            <p className="block is-size-7">
                                If you’d like to talk to somebody or just not be
                                alone right now, you can call the national
                                helpline.
                            </p>
                            <div className={styles.call_bt}>
                                <Link href="tel:08000116116" passHref>
                                    <Image
                                        src={phone}
                                        alt="phone"
                                        width="25"
                                        height="25"
                                    />
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default SafetyPopup;
