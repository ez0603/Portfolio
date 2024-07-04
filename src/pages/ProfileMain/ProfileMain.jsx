/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Image from "../../assets/img/file.jpg";
import backImage from "../../assets/img/background.jpg";
import { MdMailOutline } from "react-icons/md";
import { useState } from "react";

function ProfileMain(props) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "dlwldjs31232@naver.com";
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // 2초 후에 알림 메시지 숨김
    });
  };

  return (
    <div css={s.layout}>
      <div css={s.container}>
        <div css={s.content}>
          <div css={s.profileContainer}>
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
                  {isCopied && (
                    <p css={s.copiedMessage}>Email copied to clipboard!</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <h1>Profile</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMain;
