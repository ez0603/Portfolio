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
  ${fontFace} 
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    left: 15px; 
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #6d6d6d71;
  }
`;


export const container = css`
  width: 100%;
  height: 100%;
  background-color: #0F2742;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;


export const content = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  flex-direction: column;
  `;
  
export const subheadingLayout = css`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  flex-direction: column;
  position: relative;
  top: 23%;

  `;

  export const subheading = css`
    width: 100%; 
    height: 10%; 
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-radius: 50%; 
    border: 2px solid white; */
    position: relative;
    flex-direction: column;
    top: 35%;
  
    span {
      font-family: 'SF_HambakSnow', sans-serif;
      color: #DEB62B; 
      font-size: 18px; 
      font-weight: 400;
    }
  `;

export const text = css`
  width: 90%;
  height: 70%;
  font-family: 'SF_HambakSnow', sans-serif;
  font-size: 100px;
  color: #DEB62B;
  position: relative;
  text-align: center;
  border-radius: 50%;
  background-color: transparent;
  z-index: 0; /* 부모 요소가 자식 요소보다 앞에 오도록 설정 */
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    padding: 7px; /* 테두리 두께 */
    background: linear-gradient(140deg, rgba(255, 255, 255, 0), rgba(245, 171, 12, 1));
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude; /* 테두리 영역 제외 */
    z-index: -1; /* 텍스트 뒤로 배치 */
  }
`;

export const nameLayout = css`
width: 100%;
height: 80%;
  font-size: 50px;
  color: #DEB62B;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  margin: 0;

  span {
    position: relative;
    top: 30%;
    display: inline-block;
  }
  
`;
