/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//css
import { css, jsx } from '@emotion/react';
import { breakPoint,maxWidth } from "./constans";


export const section = {
    body: css`
        width: 100%;
    `,
    inner: css`
        width: 100%;
        max-width: ${breakPoint.m};
        margin: 0 auto;
        padding: 60px 30px;

        @media (min-width: ${breakPoint.s}) {
            padding: 100px 40px;
        }

        @media (min-width: ${breakPoint.m}) {
            padding: 100px 40px;
        }
    `,

    detail: css`
        font-size: 16px;
        letter-spacing: 0.16vw;
        line-height: 1.75;

        @media (min-width: ${breakPoint.m}) {
            font-size: 16px;
            letter-spacing: 0.16vw;
            line-height: 1.8;
        }

        + p,
        + article {
            margin-top: 30px;
        }
    `,

    box: css`
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

        @media (min-width: ${breakPoint.m}) {
            gap: 60px;
            grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
        }
    `,
}
