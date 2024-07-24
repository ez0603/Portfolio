import { css } from "@emotion/react";

export const layout = css`
  position: absolute;
  width: 40%;
  height: 50%;
  left: 10%;
  /* background-color: #e75757; */
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const introduce = css`
  display: inline-block;
  white-space: pre-wrap; /* Handle line breaks */
  font-size: 60px; /* Set your desired font size */
  
`;

export const cursor = css`
  font-size: 60px; /* Set the cursor size larger than the font size */
  line-height: 0.8; /* Adjust line-height for better alignment */
  animation: blink-caret 0.75s step-end infinite;

  @keyframes blink-caret {
    from, to { opacity: 1 }
    50% { opacity: 0 }
  }
`;


