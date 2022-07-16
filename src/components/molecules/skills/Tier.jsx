/** @jsxRuntime classic */
/** @jsx jsx */
import React, {useRef, useState, useEffect} from 'react';
//components
import Icon from "../../atoms/skills/Icon";
import TextIcon from "../../atoms/skills/TextIcon";
//css
import { css, jsx } from '@emotion/react';
import { breakPoint, color } from "../../../styles/constans";
//Helpers
import { handleResize } from "../../../js/Helpers";


const Tier = (props) => {

    //useRef
    const skillView = useRef(null);

    //useState　初期
    const [stateIcoSize,setIcoSize] = useState('');//ixoサイズ

    //初回
    useEffect(() => {handleIcoSize()},[] );

    //cssのアイコンがあるかで振り分け
    const handleIcoSize = () => {
        if(!skillView.current) return false;
        setIcoSize( skillView.current.children[0].offsetWidth);
    };

    //リサイズした際にstateIcoSizeを変更
    handleResize(handleIcoSize);

    //現在のtierと同じスキルを取得
    const resSlills = props.skills.filter((val) => val.tierId == props.tier.tierId);


    //tierによって背景色の指定
    let tierBg;
    switch (props.tier.tierId) {
        case 1:
            tierBg = 500;
            break;
        case 2:
            tierBg = 400;
            break;
        case 3:
            tierBg = 300;
            break;
        case 4:
            tierBg = 200;
            break;
        case 5:
            tierBg = 100;
            break;
        default:
            tierBg = 700;
            break;
    }

    return (
        <div css={styles.tier}>
            <div css={styles.label(tierBg)}>
                <h4 css={styles.rank}>Tier{props.tier.tierId}</h4>
                <p css={styles.description}>{props.tier.description}</p>
            </div>
            <div css={styles.detail}>
                <ul css={styles.ul} ref={skillView}>
                    {
                        resSlills.map((val) => {
                            return (
                                <li key={val.id}>
                                    {
                                        (val.className)?
                                        <Icon val={val} size={stateIcoSize}></Icon>:
                                        <TextIcon val={val} size={stateIcoSize}></TextIcon>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

const styles = {
    tier: css`
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 20px;


        @media (min-width: ${breakPoint.s}) {
            flex-direction: row;
            margin-bottom: 10px;
        }

        @media (min-width: ${breakPoint.m}) {

        }
    `,

    label:  (tierBg) => css`
        background: ${color.primary[tierBg]};
        font-size: 18px;
        color: ${color.white};
        margin-bottom: 5px;
        padding: 15px;

        @media (min-width: ${breakPoint.s}) {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 38%;
            font-size: 20px;
            margin-bottom: 0;
            padding: 10px 20px;
        }

        @media (min-width: ${breakPoint.sm}) {
            width: 28%;
        }

        @media (min-width: ${breakPoint.m}) {
            width: 28%;
            font-size: 20px;
            padding: 0 30px;
        }
    `,

    rank: css`
        margin-bottom: 5px;

        @media (min-width: ${breakPoint.m}) {
            margin-bottom: 10px;
        }
    `,

    description: css`
        font-size: 12px;

        @media (min-width: ${breakPoint.m}) {
            font-size: 12px;
        }
    `,

    detail:css`
        background: ${color.background};
        padding: 15px;


        @media (min-width: ${breakPoint.s}) {
            width: 62%;
            margin-left: 5px;
        }

        @media (min-width: ${breakPoint.sm}) {
            width: 72%;
            padding: 20px;
        }

        @media (min-width: ${breakPoint.m}) {
            width: 72%;
            padding: 30px;
        }
    `,

    ul: css`
        width: 100%;
        display: grid;
        justify-content: start;
        gap: 10px;
        grid-template-columns: repeat(5, minmax(34px, 1fr));

        @media (min-width: ${breakPoint.s}) {
            gap: 15px;
            grid-template-columns: repeat(6, minmax(34px, 1fr));
        }

        @media (min-width: ${breakPoint.sm}) {
            gap: 20px;
            grid-template-columns: repeat(7, minmax(34px, 1fr));
        }

        @media (min-width: ${breakPoint.m}) {
            gap: 30px;
            grid-template-columns: repeat(8, minmax(34px, 1fr));
        }
    `,
}

export default Tier;
