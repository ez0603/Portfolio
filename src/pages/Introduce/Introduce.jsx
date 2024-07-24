/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
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
        // 완전히 삭제 완료 후, 초기화
        timer = setTimeout(() => {
          setDisplayText(''); // 남은 모든 텍스트 제거
          setIndex(0); // 초기화
          setIsDeleting(false); // 타이핑 모드로 전환
        }, 1000); // 다음 타이핑 전 대기 시간
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
        }, 2000); // 삭제 전 대기 시간
      }
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, content]);

  return (
    <div css={s.layout}>
      <div css={s.introduce} dangerouslySetInnerHTML={{ __html: displayText.replace(/\n/g, '<br/>') + '<span class="cursor">|</span>' }} />
    </div>
  );
}

export default Introduce;
