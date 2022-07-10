/** @jsxRuntime classic */
/** @jsx jsx */
import React,{useRef, useState, useMemo, useEffect, useLayoutEffect} from 'react';
//components
import Items from "../../atoms/works/Items";
//css
import { css, jsx } from '@emotion/react';
import { breakPoint,color } from "../../../styles/constans";
//Helpers
import { windowSize,getBreakPoint,replaceNumber  } from "../../../js/Helpers";

const Slider = (props) => {

    // console.log('sizeInner: ' + props.size.width);

    //定数の宣言
    const CLONE_COUNT = 0;
    const LIST_LENGTH = props.list.length;
    const SET_TIME = 600;
    const COLUMN_PC = 3;
    const COLUMN_TB = 2;
    const COLUMN_SP = 1;
    const MARGIN = 60;


    //useRef
    const slider = useRef(null);
    const panel = useRef(null);
    const items = useRef(null);
    const navigation = useRef(null);

    //useState　初期
    const [stateWindowWidth,setWindowWidth] = useState(windowSize());//windowSize
    const [stateDoubleClick,setDoubleClick] = useState(false);//二重クリック防止用のフラグ
    const [stateViewSize,setViewSize] = useState({width:'',height:''});//viewのサイズ
    const [statePanelSize,setPanelSize] = useState({width:'',height:''});//ulのサイズ
    const [stateItemsSize,setItemsSize] = useState({width:'',height:'',margin:MARGIN});//liのサイズ
    const [stateItemsLength,setItemsLength] = useState(LIST_LENGTH);//liの数
    const [stateItemsCurrentIndex,setItemsCurrentIndex] = useState(1);//現在の数
    const [stateTranslateX,setTranslateX] = useState(CLONE_COUNT);//X軸の移動距離
    const [stateList,setList] = useState(props.list);//データリスト
    const [stateAnimationTime,setAnimationTime] = useState(SET_TIME);//アニメーションスピード


    useEffect(() => {

    },[]);


    //prevの処理
    const handelePrev = () => {
        //処理中の場合、何もしない
        if(stateDoubleClick) return false;

        let index = stateItemsCurrentIndex;
        let lastIndex = stateItemsLength;

        //デバイス毎に移動距離を分ける
        if(props.breakKye >= 3 ){
            index = index - COLUMN_PC;
            lastIndex = Math.floor((stateItemsLength/COLUMN_PC))*COLUMN_PC + 1;
        }else if ( props.breakKye == 2 ) {
            index = index - COLUMN_TB;
            lastIndex = Math.floor((stateItemsLength/COLUMN_TB))*COLUMN_TB + 1;
        }else if ( props.breakKye == 1 ) {
            index--;
        }

        if(index < CLONE_COUNT + 1) index = lastIndex;

        setItemsCurrentIndex(index);

    }

    //nextの処理
    const handeleNext = () => {
        //処理中の場合、何もしない
        if(stateDoubleClick) return false;

        let index = stateItemsCurrentIndex;

        //デバイス毎に移動距離を分ける
        if(props.breakKye >= 3 ){
            index = index + COLUMN_PC;
        }else if ( props.breakKye == 2 ) {
            index = index + COLUMN_TB;
        }else if ( props.breakKye == 1 ) {
            index++;
        }

        //ラスト以上の場合
        if( (index) > stateItemsLength) index = CLONE_COUNT + 1;

        setItemsCurrentIndex(index);
    }

    //移動の処理
    const handeleMove = () => {
        //処理中の場合、何もしない
        if(stateDoubleClick) return false;
        // console.log('handeleMove');
        //二重処理の防止フラグ 開始
        setDoubleClick(true);

        let targetIndex = stateItemsCurrentIndex;

        let moveX = (targetIndex-1) * (stateItemsSize.width + stateItemsSize.margin);
        moveX = (moveX < 1)?  moveX - (stateItemsSize.margin/2):  moveX * -1  - (stateItemsSize.margin/2);
        setTranslateX(
            moveX  + 'px'
        );

        setTimeout( function() {
            //二重処理の防止フラグ 終了
            setDoubleClick(false);
        }, stateAnimationTime );

    }

    //indexが変更あった場合の処理
    const changeIndex = useMemo(() => {
        //処理中の場合、何もしない
        if(stateDoubleClick) return false;

        // console.log('changeIndex');

        if( (props.breakKye == 3) && (stateItemsCurrentIndex%COLUMN_PC != 1) && (stateItemsCurrentIndex >= COLUMN_PC)){
            setItemsCurrentIndex( stateItemsCurrentIndex - stateItemsCurrentIndex%COLUMN_PC  + 1);
        }else if( (props.breakKye == 2) && (stateItemsCurrentIndex%COLUMN_TB != 1) && (stateItemsCurrentIndex >= COLUMN_TB)){
            setItemsCurrentIndex( stateItemsCurrentIndex - stateItemsCurrentIndex%COLUMN_TB + 1);
        }else {
            handeleMove();
        }
    },[stateItemsCurrentIndex,stateItemsSize])

    //itemsサイズが変更あった場合の処理
    // const changeItemsSize = useMemo(() => {
    //     if( (props.breakKye == 3) && (stateItemsCurrentIndex%COLUMN_PC != 1) && (stateItemsCurrentIndex >= COLUMN_PC)){
    //         setItemsCurrentIndex( stateItemsCurrentIndex - stateItemsCurrentIndex%COLUMN_PC  + 1);
    //     }else if( (props.breakKye == 2) && (stateItemsCurrentIndex%COLUMN_TB != 1) && (stateItemsCurrentIndex >= COLUMN_TB)){
    //         setItemsCurrentIndex( stateItemsCurrentIndex - stateItemsCurrentIndex%COLUMN_TB + 1);
    //     }else {
    //         handeleMove();
    //     }
    // },[stateItemsSize])

    //サイズ関連の処理
    const handeleSize = useMemo(() => {
        //sliderの情報が無ければ何もしない
        if(!slider.current) return false;

        //viewの高さの設定
        setViewSize({
            height:panel.current.clientHeight + navigation.current.clientHeight
        });

        //panelとitemsのサイズの設定
        let li = panel.current.children;
        let liStyles = window.getComputedStyle(li[0]);
        let liWidth;
        if(props.breakKye == 1){
            liWidth = props.size.width;
        }else if (props.breakKye == 2) {
            liWidth = (props.size.width - (replaceNumber(liStyles.marginLeft)*2))/2;
        }else if (props.breakKye == 3) {
            liWidth = (props.size.width - (replaceNumber(liStyles.marginLeft)*4))/3;
        }

        setPanelSize({
            width: (liWidth + replaceNumber(liStyles.marginLeft) + replaceNumber(liStyles.marginRight))*stateItemsLength
        });

        setItemsSize({
            width:liWidth,
            margin: replaceNumber(liStyles.marginLeft) + replaceNumber(liStyles.marginRight),
        });



    },[props.size.width])


    return (
        <div css={styles.slider(stateViewSize)} ref={slider}>
            <ul css={styles.list(statePanelSize,stateTranslateX,stateAnimationTime)} ref={panel}>
                {stateList.map((val) => {
                    return (
                        <Items key={(val.clone)? val.clone: val.id} val={val} size={stateItemsSize}></Items>
                    );
                })}
            </ul>
            <div css={styles.navigation} ref={navigation}>
                {stateItemsCurrentIndex}/{stateItemsLength}
                <div css={styles.btnArea}>
                    <div css={styles.btn(stateDoubleClick)} onClick={handelePrev} data-text="&lt;"></div>
                    <div css={styles.btn(stateDoubleClick)} onClick={handeleNext} data-text="&gt;"></div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    slider: (stateViewSize) => css`
        position: relative;
        //min-height: ${stateViewSize.height}px;
        // overflow: hidden;
    `,
    list: (statePanelSize,stateTranslateX,stateAnimationTime) => css`
        // position: absolute;
        display: flex;
        top: 0;
        left: 0;
        width: ${statePanelSize.width}px;
        transform: translateX(${stateTranslateX});
        transition: ${stateAnimationTime}ms;
        //margin: 0 calc(50% - 50vw);

        @media (min-width: ${breakPoint.m}) {
            //padding: 0 calc(50vw - 50%);
        }
    `,
    navigation: css`
        //position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        color: ${color.white};
        font-weight: bold;
        padding-top: 30px;
    `,
    btnArea: css`
        display: flex;
        align-items: center;
    `,
    btn: (flg) => css`
        position: relative;
        width: 44px;
        height: 44px;
        background: ${flg? color.primary[300]:color.primary[600]};
        border-radius: 50px;
        margin: 0 15px;
        cursor: ${flg? 'wait': 'pointer'};

        &:after {
            content: attr(data-text);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scaleX(0.5);
            font-size: 24px;
        }
    `,

}

export default Slider;
