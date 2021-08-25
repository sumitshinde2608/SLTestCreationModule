import React from "react";
import Navbar from "./Components/Navbar/Navbar";
// import Test from "./Components/SelectTestDetails/SelectTestDetails";
import Course from "./Components/SelectCourseDetails/SelectCourseDetails";
import "./App.css";
import { Button } from "react-bootstrap";

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<div>
				<div className='container'>
					<div style={{ padding: "1vw" }}>
						<p style={{ fontSize: "2rem" }}>
							<strong>CREATE TEST</strong>
						</p>
						<Course />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
