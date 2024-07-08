/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./style";
import backImage from "../../assets/img/background.jpg";
import { MdMailOutline } from "react-icons/md";
import Image from "../../assets/img/file.jpg";

function Profile(props) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "dlwldjs31232@naver.com";
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div css={s.layout}>
      <div css={s.container}>
        <div css={s.aboutMe}>
          <div css={s.background}>
            <img src={backImage} alt="" />
          </div>
          <div css={s.img}>
            <img src={Image} alt="" />
            <h3>이지언</h3>
            <div css={s.messageBox}>
              <MdMailOutline
                size={50}
                color="white"
                onClick={handleCopyEmail}
              />
              <p>Email</p>
              {isCopied && <p css={s.copiedMessage}>Coppy !</p>}
            </div>
          </div>
        </div>
        <div css={s.produceLayout}>
          <h1>RESUME</h1>
          <div css={s.produce}>
            <h3>Name</h3>
            <p>이지언</p>
          </div>
          <div css={s.produce}>
            <h3>Birth Date</h3>
            <p>1999.06.03</p>
          </div>
          <div css={s.produce}>
            <h3>Email</h3>
            <p>dlwldjs3132@navber.com</p>
          </div>
          <div css={s.Education}>
            <h3>Education</h3>
            <span>2018</span>
            <p>동의대학교 기계자동차로봇부품공학부 입학</p>
            <span>2023</span>
            <p>동의대학교 로봇공학과 졸업</p>
            <span>2024.12 ~ 2024.05</span>
            <p>빅데이터 AI기반 헬스케어 플랫폼 개발 과정 수료</p>
            <span>2024.12 ~ 2024.07</span>
            <p>웹프론트엔드 과정 수료</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
