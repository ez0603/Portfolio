/** @jsxImportSource @emotion/react */
import * as s from "./style";
import CurrentTime from "../CurrentTime/CurrentTime";
import Image from "../../assets/img/me.jpg";
import { FaWifi } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";

function Ipthone(props) {
  return (
    <div css={s.layout}>
      <div css={s.content}>
        <div css={s.header}></div>
        <div css={s.time}>
          <CurrentTime />
		  <div>

		  <TbAntennaBars5 size={20} /> <FaWifi size={20} /> <CiBatteryFull size={20} />
		  </div>
        </div>
        <div css={s.img}>
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Ipthone;
