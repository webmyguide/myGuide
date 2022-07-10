/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//components
import Title from "../../atoms/common/TitleH3";
import Icon from "../../atoms/skills/Icon";
import Flow from "../../atoms/skills/Flow";
//css
import { css, jsx } from '@emotion/react';
import { breakPoint } from "../../../styles/constans";


const Box = (props) => {
    const list = (props.isIcon)? props.val.skills: props.val.details;

    return (
        <article>
            <Title title={props.val.title}></Title>
            <ul css={props.isIcon? styles.skills : styles.workflow}>
                {
                    list.map( (val,index) => {
                        return (
                            <li key={index}>
                                {
                                    (props.isIcon)?
                                    <Icon val={val}></Icon>:
                                    <Flow val={val}></Flow>
                                }
                            </li>
                        );
                    })
                }
            </ul>
        </article>
    );
};

const styles = {
    skills: css`
        width: 100%;
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(auto-fit, 44px);

        li {
            font-size: 44px;
        }
    `,
    workflow: css`
        letter-spacing: 0.16vw;
        line-height: 1.75;
        list-style: initial;
        margin-left: 2rem;

        li {
            font-size: 18px;

            @media (min-width: ${breakPoint.m}) {
                font-size: 15px;
            }
        }

    `,
}

export default Box;
