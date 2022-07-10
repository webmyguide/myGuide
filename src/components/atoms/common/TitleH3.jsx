/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';
import { breakPoint } from "../../../styles/constans";


const TitleH3 = (props) => {
    return (
        <h3 css={styles.title}>{props.title}</h3>
    );
};

const styles = {
    title: css`
        font-size: 24px;
        font-weight: 600;
        color: #1c5bc8;
        letter-spacing: 0.05rem;
        margin-bottom: 30px;

        ::before {
            content: '-';
            margin-right: 1rem;
        }

        @media (min-width: ${breakPoint.m}) {
            font-size: 20px;
            margin-bottom: 30px;
        }
    `
}

export default TitleH3;
