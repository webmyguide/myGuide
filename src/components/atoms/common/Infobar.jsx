/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';
import { breakPoint, color } from "../../../styles/constans";


const Infobar = (props) => {
    return (
        <div css={styles.info}>
            {props.text}
        </div>
    );
};

const styles = {
    info: css`
        display: block;
        font-size: 14px;
        color: ${color.secondary[800]};
        border: 1px solid  ${color.secondary[800]};
        text-align: center;
        letter-spacing: 0.6vw;
        line-height: 1.45;
        margin-bottom: 30px;

        @media (min-width: ${breakPoint.s}) {
            padding: 5px 20px;

        }

        @media (min-width: ${breakPoint.m}) {

        }
    `,
}

export default Infobar;
