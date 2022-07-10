/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';


const Icon = (props) => {

    const className = 'devicon-' + props.val + '-plain colored';

    return (
        <i className={className}></i>
    );
};

export default Icon;
