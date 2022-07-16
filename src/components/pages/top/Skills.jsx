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
import { skillArticle } from "../../../data/skills";


//コンテンツタイトル
const titleName = 'Skills';


const Skills = (props) => {
    return (
        <section css={styles.section} id={titleName}>
            <div css={styles.inner}>
                <Title title={titleName}></Title>

                {
                    skillArticle.map((val) => {
                        return (
                            <Box key={val.id} article={val}></Box>
                        );
                    })
                }

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

        article + article {
            margin-top: 60px;

            @media (min-width: ${breakPoint.s}) {
                margin-top: 75px;
            }
        }
    `,
}

export default Skills;
