/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Image from "../../assets/img/file.jpg";
import backImage from "../../assets/img/background.jpg";
import { MdMailOutline } from "react-icons/md";
import { useState } from "react";
import spring from "../../assets/icon/Spring.png";
import css from "../../assets/icon/CSS3.png";
import aws from "../../assets/icon/AWS.png";
import firebase from "../../assets/icon/Firebase.png";
import html from "../../assets/icon/HTML5.png";
import java from "../../assets/icon/Java.png";
import js from "../../assets/icon/JavaScript.png";
import mysql from "../../assets/icon/MySQL.png";
import react from "../../assets/icon/React.png";
import { FaTools } from "react-icons/fa";

function ProfileMain(props) {
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
                  {isCopied && <p css={s.copiedMessage}>Coppy !</p>}
                </div>
              </div>
            </div>
            <div css={s.profileLayout}>
              <div css={s.profileBox}>
                <h1>ABOUT ME</h1>
                <div css={s.textbox}>
                  <h3>안녕하세요 !</h3>
                  <p>끊임없이 노력하는 웹 프론트엔드 개발자 이지언입니다.</p>
                  <div css={s.text}>
                    <span>
                      <b>첫 번째, </b>
                      인터랙티브한 페이지를 개발하는 것을 좋아하며 사용자에게
                      편리한 UI를 제공하는 웹을 만들기 위해 노력합니다.
                    </span>
                    <br />
                    <span>
                      <b>두 번째, </b>
                      새롭게 배운 기술을 업무에 적용하여 좀 더 나은 서비스를
                      구축해 나아가는것에 보람을 느낍니다.
                    </span>
                    <br />
                    <span>
                      <b>세 번째, </b>
                      팀프로젝트를 통해 함께 의견을 나누고 고민하며 프로젝트의
                      시작과 끝을 맺은 경험이 있습니다.
                    </span>
                  </div>
                  <div css={s.text}>
                      <b>마지막으로, </b>
                    저는 새로운 기술을 배우고 문제를 해결하는 과정에서 즐거움을
                    느끼고, <br /> 그 과정에서 지속적으로 학습하고 성장할 수
                    있는 기회를 제공해 주는 개발을 좋아합니다.
                  </div>
                </div>
              </div>
              <div css={s.skillLayout}>
                <h1>Skills</h1>
                <div css={s.skillBox}>
                  <div css={s.skillCategory}>
                    <h3>
                      <FaTools size={20} /> Front end
                    </h3>
                    <div css={s.iconBox}>
                      <div css={s.icon}>
                        <img src={css} alt="" />
                        <p>CSS3</p>
                      </div>
                      <div css={s.icon}>
                        <img src={react} alt="" />
                        <p>REACT</p>
                      </div>
                      <div css={s.icon}>
                        <img src={js} alt="" />
                        <p>JAVASCRIPT</p>
                      </div>
                      <div css={s.icon}>
                        <img src={html} alt="" />
                        <p>HTML5</p>
                      </div>
                    </div>
                  </div>
                  <div css={s.skillCategory}>
                    <h3>
                      <FaTools size={20} /> Back end
                    </h3>
                    <div css={s.iconBox}>
                      <div css={s.icon}>
                        <img src={java} alt="" />
                        <p>JAVA</p>
                      </div>
                      <div css={s.icon}>
                        <img src={spring} alt="" />
                        <p>SPRINGBOOT</p>
                      </div>
                      <div css={s.icon}>
                        <img src={aws} alt="" />
                        <p>AMAZON AWS</p>
                      </div>
                    </div>
                  </div>
                  <div css={s.skillCategory}>
                    <h3>
                      <FaTools size={20} /> DataBase
                    </h3>
                    <div css={s.iconBox}>
                      <div css={s.icon}>
                        <img src={mysql} alt="" />
                        <p>MYSQL</p>
                      </div>
                      <div css={s.icon}>
                        <img src={firebase} alt="" />
                        <p>FIREBASE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMain;
