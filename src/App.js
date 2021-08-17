import React from "react";
import Navbar from "./Components/Navbar";
import Test from "./Containers/SelectTestDetails/SelectTestDetails";
import Course from "./Containers/SelectCourseDetails/SelectCourseDetails";
import "./App.css";
import { Button } from "react-bootstrap";

const App = () => {
	return (
		<div>
			<Navbar />
			<div style={{ padding: "1vw" }}>
				<p style={{ fontSize: "2rem" }}>
					<strong>Create Test</strong>
				</p>
				{/* <Test /> */}
			</div>
			<div style={{ padding: "1vw" }}>
				<Course />
			</div>
		</div>
	);
};

export default App;
