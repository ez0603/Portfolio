/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const globalStyles = css`
  @font-face {
    font-family: 'RixInooAriDuriR';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/RixInooAriDuriR.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html, body {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }
`;

export const layout = css`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const container = css`
  width: 80%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const content = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
`;

export const text = css`
  height: 100%;
  font-family: 'RixInooAriDuriR', sans-serif;
  font-size: 150px;
  color: #FF7777;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: relative;
    top: 20px;
    display: inline-block;

    animation: bounce 1.2s ease infinite alternate;
    text-shadow: 0 1px 0 #CCC,
                 0 2px 0 #CCC,
                 0 3px 0 #CCC,
                 0 4px 0 #CCC,
                 0 5px 0 #CCC,
                 0 6px 0 transparent,
                 0 7px 0 transparent,
                 0 8px 0 transparent,
                 0 9px 0 transparent,
                 0 10px 10px rgba(0, 0, 0, 0.4);
  }

  span:nth-of-type(2) { animation-delay: 0.1s; }
  span:nth-of-type(3) { animation-delay: 0.2s; }
  span:nth-of-type(4) { animation-delay: 0.3s; }
  span:nth-of-type(5) { animation-delay: 0.4s; }
  span:nth-of-type(6) { animation-delay: 0.5s; }
  span:nth-of-type(7) { animation-delay: 0.6s; }
  span:nth-of-type(8) { animation-delay: 0.7s; }

  @keyframes bounce {
    100% {
      top: -20px;
      text-shadow: 0 1px 0 #CCC,
                   0 2px 0 #CCC,
                   0 3px 0 #CCC,
                   0 4px 0 #CCC,
                   0 5px 0 #CCC,
                   0 6px 0 #CCC,
                   0 7px 0 #CCC,
                   0 8px 0 #CCC,
                   0 9px 0 #CCC,
                   0 50px 25px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const linksBox = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const links = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  li {
    list-style: none;
  }

  a {
    color: #f5f5f5;
    text-decoration: none;
    font-size: 60px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    position: relative;
    display: inline-block;
    overflow: hidden;
    padding: 10px 20px;
    background-color: transparent;
    border-radius: 5px;
    text-transform: uppercase;
    transition: color 0.6s ease;
    -webkit-text-stroke: 2px #FF7777;
  }

  a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FF7777;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s ease;
  }

  a:hover::before {
    transform: scaleX(1);
  }

  a:hover {
    color: #FF7777;
  }
`;
