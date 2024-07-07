/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const background = css`
  position: relative;
  width: 50%;
  height: 90%;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  box-shadow: 
    -10px 0px 40px 10px rgba(0, 0, 0, 0.2), /* 더 진하고 퍼진 왼쪽 그림자 */
    0 2px 8px rgba(0, 0, 0, 0.1); /* 기존 그림자 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const layout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: aqua;
`;
