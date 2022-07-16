/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';
import { breakPoint, color } from "../../../styles/constans";

const TextIcon = (props) => {
    return (
        <div css={styles.ico(props.size)}>
            <i>{props.val.name}</i>
        </div>
    );
};


const styles = {
    ico: (size) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${size}px;
        height: ${size}px;
        background: ${color.secondary[300]};
        font-size: 10px;
        color: ${color.white};

        @media (min-width: ${breakPoint.m}) {
            width: 56px;
            height: 56px;
            font-size: 12px;
        }
    `,
}

export default TextIcon;
