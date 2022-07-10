/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';
import { color } from "../../../styles/constans";

const TextIcon = (props) => {

    const className = 'devicon-' + props.val.name + '-plain colored';

    return (
        <div css={styles.ico}>
            <i>{props.val.text}</i>
        </div>
    );
};


const styles = {
    ico: css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        background: ${color.primary[300]};
        font-size: 10px;
        color: ${color.white};

    `,
}

export default TextIcon;
