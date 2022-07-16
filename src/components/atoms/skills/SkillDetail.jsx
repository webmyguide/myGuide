/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';
import { breakPoint, color } from "../../../styles/constans";

const SkillDetail = (props) => {
    return (
        <div css={styles.item}>
            <div css={styles.label}>{props.val.name}</div>
            <div css={styles.value}>{props.val.description}</div>
        </div>
    );
};


const styles = {
    item: css`
        display: flex;
        width: 100%;
        font-size: 16px;
        margin-bottom: 10px;

        @media (min-width: ${breakPoint.s}) {
            font-size: 16px;
            margin-bottom: 20px;
        }


        @media (min-width: ${breakPoint.m}) {

        }
    `,
    label: css`
        min-width: 110px;
        color: ${color.secondary[800]};

        @media (min-width: ${breakPoint.m}) {

        }
    `,
    value: css`
        width: 100%;
        text-indent: 1em;

        @media (min-width: ${breakPoint.m}) {

        }
    `,
}

export default SkillDetail;
