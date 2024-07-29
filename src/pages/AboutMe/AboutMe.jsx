/** @jsxImportSource @emotion/react */
import * as s from "./style";

function AboutMe(props) {
  return (
    <div css={s.layout}>
      <div css={s.header}>
        <p>
          내가 추구하는 <b>가치</b>
        </p>
      </div>
      <div css={s.container}>
        <div css={s.tagLayout}>
          <p>#사용자가 편리한 UI</p>
          <p>#더 나은 서비스 구축</p>
          <p>#학습하고 성장할 수 있는 기회</p>
        </div>
        <div css={s.content}>
          <div css={s.text}>
            <span>
              <b>첫 번째, </b>
              <br />
              인터랙티브한 페이지를 개발하는 것을 좋아하며{" "}
              <b>사용자에게 편리한 UI</b>를 제공하는 웹을 만들기 위해
              노력합니다.
            </span>
            <br />
            <span>
              <b>두 번째, </b>
              <br />
              새롭게 배운 기술을 업무에 적용하여 <b>더 나은 서비스</b>를
              구축해 나아가는것에 보람을 느낍니다.
            </span>
            <br />
            <span>
              <b>세 번째, </b>
              <br />
              팀프로젝트를 통해 함께 의견을 나누고 고민하며 프로젝트의{" "}
              <b>시작과 끝</b>을 맺은 경험이 있습니다.
            </span>
            <br />
            <span>
              <b>마지막으로, </b>
              <br />
              저는 새로운 기술을 배우고 문제를 해결하는 과정에서 즐거움을
              느끼고, <br /> 그 과정에서 지속적으로  <b>학습하고 성장</b>할 수
              있는 기회를 제공해 주는 개발을 좋아합니다.
            </span>
          </div>
          <div css={s.text2}>
            <span>
              <p>
                저는 공부한 것을 팀원들과 나누고 <b>서로 배우는 것</b>에 큰
                가치가 있다고 여깁니다.
              </p>
              <br />
              <p>
                완벽하지 않아서 더 나은 서비스를 만드는 것을{" "}
                <b>함께 고민하고,</b>
              </p>
              <br />
              <p>
                각자의 부족함을 <b>서로 채워주고,</b>
              </p>
              <br />
              <p>
                재능을 인정하는 것이 좋은 기업과 서비스를 만드는 <b>열쇠</b>라고
                생각합니다.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
