/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import * as s from "./style";

function Introduce() {
  const content = "안녕하세요\n웹 개발자 이지언입니다";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < content.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + (content[index] === "\n" ? "<br/>" : content[index]));
        setIndex(index + 1);
      }, 100); // Typing speed

      return () => clearTimeout(timer);
    }
  }, [index, content]);

  return (
    <div css={s.layout}>
      <div css={s.introduce} dangerouslySetInnerHTML={{ __html: displayText + '<span class="cursor">|</span>' }} />
    </div>
  );
}

export default Introduce;
