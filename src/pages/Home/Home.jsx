/** @jsxImportSource @emotion/react */
import * as s from "./style";
import 'animate.css';

function Home(props) {
	return (
		<div css={s.layout}>
			<div css={s.container}>
				<div css={s.content}>
					<h1 className="animate__animated animate__slideInRight">Portfolio</h1>
				</div>
			</div>
		</div>
	);
}

export default Home;
