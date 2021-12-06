import type { NextPage } from "next";
import Image from "next/image";
import logo from "../public/logo.png";
import GetHelp from "../components/GetHelp";
import styles from "../styles/Home.module.scss";
import React, { useState } from "react";
import Checkbox from "../components/Checkbox";
import EmergancyWindow from "../components/EmergancyWindow";

const Home: NextPage = () => {
    const [isSafe, setIsSafe] = useState<boolean>(true);

    const handleChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsSafe(!isSafe);
    };

    return (
        <>
            <Image src={logo} width="210" height="110" alt="logo" />
            <div className="block">
                <div className="block py-2">
                    <p>Hi, my name is Lou,</p>
                    <br />
                    <p>
                        I’m the first digital companion for people affected by
                        gender-based violence. Whatever you might go through, I
                        am here to support you on your journey towards a
                        self-determined life.
                        <br />
                        <br />
                        Tell me a little about what your situation and I’ll show
                        you what might be helpful for you.{" "}
                    </p>
                </div>
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
                </div>
                <GetHelp />
                <p className="block pt-5">
                    Learn more about <a href="/sexual_violence"> sexual </a>
                    or <a href="/domestic_violence">domestic </a>
                    violence.
                </p>
                <p className="block">
                    You’d like to know more about me?
                    <br /> Let me <a>introduce myself to you.</a>
                    <br /> And if you’d like to stay in touch, sign up to my
                    newsletter <a>here</a>. One thing is for sure: together,{" "}
                    <a>we can change a lot.</a>
                </p>
            </div>
            {!isSafe && <EmergancyWindow />}
        </>
    );
};

export default Home;
