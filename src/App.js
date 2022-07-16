/** @jsxRuntime classic */
/** @jsx jsx */
import React,{useLayoutEffect} from 'react';
//components
import Top from './components/pages/top/Index'
import logo from './logo.svg';
//css
import { Global,css, jsx } from '@emotion/react';
import { breakPoint,maxWidth,color } from "./styles/constans";
import './App.css';
import './styles/destyle.css'

function App() {

    //headの変更
    useLayoutEffect(() => {
        document.title = 'Murakami Yu-ki portfolio site';
        document.querySelector('meta[name="description"]').setAttribute("content", "ポートフォリオサイトサイトです。react.jsで作成しています。");
      }, []);

    return (
        <>
            <Global styles={global}/>
            <Top></Top>
        </>
    );
}

const global = css`
  :global() {
    html{
        background: ${color.background};
        color: ${color.black};
        font-family: 'Noto Sans JP', sans-serif;
        }
        body{
            padding: 0 16px;
            @media (min-width: ${maxWidth}) {
                padding: 0;
            }
        }
    }
`;

export default App;
