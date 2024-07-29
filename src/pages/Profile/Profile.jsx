/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Image from "../../assets/img/me.jpg";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

function Profile() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Error copying text: ", err));
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // 우클릭 메뉴 비활성화
  };

  return (
    <div css={s.layout}>
      <div css={s.container}>
        <div css={s.header}>
          <div css={s.personalInfoLayout}>
            <h1>이지언</h1>
            <div css={s.personalInfo}>
              <div css={s.iconText}>
                <MdEmail fontSize={20} />
                <span>dlwldjs3132@naver.com</span>
                <button
                  onClick={() => copyToClipboard("dlwldjs3132@naver.com")}
                  css={s.copy}
                >
                  Copy
                </button>
              </div>
              <div css={s.iconText}>
                <FaGithub fontSize={20} />
                <span>https://github.com/ez0603</span>
                <button
                  onClick={() => copyToClipboard("https://github.com/ez0603")}
                  css={s.copy}
                >
                  Copy
                </button>
              </div>
              {copied && (
                <div style={{ color: "green", marginTop: "10px" }}>Copied!</div>
              )}
            </div>
          </div>
          <div css={s.profileImage} onContextMenu={handleContextMenu}>
            <img src={Image} alt="" onContextMenu={handleContextMenu}/>
          </div>
        </div>
        <div css={s.sectionLayout}>
          <div css={s.section}>
            <h2>학력사항</h2>
            <div css={s.row}>
              <div css={s.label}>2018.03 ~ 2023.02</div>
              <div css={s.value}>
                <p>동의대학교</p>
                <p>로봇공학과</p>
              </div>
            </div>
            <div css={s.row}>
              <div css={s.label}>2015.03 ~ 2018.02</div>
              <div css={s.value}>
                <p>삼정고등학교</p>
                <p>이과 (자연계열)</p>
              </div>
            </div>
          </div>
          <div css={s.section}>
            <h2>교육사항</h2>
            <div css={s.row}>
              <div css={s.label}>2024.12 ~ 2024.05</div>
              <div css={s.value}>
                <p>빅데이터 AI기반 헬스케어 플랫폼 개발 과정 수료</p>
              </div>
            </div>
            <div css={s.row}>
              <div css={s.label}>2024.12 ~ 2024.07</div>
              <div css={s.value}>
                <p>웹프론트엔드 과정 수료</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
