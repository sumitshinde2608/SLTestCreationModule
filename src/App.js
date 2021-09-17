import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
// import Test from "./Components/SelectTestDetails/SelectTestDetails";
import Course from "./Components/SelectCourseDetails/SelectCourseDetails";
import CustomTest from "./Containers/Custom Test/CustomTest";
import Home from "./Components/Home/Home";
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
							{/* <strong>CREATE TEST</strong> */}
						</p>
						<div>
							<Router>
								<Route path='/' exact component={Home} />
								<Route path='/customtest' component={CustomTest} />
								<Route path='/speedenhancer' component={Course} />
								<Route path='/fulltest' component={Course} />
							</Router>
							{/* <Course /> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
