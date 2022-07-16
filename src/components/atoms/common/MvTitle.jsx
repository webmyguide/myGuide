/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';
import { breakPoint } from "../../../styles/constans";


const MvTitle = (props) => {
    return (
        <h2 css={styles.title}>
            <span css={styles.text}>IT IS </span>
            <span css={styles.text}>A FRONT-END </span>
            <span css={styles.text}>ENGINEER'S</span>
            <span css={styles.text}>PORTFOLIO SITE</span>
        </h2>
    );
};

const styles = {
    title: css`
        position: relative;
        top: 0;
        width: 100%;
        height: auto;
        font-size: 8.2vw;
        font-weight: 600;
        letter-spacing: 0.6vw;
        line-height: 1.45;
        padding-left: 0;
        margin-bottom: 25px;

        @media (min-width: ${breakPoint.s}) {
            font-size: 5vw;
        }

        @media (min-width: ${breakPoint.m}) {
            width: 100%;
            font-size: 32px;
            letter-spacing: 8px;
        }
    `,
    text: css`
        display: block;
        height: 1.4em;
        line-height: 1;
    `,
}

export default MvTitle;
