/** @jsxImportSource @emotion/react */
import * as s from "./style";
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

  return (
    <div css={s.layout}>
        <div css={s.content}>
          <div css={s.profileContainer}>
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
  );
}

export default ProfileMain;
