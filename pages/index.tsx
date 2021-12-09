import type { NextPage } from "next";
import Image from "next/image";
import logo from "../public/logo.png";
import GetHelp from "../components/GetHelp";
import React from "react";
import SafetyCheck from "../components/SafetyCheck";
import Link from "next/link";

const Home: NextPage = () => {
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
                <SafetyCheck />
                <GetHelp />
                <p className="block pt-5">
                    Learn more about <Link href="/sexual_general" passHref> sexual </Link>
                    or <Link href="/domestic_general" passHref>domestic </Link>
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
        </>
    );
};

export default Home;
