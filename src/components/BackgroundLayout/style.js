import { css } from "@emotion/react";

export const background = css`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -999;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
`;

export const layout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column; /* 기본적으로 세로 배치 */

  @media (min-width: 769px) {
    flex-direction: row; /* 화면이 클 때 가로 배치 */
  }
`;
