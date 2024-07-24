import { css } from "@emotion/react";

export const layout = css`
  position: relative;
  width: 100%;
  height: 100%;
  /* border: 1px solid #dbdbdb; */
  /* border-radius: 10px; */
  box-shadow: 
  inset 30px 0 30px -20px rgba(0, 0, 0, 0.2), /* 왼쪽에만 안쪽 그림자 */
  0 2px 30px 10px rgba(0, 0, 0, 0.2); /* 기존 바깥쪽 그림자 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* 자식 요소가 컨테이너를 벗어나지 않도록 */
`;

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
  border-radius: 10px;
  z-index: 1; /* 자식 요소의 z-index 설정 */
  background-color: white; /* 확인을 위해 백그라운드 컬러 추가 */
`;