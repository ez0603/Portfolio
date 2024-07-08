import { css } from "@emotion/react";

export const layout = css`
  width: 100%; /* 아이폰 너비 */
  height: 100%; /* 아이폰 높이 */
  background-color: black;
  border-radius: 30px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const header = css`
  width: 50%;
  height: 6%; /* 헤더 높이 */
  background-color: black; /* 아이폰 상단 바 배경색 */
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const content = css`
  width: 95%;
  height: 97%;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const time = css`
position: relative;
top: -40px;
width: 95%;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const img = css`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20%;
`;