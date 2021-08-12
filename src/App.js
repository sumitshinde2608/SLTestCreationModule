import React from "react";
import Navbar from "./Components/Navbar";
import Test from "./Containers/SelectTestDetails/SelectTestDetails";
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
				<Test />
			</div>
			{/* <Button>Next</Button> */}
			{/* <h1>Hello React</h1> */}
		</div>
	);
};

export default App;
