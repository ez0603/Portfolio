import { css } from "@emotion/react";

export const layout = css`
  position: absolute;
  width: 40%;
  height: 50%;
  left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const introduce = css`
  display: inline-block;
  white-space: pre-wrap;
  font-size: 60px;
  font-weight: 700;
`;

export const cursor = css`
  font-size: 60px;
  line-height: 0.8;
  animation: blink-caret 0.75s step-end infinite;

  @keyframes blink-caret {
    from, to { opacity: 1 }
    50% { opacity: 0 }
  }
`;

export const highlight = css`
  background-color: #212842; /* 배경 색상 설정 */
  border-radius: 5px; /* 둥근 모서리 설정 */
  padding: 0 5px; /* 여백 추가 */
  color: #E6D7C4; 
`;
