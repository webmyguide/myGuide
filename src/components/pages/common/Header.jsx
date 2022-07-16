/** @jsxRuntime classic */
/** @jsx jsx */
import React, {useState,useLayoutEffect}  from 'react';

//components
import Logo from "../../atoms/common/Logo";
import Nav from "../../atoms/common/Nav";
import Menu from "../../atoms/common/Menu";
//css
import { css, jsx } from '@emotion/react';
import { breakPoint } from "../../../styles/constans";
//data
import { contentList } from "../../../data/constans";
//Helpers
import { handleResize } from "../../../js/Helpers";

const Header = (props) => {
    //useState　初期
    const [stateMenu,setMenu] = useState(false);//メニューの状態
    const [stateTitleDisplay,setTitleDisplay] = useState(true); //タイトルの状態
    const [stateMenuBg,setMenuBg] = useState(false); //menu背景の状態

    //useLayoutEffect
    useLayoutEffect(()=>{
        handleTitleHide();
        handleBgShow();
    });

    //メニュークリック処理
    const hundleMenu = () => setMenu(prevState => !prevState);

    //一定距離でタイトル消す処理
    const handleTitleHide = () => {
        //現在のスクロール位置
        let scrollY = window.scrollY;
        //一定距離
        let aboutOffsetTop = document.getElementById(contentList[1].name).offsetTop;

        setTitleDisplay( (scrollY < (aboutOffsetTop + 30)) ? true: false);
    };

    //一定距離でmenuの背景色を付ける処理
    const handleBgShow = () => {
        //現在のスクロール位置
        let scrollY = window.scrollY;
        //一定距離
        let worksOffsetTop = document.getElementById(contentList[2].name).offsetTop;

        setMenuBg( (scrollY > worksOffsetTop) ? true: false);
    };

    //スクロールした場合、開いてたメニューを閉じる & 一定距離でタイトル消す & 一定距離でmenuの背景色を付ける
    window.addEventListener('scroll', () => {
        setMenu(false);
        handleTitleHide();
        handleBgShow();
    });

    handleResize(() => {
        handleTitleHide();
        handleBgShow();
    });


    return (
        <header css={styles.header}>
            <div css={styles.inner}>
                <Logo strongTitle='MURAKAMI' title=' YU-KI' display={stateTitleDisplay}></Logo>
                <Nav stateMenu={stateMenu}></Nav>
                <Menu onClick={hundleMenu} stateMenu={stateMenu} bg={stateMenuBg}></Menu>
            </div>
        </header>
    );
};


const styles = {
    header: css`
        position: fixed;
        top: 0;
        z-index: 100;
        width: 100%;

    `,
    inner: css`
        position: relative;
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        padding: 30px 30px;

        @media (min-width: ${breakPoint.m}) {
            height: 108px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 90px 30px 40px;
        }
    `
}

export default Header;
