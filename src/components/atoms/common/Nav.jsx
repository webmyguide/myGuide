/** @jsxRuntime classic */
/** @jsx jsx */
import React,{useState, useEffect, useMemo} from 'react';
//react-scroll
import { Link, animateScroll as scroll } from "react-scroll";
//css
import { css, jsx } from '@emotion/react';
import { breakPoint,color } from "../../../styles/constans";
import { fideIn, fideOut, moveUp, moveDown } from "../../../styles/keyframes";
//data
import { contentList } from "../../../data/constans";
//Helpers
import { handleResize } from "../../../js/Helpers";

const Nav = (props) => {

    //useState　初期
    const [stateActiveContent,setActiveContent] = useState(contentList[0].name);
    const [stateContentPosY,setContentPosY] = useState();

    //初期表示
    useEffect(() => {
        handleContentPosY();
    },[])

    //コンテンツの位置を取得
    const handleContentPosY = () => {
        let posY = contentList.map((val) =>{
            let content = document.getElementById(val.name);
            if(!content) return false;

            return {
                name: val.name,
                top : document.getElementById(val.name).offsetTop,
                bottom : document.getElementById(val.name).offsetTop + document.getElementById(val.name).offsetHeight,
            };
        });

        setContentPosY(posY);
    }

    //現在のコンテンツを取得
    const handleCurrentContent = () => {
        if(!stateContentPosY) return false;

        //現在のスクロール位置
        let scrollY = window.scrollY;
        let currentContent;

        stateContentPosY.map((val) => {
            if( (val.top <= scrollY) && (val.bottom >= scrollY) ) currentContent = val.name;
        });

        setActiveContent(currentContent);
    }


    //stateContentPosYが更新があった場合
    useMemo(() => {
        handleCurrentContent()
    },[stateContentPosY])


    //スクロールした場合の処理
    document.addEventListener('scroll', handleCurrentContent);

    handleResize(handleContentPosY);

    return (
        <nav css={styles.nav(props.stateMenu)}>
            <div css={styles.inner(props.stateMenu)}>
                <ul css={styles.list(props.stateMenu)}>
                    {
                        contentList.map((val) => {
                            return (
                                <li css={(val.name == stateActiveContent)? styles.item(true,props.stateMenu):styles.item(false,props.stateMenu)} key={val.id}>
                                    <Link to={val.name} smooth={true}>{val.name}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </nav>
    );
};

const styles = {
    nav: (stateMenu) => css`
        position: fixed;
        right: 15px;
        top: 15px;
        width: 145px;
        display: block;
        text-align: center;
        z-index: 100;
        // visibility: ${stateMenu? 'visible': 'hidden'};
        animation: ${stateMenu ? fideIn.up: fideOut.down} 0.4s ease 1 forwards;
        // transition: 0.6s;

        @media (min-width: ${breakPoint.s}) {
            right: 20px;
            top: 20px;
            width: 175px;
        }

        @media (min-width: ${breakPoint.m}) {
            position: inherit;
            right: 0;
            top: 0;
            width: auto;
            padding: 0;
            visibility: visible;
        }
    `,
    inner: (stateMenu) => css`
        width: 100%;
        position: relative;
        z-index: 1;
        padding: 61px 0 40px;


        @media (min-width: ${breakPoint.m}) {
            padding: 0;
        }

        &::after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            border-radius: 20px;
            background: ${color.background};

            @media (min-width: ${breakPoint.m}) {
                content: none;
            }
        }
    `,
    list: (stateMenu) => css`
        visibility: ${stateMenu? 'visible': 'hidden'};
        transform: scale(1);
        // transition: 0.3s;

        @media (min-width: ${breakPoint.m}) {
            visibility: ${stateMenu? 'visible': 'hidden'};
            display: flex;
            align-items: center;
        }
    `,
    item: (active = null,stateMenu) => css`
        display: block;

        a {
            display: block;
            transform: translateY(5px);
            color: ${active? color.primary[800]: '#222222'};
            line-height: 1.8;
            transition: 0.4s color;
            text-decoration: none;
            padding: 3px;
            cursor: pointer;
            animation: ${stateMenu ? moveUp[5]: moveDown[5]} 0.9s ease 1 forwards;

            @media (min-width: ${breakPoint.s}) {
                font-size: 16px;
                padding: 5px;
            }

            @media (min-width: ${breakPoint.m}) {
                font-size: 16px;
                font-weight: 600;
                padding: 10px;
            }
        }
    `,
}

export default Nav;
