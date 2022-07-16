/** @jsxRuntime classic */
/** @jsx jsx */
import React,{useState, useLayoutEffect} from 'react';
//components
import MvTitle from "../../atoms/common/MvTitle";
import MvScroll from "../../atoms/common/MvScroll";
import MvImg from "../../atoms/common/MvImg";
import Infobar from "../../atoms/common/Infobar";
//css
import { css, jsx } from '@emotion/react';
import { breakPoint } from "../../../styles/constans";
import { fideIn, fideOut } from "../../../styles/keyframes";
//data
import { info } from "../../../data/constans";
//Helpers
import { windowSize,getBreakPoint } from "../../../js/Helpers";


const Mv = (props) => {

    //定数の宣言
    const LEAD_WIDTH_PC = 452;
    const LEAD_PADDING_PC = 155;

    //useState　初期
    const [stateSize,setSize] = useState(getBreakPoint());//windowサイズの状態
    const [stateHead,setHead] = useState(true);//head部分の状態
    const [stateLeadPadding,setLeadPadding] = useState(LEAD_PADDING_PC);//head部分のpadding状態
    const [stateLeadPosition,setLeadPosition] = useState(0);//head部分のPosition状態

    //リサイズの処理（リサイズ完了後に処理）
    var timeoutID = 0;
    var delay = 500;
    window.addEventListener('resize', () => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            setSize(getBreakPoint());
        }, delay);
    }, false);

    //head部分を一定以上のスクロールで消す処理 & paddingの調整
    const handleDisplayHead = () => {
        let currentY = window.scrollY;
        let targetY = document.getElementById('About').offsetTop;


        if( (targetY - LEAD_PADDING_PC) < currentY){
            setHead(true);
            setLeadPosition(targetY - LEAD_PADDING_PC);
        }else {
            setHead(false);
            setLeadPosition(0);
        }
    }

    //サイズが3以上の場合
    useLayoutEffect(() => {
        if(stateSize >= 3) {
            handleDisplayHead();
            //スクロールした場合の判定
            window.addEventListener('scroll', handleDisplayHead);
            return () => window.removeEventListener('resize', handleDisplayHead);
        };
    },[]);


    return (
        <section css={styles.mv} id='Top'>
            <div css={styles.inner}>
                <div css={styles.head(stateHead,LEAD_WIDTH_PC,stateLeadPadding,stateLeadPosition)}>
                    <MvTitle></MvTitle>
                    <MvScroll></MvScroll>
                </div>
                <MvImg leadSize={LEAD_WIDTH_PC}></MvImg>
                {info && <Infobar text={info}></Infobar>}
            </div>
        </section>
    );
};

const styles = {
    mv: css`
        width: 100%;
    `,
    inner: css`
        width: 100%;
        padding: 18vh 0 0 30px;

        @media (min-width: ${breakPoint.s}) {
            display: flex;
            justify-content: space-between;
            padding: 0 30px;
        }

        @media (min-width: ${breakPoint.m}) {
            padding: 0 0 0 48vw;
        }
    `,
    head: (stateHead,widthPc,padding,position) => css`
        @media (min-width: ${breakPoint.s}) {
            width: 63vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            margin: 0 0 0 calc(50% - 50vw);
            padding: 40vh 0 0 calc(50vw - 50%);
        }

        @media (min-width: ${breakPoint.m}) {
            position: ${stateHead? 'absolute': 'fixed'};
            justify-content: center;
            top:  ${position}px;
            left: 50%;
            /* transform: translateX(-50%); */
            transform: translateX(calc(-8px - 452px));
            width: ${widthPc}px;
            height: 100vh;
            padding: ${padding}px 0 0;
        }
    `,
}

export default Mv;
