/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Ipthone from "../../components/Ipthone/Ipthone";

function Profile(props) {

  return (
    <div css={s.layout}>
      <div css={s.container}>
        <div css={s.aboutMe}>
          <div css={s.background}>
            <Ipthone/>
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
            <p>dlwldjs3132@naver.com</p>
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
