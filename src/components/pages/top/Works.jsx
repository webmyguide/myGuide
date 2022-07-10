/** @jsxRuntime classic */
/** @jsx jsx */
import React, {useRef, useState, useEffect} from 'react';
//components
import Title from "../../atoms/common/TitleH2";
import Slider from "../../molecules/works/Slider";
//css
import { css, jsx } from '@emotion/react';
import { breakPoint,color } from "../../../styles/constans";
import { section } from "../../../styles/section";
//data
import { list } from "../../../data/works";
//Helpers
import { getBreakPoint,replaceNumber } from "../../../js/Helpers";


//コンテンツタイトル
const titleName = 'Works';

const Works = (props) => {
    //useState　初期
    const [stateInnerSize,setInnerSize] = useState({width:'',height:''});//innerのサイズ
    const [stateBreakKey,setBreakKey] = useState(getBreakPoint());//ブレイクポイントのkey

    //useRef
    const inner = useRef(null);

    useEffect(() => {
        //innerの情報が無ければ何もしない
        if(!inner.current) return false;

        setInnerSize(handleGetSize());
    },[]);

    //リサイズの処理（リサイズ完了後に処理）
    var timeoutID = 0;
    var delay = 500;
    window.addEventListener('resize', () => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            //innerの情報が無ければ何もしない
            if(!inner.current) return false;

            setInnerSize(handleGetSize());

            setBreakKey(getBreakPoint());
        }, delay);
    }, false);

    const handleGetSize = () => {
        let innerRect = inner.current.getBoundingClientRect();
        let innerStyles = window.getComputedStyle(inner.current);

        return  {
            width: innerRect.width - replaceNumber(innerStyles.paddingLeft) - replaceNumber(innerStyles.paddingRight),
            height: innerRect.height - replaceNumber(innerStyles.paddingTop) - replaceNumber(innerStyles.paddingBottom)
        };
    }

    return (
        <section css={styles.section} id={titleName}>
            <div css={styles.inner} ref={inner}>
                <Title title={titleName} isWhite='true'></Title>
                <Slider list={list} size={stateInnerSize} breakKye={stateBreakKey}></Slider>
            </div>
        </section>
    );
};

const styles = {
    section: css`
        ${section.body}
        background: ${color.primary[800]};
        overflow: hidden;
    `,
    inner: css`
        ${section.inner}
    `,
}

export default Works;
