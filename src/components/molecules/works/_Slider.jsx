/** @jsxRuntime classic */
/** @jsx jsx */
import React,{useState, useMemo, useEffect, useLayoutEffect} from 'react';
//components
import Items from "../../atoms/works/Items";
//css
import { css, jsx } from '@emotion/react';
import { breakPoint,color } from "../../../styles/constans";
//Helpers
import { windowSize,getBreakPoint } from "../../../js/Helpers";

const Slider = (props) => {

    //定数の宣言
    const CLONE_COUNT = 2;
    const LIST_LENGTH = props.list.length;
    const SET_TIME = 600;

    //useState　初期
    const [stateWindowWidth,setWindowWidth] = useState(windowSize());//windowSize
    const [stateBreakKey,setBreakKey] = useState(getBreakPoint());//ブレイクポイントのkey
    const [stateDoubleClick,setDoubleClick] = useState(false);//二重クリック防止用のフラグ
    const [statePanelSize,setPanelSize] = useState({width:'',height:''});//ulのサイズ
    const [stateItemsSize,setItemsSize] = useState({width:'',height:''});//liのサイズ
    const [stateItemsLength,setItemsLength] = useState(LIST_LENGTH);//liの数
    const [stateItemsCurrentIndex,setItemsCurrentIndex] = useState(1);//現在の数
    const [stateTranslateX,setTranslateX] = useState(CLONE_COUNT);//X軸の移動距離
    const [stateList,setList] = useState(props.list);//データリスト
    const [stateAnimationTime,setAnimationTime] = useState(SET_TIME);//アニメーションスピード

    useLayoutEffect(() => {
        let targetSlider = document.getElementById('slider');
        let ul = targetSlider.querySelectorAll('[data-slider="panel"]');
        let li = ul[0].children;

        //liの前後に追加するクローン作成
        let cloneList = [];
        let frontClone = [];
        let rearClone = [];
        let countFrontClone = 0;
        let countRearClone = 0;
        let newList = [];
        //クローンの作成
        cloneList = [...stateList];//上書きしないように新しい配列
        stateList.map((val,index) => {
            if(　(cloneList.length - CLONE_COUNT) <= index ) {
                frontClone[countFrontClone] = {...val};
                frontClone[countFrontClone].clone = val.id + 'clone';
                countFrontClone++;
            }else if( CLONE_COUNT > index ) {
                rearClone[countRearClone] = {...val};
                rearClone[countRearClone].clone = val.id + 'clone';
                countRearClone++;
            }
        })

        //統合
        newList = [...frontClone,...stateList,...rearClone];
        setList(newList);


        //サイズ・数の取得
        setPanelSize({
            width:li[0].clientWidth*newList.length,
            height:ul[0].clientHeight
        });
        setItemsSize({
            width:li[0].clientWidth,
            height:li[0].clientHeight
        });
        setItemsLength(newList.length);

        //初期位置に移動
        setItemsCurrentIndex(CLONE_COUNT+1);

    },[]);


    //prevの処理
    const handelePrev = () => {
        //処理中の場合、何もしない
        if(stateDoubleClick) return false;

        //二重処理の防止フラグ 開始
        setDoubleClick(true);

        let index = stateItemsCurrentIndex;

        //PCだったら2追加
        (getBreakPoint() >= 3 )? index = index - 2: index--

        setItemsCurrentIndex(index);

        //二重処理の防止フラグ 終了
        setDoubleClick(false);
    }

    //nextの処理
    const handeleNext = () => {
        //処理中の場合、何もしない
        if(stateDoubleClick) return false;

        //二重処理の防止フラグ 開始
        setDoubleClick(true);

        let index = stateItemsCurrentIndex;

        //PCだったら2追加
        (getBreakPoint() >= 3 )? index = index + 2: index++;

        //ラスト以上の場合
        if( (index) > stateItemsLength - 1) index = CLONE_COUNT + 1;

        setItemsCurrentIndex(index);

        //二重処理の防止フラグ 終了
        setDoubleClick(false);
    }

    //移動の処理
    const handeleMove = useMemo(() => {
        //処理中の場合、何もしない
        if(stateDoubleClick) return false;

        //二重処理の防止フラグ 開始
        setDoubleClick(true);

        let targetIndex = stateItemsCurrentIndex;


        setTranslateX(
            (targetIndex-1) * stateItemsSize.width * -1 + 'px'
        );


        //最初より前の場合
        if(targetIndex <= CLONE_COUNT){


            console.log('targetIndex' + stateAnimationTime);
            setTimeout( function() {
                setAnimationTime(0);
                console.log(stateAnimationTime);
                console.log('bbbbbbbb');
                console.log('targetIndex2' + stateAnimationTime);
                targetIndex = stateItemsLength - CLONE_COUNT;
                console.log('setTimeout:' + targetIndex);

                setItemsCurrentIndex(targetIndex);


                //二重処理の防止フラグ 終了
                setDoubleClick(false);
            }, SET_TIME );
        }else {
            console.log(stateAnimationTime);
            setAnimationTime(SET_TIME);
            //二重処理の防止フラグ 終了
            setDoubleClick(false);
        }


    },[stateItemsCurrentIndex])


    return (
        <div css={styles.slider(statePanelSize)} id='slider'>
            <ul css={styles.list(statePanelSize,stateTranslateX,stateAnimationTime)} data-slider="panel">
                {stateList.map((val) => {
                    return (
                        <Items key={(val.clone)? val.clone: val.id} val={val}></Items>
                    );
                })}
            </ul>
            <div css={styles.current}>{stateItemsCurrentIndex}/{stateItemsLength}</div>
            <div css={styles.prev} onClick={handelePrev}>&lt;</div>
            <div css={styles.next} onClick={handeleNext}>&gt;</div>
        </div>
    );
};

const styles = {
    slider: (statePanelSize) => css`
        position: relative;
        min-height: ${statePanelSize.height}px;
    `,
    list: (statePanelSize,stateTranslateX,stateAnimationTime) => css`
        position: absolute;
        display: flex;
        top: 0;
        left: 0;
        width: ${statePanelSize.width}px;
        transform: translateX(${stateTranslateX});
        transition: ${stateAnimationTime}ms;
        margin: 0 calc(50% - 50vw);

        @media (min-width: ${breakPoint.m}) {
            padding: 0 calc(50vw - 50%);
        }
    `,
    next: css`
        position: absolute;
        bottom: -40px;
    `,
    prev: css`
        position: absolute;
        bottom: -20px;
    `,
    current: css`
        position: absolute;
        bottom: -60px;
    `,
}

export default Slider;
