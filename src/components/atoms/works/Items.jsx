/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';
import { breakPoint,color } from "../../../styles/constans";
//icomoon-react
import iconSet from "../../../font/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const Items = (props) => {

    //画像の指定
    const figure = (
        <figure css={styles.figure}>
            {
                (props.val.url)?
                <a href={props.val.url} target="_blank" rel="noopener noreferrer"><img src={props.val.img.src} width={props.val.img.width} height={props.val.img.height} /></a>:
                <img src={props.val.img.src} width={props.val.img.width} height={props.val.img.height} />
            }
        </figure>
    );

    //githubの指定
    const github =  (
        <a href={props.val.github} target="_blank" rel="noopener noreferrer" css={styles.link}>
            <IcomoonReact iconSet={iconSet} size={24} color={color.white} icon="github" />
            <div css={styles.label}>GitHub</div>
        </a>
    );


    // console.log(props);


    return (
        <li css={styles.items(props.size)}>
            <article css={styles.article}>
                {figure}
                <div css={styles.lead}>
                    <h3 css={styles.title}>
                        <a href={props.val.url} target="_blank" rel="noopener noreferrer">
                            {props.val.title}
                            <IcomoonReact iconSet={iconSet} size={24} color={color.white} icon="new-tab" />
                        </a>
                    </h3>
                    <ul css={styles.skills}>
                        {props.val.skills.map((val,index) => {
                            return (
                                <li key={val}>{(index > 0)? '/' + val: val}</li>
                            );
                        })}
                    </ul>
                    {props.val.github && github}
                </div>
            </article>
        </li>
    );
};

const styles = {
    items: (size) => css`
        min-width: ${size.width}px;
        // max-width: 480px;
        margin: 0 30px;
    `,
    article: css`
        border-bottom: 1px solid #e6e5e5;
        padding-bottom: 20px;
    `,
    figure: css`
        position: relative;
        width: 100%;
        height: 194px;
        background: #e6e5e5;
        border-radius: 20px;
        margin-bottom: 20px;
        overflow: hidden;

        img {
            width: 100%;
            height: auto;
        }
    `,
    lead: css`
        color: ${color.white}
    `,
    time: css`
        font-size: 14px;
        line-height: 1.8;
        letter-spacing: 0.3vw;
        margin-bottom: 5px;
    `,
    title: css`
        margin-bottom: 10px;

        a {
            display: flex;
            align-content: center;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            font-size: 16px;
            line-height: 1.8;
            font-weight: 600;
            letter-spacing: 0.3vw;

            svg {
                width: 24px;
                height: 24px;
            }
        }
    `,
    skills: css`
        display: flex;
        flex-wrap: wrap;
        font-size: 12px;
        line-height: 1.8;
        letter-spacing: 0.3vw;
        margin-bottom: 5px;
    `,
    link: css`
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        width: 78%;
        height: 40px;
        background: ${color.primary[600]};
        border-radius: 10px;
        margin: 15px auto 0;
        cursor: pointer;
    `,
    label: css`
        font-size: 14px;
        line-height: 1.8;
        letter-spacing: 0.3vw;
        padding-left: 10px;
    `,
}

export default Items;
