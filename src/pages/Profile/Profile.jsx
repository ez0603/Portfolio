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
			fdsf
		</div>
      </div>
    </div>
  );
}

export default Profile;
