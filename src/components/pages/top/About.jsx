/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//components
import Title from "../../atoms/common/TitleH2";
//css
import { css, jsx } from '@emotion/react';
import { breakPoint } from "../../../styles/constans";
import { section } from "../../../styles/section";
//data
import { details } from "../../../data/about";


//コンテンツタイトル
const titleName = 'About';

//テキスト部分
const text = details.map((val,index) => {
    return (
        <p css={section.detail} key={index}>{val}</p>
    );
});


const About = (props) => {
    return (
        <section css={styles.section} id={titleName}>
            <div css={styles.inner}>
                <Title title={titleName}></Title>
                {text}
            </div>
        </section>
    );
};

const styles = {
    section: css`
        ${section.body}
    `,
    inner: css`
        ${section.inner}

        @media (min-width: ${breakPoint.m}) {
            width: 50%;
            max-width: calc(1024px / 2);
            margin-left: 50%;
            padding: 100px 40px 100px 25px;
        }
    `,
    detail: css`
        ${section.detail}
    `,
}


export default About;
