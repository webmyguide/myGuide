/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';


const Icon = (props) => {

    const className = 'devicon-' + props.val.name + '-plain colored';

    return (
        <div css={styles.ico}>
            <i className={className}></i>
        </div>
    );
};


const styles = {
    ico: css`
        font-size: 44px;
    `,
}

export default Icon;
