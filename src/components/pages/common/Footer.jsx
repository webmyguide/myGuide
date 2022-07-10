/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//components
import Logo from "../../atoms/common/Logo";
//css
import { css, jsx } from '@emotion/react';
import { breakPoint } from "../../../styles/constans";


const Footer = (props) => {
    return (
        <footer css={styles.footer} id="footer">
            <div css={styles.inner}>
                <Logo isImg={true} title='MURAKAMI YU-KI'></Logo>
                <p css={styles.copyright}>© 2011-2022 MURAKAMI YU-KI</p>
            </div>
        </footer>
    );
};


const styles = {
    footer: css`
        background: #0f213c;
        color: #fff;
        width: 100%;
    `,
    inner: css`
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        padding: 40px 30px 10px;
    `,
    copyright: css`
        font-size: 12px;
        text-align: center;
    `,
}

export default Footer;
