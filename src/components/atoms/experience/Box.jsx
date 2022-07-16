/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//components
import Title from "../common/TitleH3";
//css
import { jsx } from '@emotion/react';
import { section } from "../../../styles/section";


const Box = (props) => {
    return (
        <article>
            <Title title={props.val.title}></Title>
            {
                props.val.details.map((val,index) => {
                    return (
                        <p key={index} css={section.detail}>{val}</p>
                    );
                })
            }
        </article>
    );
};


export default Box;
