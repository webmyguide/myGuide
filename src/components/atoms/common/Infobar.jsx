/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';
import { breakPoint } from "../../../styles/constans";


const Infobar = (props) => {
    return (
        <div css={styles.info}>
            {props.text}
        </div>
    );
};

const styles = {
    info: css`
        position: absolute;
        top: 65px;
        left: 50%;
        z-index: 10;
        transform: translateX(-50%);
        display: inline-block;
        width: 78%;
        background: rgba(0,0,0,0.4);
        font-size: 12px;
        color: #ffffff;
        text-align: center;
        letter-spacing: 0.6vw;
        line-height: 1.45;
        border-radius: 5px;
        padding: 5px 20px;


        @media (min-width: ${breakPoint.s}) {
            top: 115px;
            width: auto;
            font-size: 14px;
            border-radius: 10px;
            padding: 10px 30px;

        }

        @media (min-width: ${breakPoint.m}) {

        }
    `,
}

export default Infobar;
