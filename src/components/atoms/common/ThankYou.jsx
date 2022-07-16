/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';
import { breakPoint,color } from "../../../styles/constans";


const ThankYou = (props) => {
    return (
        <div css={styles.info}>
            <p>Thank you for coming!</p>
        </div>
    );
};

const styles = {
    info: css`
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        min-height: 36vw;
        background: ${color.primary[200]};
        font-size: 7.5vw;
        color: ${color.white};
        line-height: 0;

        @media (min-width: ${breakPoint.s}) {
            min-height: 200px;
            font-size: 40px;
        }

        @media (min-width: ${breakPoint.m}) {
            min-height: 320px;
            font-size: 50px;
        }
    `,
}

export default ThankYou;
