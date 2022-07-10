/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';
import { breakPoint,color } from "../../../styles/constans";


const TitleH2 = (props) => {

    return (
        <h2 css={styles.title(props)}>{props.title}</h2>
    );
};


const styles =  {
    title: (props) => css`
        font-size: 40px;
        font-weight: 600;
        color: ${(props.isWhite)? color.white: props.isWhite };
        letter-spacing: 0.05rem;
        margin-bottom: 50px;

        @media (min-width: ${breakPoint.m}) {
            font-size: 28px;
            margin-bottom: 50px;
        }
    `
}

// const title = (props) => css`
//   color: ${(props.isWhite)? color.white: color.black };
// `;

export default TitleH2;
