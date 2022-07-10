/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//react-scroll
import { Link, animateScroll as scroll } from "react-scroll";
//css
import { css, jsx } from '@emotion/react';


const MvScroll = (props) => {
    return (
        <div css={styles.scroll}>
            <Link to='About' smooth={true} css={styles.link}>Scroll down</Link>
        </div>
    );
};

const styles = {
    scroll: css`
        position: relative;
        bottom: 0;
        left: 0;
        color: #dcdcdc;
        font-size: 14px;
        font-weight: 600;
        transition: 0.4s;
        margin-bottom: 40px;
    `,
    link: css`
        position: relative;
        display: inline-block;
        height: 1.45em;
        line-height: 2;
        overflow: hidden;
        color: rgb(150, 150, 150);
        cursor: pointer;
    `,
}

export default MvScroll;
