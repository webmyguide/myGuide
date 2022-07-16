/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//components
import Logo from "../../atoms/common/Logo";
import ThankYou from "../../atoms/common/ThankYou";


//css
import { css, jsx } from '@emotion/react';
import { breakPoint,maxWidth,color } from "../../../styles/constans";


const Footer = (props) => {
    //年の取得
    const currntTime = new Date();
    const currntYear = currntTime.getFullYear();

    return (
        <footer css={styles.footer} id="footer">
            <ThankYou></ThankYou>
            <div css={styles.inner}>
                <p css={styles.copyright}>© {currntYear} MURAKAMI YU-KI</p>
            </div>
        </footer>
    );
};


const styles = {
    footer: css`
        background: ${color.primary[900]};
        color: #fff;
        width: 100%;
    `,
    inner: css`
        width: 100%;
        max-width: ${maxWidth};
        margin: 0 auto;
        padding: 30px;
    `,
    copyright: css`
        font-size: 12px;
        text-align: left;
    `,
}

export default Footer;
