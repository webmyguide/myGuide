/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//components
import Title from "../../atoms/common/TitleH2";
import Box from "../../atoms/experience/Box";
//css
import { css, jsx } from '@emotion/react';
import { breakPoint, color } from "../../../styles/constans";
import { section } from "../../../styles/section";
//data
import { list } from "../../../data/experience";

//コンテンツタイトル
const titleName = 'Experience';

const Experience = (props) => {
    return (
        <section css={styles.section} id={titleName}>
            <div css={styles.inner}>
                <Title title={titleName}></Title>
                <div css={section.box}>
                    {
                        list.map((val) => {
                            return (
                                <Box key={val.id} val={val}></Box>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: css`
        ${section.body}
        background: ${color.background}
    `,
    inner: css`
        ${section.inner}
    `,
}


export default Experience;
