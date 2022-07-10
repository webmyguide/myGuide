/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//components
import Title from "../../atoms/common/TitleH2";
import Box from "../../molecules/skills/Box";
//css
import { css, jsx } from '@emotion/react';
import { breakPoint } from "../../../styles/constans";
import { section } from "../../../styles/section";
//data
import { list } from "../../../data/skills";


//コンテンツタイトル
const titleName = 'Skills';


const Skills = (props) => {
    return (
        <section css={styles.section} id={titleName}>
            <div css={styles.inner}>
                <Title title={titleName}></Title>
                <div css={section.box}>
                    {
                        list.map((val) => {
                            return (
                                <Box key={val.id} val={val} isIcon={val.skills || false} ></Box>
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
    `,
    inner: css`
        ${section.inner}
    `,
}

export default Skills;
