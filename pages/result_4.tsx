import { NextPage } from "next";
import Image from "next/image";
import and_logo from "../public/and_logo.png";

const result_4: NextPage = () => {
    return (
        <>
            <Image src={and_logo} width="110" height="110" alt="logo" />
            <h1>Domestic & Long Ago</h1>
        </>
    );
};

export default result_4;
