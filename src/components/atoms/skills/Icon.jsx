/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';
import { breakPoint } from "../../../styles/constans";

const Icon = (props) => {
    return (
        <div css={styles.ico(props.size)}>
            <i className={props.val.className}></i>
        </div>
    );
};


const styles = {
    ico: (size) => css`
        display: flex;
        font-size: ${size}px;

        @media (min-width: ${breakPoint.m}) {
            font-size: 56px;
        }
    `,
}

export default Icon;
