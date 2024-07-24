/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const fontFace = css`
  @font-face {
    font-family: 'SF_HambakSnow';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/SF_HambakSnow.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export const layout = css`
  ${fontFace}  /* Include fontFace here to ensure it is applied */
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 10px; */
`;

export const container = css`
  width: 100%;
  height: 100%;
  background-color: #445268;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 10px; */
  overflow: hidden;
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
  font-family: 'SF_HambakSnow', sans-serif;
  font-size: 120px;
  color: #ECE5E1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;

  span {
    position: relative;
    top: 0;
    display: inline-block;

  }
  
`;
