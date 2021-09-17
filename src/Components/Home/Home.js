import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<Link to={`/speedenhancer`}>
				<button className='button mt-20' type='submit'>
					{" "}
					Speed Enhancer{" "}
				</button>
			</Link>
			<br />
			<br />
			<Link to={`/customtest`}>
				<button className='button mt-20' type='submit'>
					{" "}
					Custom Test{" "}
				</button>
			</Link>
			<br />

			<br />
			<Link to={`/fulltest`}>
				<button className='button mt-20' type='submit'>
					{" "}
					Full Test{" "}
				</button>
			</Link>
		</div>
	);
}

export default Home;
