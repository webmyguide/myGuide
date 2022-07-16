/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//components
import Title from "../../atoms/common/TitleH3";
import Tier from "./Tier";
import Flow from "../../atoms/skills/Flow";
//css
import { css, jsx } from '@emotion/react';
import { breakPoint } from "../../../styles/constans";
//data
import { skillList, tier } from "../../../data/skills";


const Box = (props) => {

    //int
    const skillType = props.article.type;


    return (
        <article>
            <Title title={props.article.title}></Title>
            {
                (skillType != 'pr' )?
                    tier[skillType].list.map((val) => {
                        return (
                            <Tier key={skillType + val.tierId} type={skillType} tier={val} skills={skillList[skillType]}></Tier>
                        )
                    })
                :
                    (
                        <ul css={styles.workflow}>
                            {skillList[skillType].map((val) => {
                                return (
                                    <li key={skillType + val.id}><Flow val={val}></Flow></li>
                                )
                            })}
                        </ul>
                    )
            }
        </article>
    );
};

const styles = {
    workflow: css`
        letter-spacing: 0.16vw;
        line-height: 1.75;
        list-style: initial;
        margin-left: 2rem;

        li {
            font-size: 16px;

            @media (min-width: ${breakPoint.m}) {
                font-size: 16px;
            }
        }

    `,
}

export default Box;
