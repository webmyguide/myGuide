/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//components
import Title from "../../atoms/common/TitleH3";
import Icon from "../../atoms/skills/Icon";
import TextIcon from "../../atoms/skills/TextIcon";
import Flow from "../../atoms/skills/Flow";


//css
import { css, jsx } from '@emotion/react';
import { breakPoint, color } from "../../../styles/constans";


const Box = (props) => {
    const list = (props.isIcon)? props.val.skills: props.val.details;

    const ico = (val) => {
        if(props.isIcon) {
            return (val.text)? (<TextIcon val={val}></TextIcon>):(<Icon val={val}></Icon>);
        }else {
            return (<Flow val={val}></Flow>);
        }
    };

    return (
        <article>
            <Title title={props.val.title}></Title>
            <div>
                <ul css={props.isIcon? styles.skills : styles.workflow}>
                    {
                        list.map( (val,index) => {
                            return (
                                <li key={val.id}>
                                    {ico(val)}
                                </li>
                            );
                        })
                    }
                </ul>
                {
                    props.isIcon &&
                        (
                            <dl css={styles.dl}>
                                {
                                    list.map( (val,index) => {
                                        return (
                                            <>
                                                <dt>{val.name}</dt>
                                                <dd>{val.description}</dd>
                                            </>
                                        );
                                    })
                                }
                            </dl>
                        )
                }
            </div>
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

    dl: css`
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;

        dt {
            width: 28%;
            color: ${color.primary[600]}
        }

        dd {
            width: 72%;
        }
    `,
}

export default Box;
