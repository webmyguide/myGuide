/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';
import { breakPoint, color } from "../../../styles/constans";
import { fideIn, fideOut } from "../../../styles/keyframes";
//img
import IcoMv from '../../../images/ico_mv_01.svg';


const Logo = (props) => {
    let title,img;


    return (
        <h1 css={props.isImg ? styles.footer: styles.header(props.display)}>
            {(props.isImg)? <img src={IcoMv} alt="" css="" />: ''}
            {(props.strongTitle)? <><strong>{props.strongTitle}</strong>{props.title}</>: props.title}
        </h1>
    );
};

const styles = {
    header: (display) => css`
        // transition: 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        font-size: 18px;
        font-weight: bold;
        // transition: 0.8s easeOutQuint;
        animation: ${display ? fideIn.up: fideOut.down} 0.4s ease 1 forwards;
        // animation: ${fideIn.up} 0.6s ease 1 forwards;

        @media (min-width: ${breakPoint.s}) {
            font-size: 22px;
        }

        @media (min-width: ${breakPoint.m}) {
            font-size: 30px;
        }

        strong {
           color: ${color.primary[800]};
       }
    `,
    footer: css`
        width: 260px;
        display: flex;
        align-items: center;
        font-size: 17px;
        line-height: 1.3;
        font-weight: bold;
        margin: 0 auto 15px;

        img {
           width: 130px;
           margin-right: 20px;
        }
    `,
}

export default Logo;
