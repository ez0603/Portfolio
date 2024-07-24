/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const layout = css`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #dbdbdb;
  /* border-radius: 10px; */
  box-shadow: 
    -10px 0px 40px 10px rgba(0, 0, 0, 0.2), /* 더 진하고 퍼진 왼쪽 그림자 */
    0 2px 20px 10px rgba(0, 0, 0, 0.2); /* 기존 그림자 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 70px;
  overflow: hidden; /* 자식 요소가 컨테이너를 벗어나지 않도록 */

`;

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  z-index: 1; /* 자식 요소의 z-index 설정 */

`;
