/** @jsxImportSource @emotion/react */
import  { useState, useEffect } from 'react';
import * as s from "./style";

function Introduce() {
  const content = "안녕하세요\n웹 개발자 이지언입니다";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (isDeleting) {
      if (index >= 0) {
        timer = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, index));
          setIndex(index - 1);
        }, 100); // Speed of deleting
      } else {
        timer = setTimeout(() => {
          setDisplayText(''); // Clear all text
          setIndex(0); // Reset index
          setIsDeleting(false); // Switch to typing mode
        }, 1000); // Pause before restarting
      }
    } else {
      if (index < content.length) {
        timer = setTimeout(() => {
          setDisplayText((prev) => prev + content[index]);
          setIndex(index + 1);
        }, 100); // Typing speed
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Delay before deleting
      }
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, content]);

  return (
    <div css={s.layout}>
      <div css={s.introduce}>
        <span dangerouslySetInnerHTML={{ __html: displayText.replace(/\n/g, '<br/>') }} />
        <span css={s.cursor}>|</span>
      </div>
    </div>
  );
}

export default Introduce;
