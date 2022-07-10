/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';
import { breakPoint } from "../../../styles/constans";


const Menu = (props) => {
    return (
        <div css={styles.menu(props.bg)} onClick={props.onClick}>
            <div css={styles.inner(props.stateMenu)}>
                <span css={styles.ico(props.stateMenu)}></span>
                <span css={styles.ico(props.stateMenu)}></span>
            </div>
        </div>
    );
};

const styles = {
    menu: (isBg) => css`
        position: absolute;
        width: 80px;
        height: 80px;
        top: 0;
        right: 0;
        z-index: 150;
        display: flex;
        justify-content: center;
        ${isBg && 'background-color: rgba(255,255,255,0.5);'}
        align-items: center;
        cursor: pointer;
        transition: all 0.6s ease-out;

        @media (min-width: ${breakPoint.s}) {
            width: 85px;
            height: 85px;
        }

        @media (min-width: ${breakPoint.m}) {
            top: 0;
            right: 0;
            width: 80px;
            height: 108px;
        }
    `,
    inner: (stateMenu) => css`
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (min-width: ${breakPoint.m}) {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        ${(stateMenu)? 'span:nth-of-type(1) {transform: rotate(45deg) translate3d(0, 0px, 0);}': ''}
        ${(stateMenu)? 'span:nth-of-type(2) {transform: rotate(-45deg) translate3d(0, 0px, 0);}': ''}
    `,
    ico: (stateMenu) => css`
        ${(stateMenu)? 'position: absolute;': ''}
        transition: 1s cubic-bezier(0.16, 1, 0.3, 1);
        transform-origin: center center;
        display: block;
        width: 20px;
        height: 2px;
        background: #555;
        margin: 4px auto;


        @media (min-width: ${breakPoint.m}) {
            width: 24px;
            height: 3px;
            margin: 5px auto;
        }

    `,
}

export default Menu;
