/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
//components
import Top from './components/pages/top/Index'
import logo from './logo.svg';
//css
import { Global,css, jsx } from '@emotion/react';
import { breakPoint,maxWidth,color } from "./styles/constans";
import './App.css';
import './styles/destyle.css'

function App() {
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
