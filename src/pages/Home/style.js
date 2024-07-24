/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const fontFace = css`
  @font-face {
    font-family: "SF_HambakSnow";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/SF_HambakSnow.woff")
      format("woff");
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
    content: "";
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
  background-color: #212842;
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
  top: 17%;

  span {
    font-family: "SF_HambakSnow", sans-serif;
    color: #E6D7C4;
    font-size: 18px;
    font-weight: 400;
  }
`;

export const text = css`
  width: 85%;
  height: 70%;
  font-family: "SF_HambakSnow", sans-serif;
  font-size: 100px;
  color: #E6D7C4;
  position: relative;
  text-align: center;
  border-radius: 50%;
  background-color: transparent;
  z-index: 0; /* 부모 요소가 자식 요소보다 앞에 오도록 설정 */
  display: flex;
  align-items: center;
  justify-content: center;

  /* &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    padding: 8px;
    background: linear-gradient(
      140deg,
      rgba(255, 255, 255, 0),
      #ABF5D8
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    z-index: -1; 
  } */

`;

export const nameLayout = css`
  width: 100%;
  height: 80%;
  font-size: 50px;
  color: #E6D7C4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 23px;
    font-weight: 300;
    color: white;
    margin: 0;
  }


`;
