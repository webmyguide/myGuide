/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import Header from "../common/Header";
import Footer from "../common/Footer";
import Mv from "../common/Mv"
import About from "./About"
import Works from "./Works"
import Skills from "./Skills"
import Experience from "./Experience"

const Top = (props) => {
    return (
        <>
            <Header title={props.title}></Header>
            <main>
                <Mv></Mv>
                <About></About>
                <Works></Works>
                <Skills></Skills>
                <Experience></Experience>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Top;
