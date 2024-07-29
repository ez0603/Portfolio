/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Gumeonggage from "../../assets/img/구멍가게.svg";
import TableMaid from "../../assets/img/대시보드.png";

function Project(props) {
  const GumeongGageGitClick = () => {
    window.open("https://github.com/Novel-Ideas", "_blank");
  };

  const TableMaidGitClick = () => {
    window.open("https://github.com/table-maid", "_blank");
  };

  const GumeongGageNotionClick = () => {
    window.open(
      "https://pushy-unicorn-ed8.notion.site/832133b43b7642c9a0e1822508bf2eaa?pvs=4",
      "_blank"
    );
  };

  const TableMaidNotionClick = () => {
    window.open(
      "https://pushy-unicorn-ed8.notion.site/832133b43b7642c9a0e1822508bf2eaa?pvs=4",
      "_blank"
    );
  };

  return (
    <div css={s.layout}>
      <div css={s.container}>
        <div css={s.header}>
          <p>My Project</p>
        </div>
        <div css={s.content}>
          <div css={s.contentBox}>
            <div css={s.img}>
              <img src={Gumeonggage} alt="" />
            </div>
            <div css={s.textBox}>
              <div css={s.text}>
                <h3>구멍가게</h3>
                <p>매장용 키오스크 "구멍가게" 입니다.</p>
                <span>
                  #REACT #CSS3 #SPRINGBOOT #JAVA #AWS #FIREBASE #MYSQL
                </span>
              </div>
              <div css={s.button}>
                <button onClick={GumeongGageGitClick}>GitHub</button>
                <button onClick={GumeongGageNotionClick}>
                  프로젝트 기술서
                </button>
              </div>
            </div>
          </div>
          <div css={s.contentBox}>
            <div css={s.img}>
              <img src={TableMaid} alt="" />
            </div>
            <div css={s.textBox}>
              <div css={s.text}>
                <h3>Table Maid</h3>
                <p>
                  사용자의 휴대폰 QR코드로 음식 주문이 가능한 <br />
                  비대면 주문 결제 서비스 "Table Maid"입니다.
                </p>
                <span>#REACT #CSS3 #SPRINGBOOT #JAVA #AWS #MYSQL</span>
              </div>
              <div css={s.button}>
                <button onClick={TableMaidGitClick}>GitHub</button>
                <button onClick={TableMaidNotionClick}>프로젝트 기술서</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
