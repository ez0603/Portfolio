/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import * as s from "./style";

function Introduce() {
  const content = "안녕하세요 \n신입 웹 개발자 이지언입니다.";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (isDeleting) {
      if (index >= 0) {
        timer = setTimeout(() => {
          setDisplayText(content.slice(0, index));
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
          setDisplayText(content.slice(0, index + 1));
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

  const createHighlightedText = () => {
    const highlightedText = "신입 웹 개발자 이지언";
    const regex = new RegExp(`(${highlightedText})`, 'g');
    const parts = displayText.split(regex);

    return parts.map((part, i) =>
      part === highlightedText ? (
        <span key={i} css={s.highlight}>{part}</span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <div css={s.layout}>
      <div css={s.introduce}>
        <span>{createHighlightedText()}</span>
        <span css={s.cursor}>|</span>
      </div>
    </div>
  );
}

export default Introduce;
