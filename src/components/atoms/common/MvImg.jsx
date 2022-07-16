/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';
import { breakPoint } from "../../../styles/constans";
//img
import {mv} from '../../../images/GlobalImg';

const MvImg = (props) => {
    return (
        <div css={styles.box}>
            <img src={mv.ico} alt="" css={styles.ico} />
            <div css={styles.bg}></div>
        </div>
    );
};

const styles = {
    box: css`
        position: relative;
        z-index: 10;
        width: 100%;
        height: 666px;
        min-height: auto;
        overflow: hidden;
        background: #f4f4f4;
        border-top-left-radius: 60px;
        border-bottom-left-radius: 60px;

        @media (min-width: ${breakPoint.s}) {
            position: relative;
            overflow: hidden;
            width: 37vw;
            height: calc(100vh + 80px);
            min-height: 680px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 80px;
            margin: 0 calc(50% - 50vw) 0 0 ;
        }

        @media (min-width: ${breakPoint.m}) {
            width: 52vw;
            margin: 0 0 0 auto;
        }
    `,
    ico: css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        max-width: 200px;
        height: auto;

        @media (min-width: ${breakPoint.m}) {
            left: 150px;
            transform: translateY(-50%);
        }
    `,
    bg: css`
        background: url(${mv.bg});
        background-position: left center;
        height: 100%;

    `,
}

export default MvImg;
