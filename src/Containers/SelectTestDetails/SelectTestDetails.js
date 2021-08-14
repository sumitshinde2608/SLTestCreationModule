import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./SelectTestDetails.css";

const SelectTestDetails = () => {
	return (
		<div>
			<div className=' main '>
				<br />
				<Row>
					<Form.Label column lg={2}>
						Test Name
					</Form.Label>
					<Col sm={3}>
						<span>
							<Form.Control type='text' placeholder='Test' />
						</span>
					</Col>
				</Row>
				<br />
				<Row>
					<Form.Label column lg={2}>
						Number of questions
					</Form.Label>
					<Col sm={3}>
						<span>
							<Form.Control type='number' placeholder='0' />
						</span>
					</Col>
					<Col>
						<Form.Text>
							Total number of questions should not be more than 200
						</Form.Text>
					</Col>
				</Row>
				<br />
				<Row>
					<Form.Label column lg={2}>
						Number of questions attempts
					</Form.Label>
					<Col sm={3}>
						<span>
							<Form.Control type='text' placeholder='0' />
						</span>
					</Col>
					<Col>
						<Form.Text>Cannot be more than the number of questions</Form.Text>
					</Col>
				</Row>
				<br />
				<Row>
					<Form.Label column lg={2}>
						Maximum Marks
					</Form.Label>
					<Col sm={3}>
						<span>
							<Form.Control type='text' placeholder='0' />
						</span>
					</Col>
					<Col>
						<Form.Text>Maximum marks should not be more than 1000</Form.Text>
					</Col>
				</Row>
				<br />
				<Row>
					<Form.Label column lg={2}>
						Marking Scheme
					</Form.Label>

					<Form.Label column lg={2}>
						Positive Marks
					</Form.Label>

					<Col sm={1}>
						<span>
							<Form.Control type='text' placeholder='0' />
						</span>
					</Col>
					<Form.Label column lg={2}>
						Negative Marks
					</Form.Label>

					<Col sm={1}>
						<span>
							<Form.Control type='text' placeholder='0' />
						</span>
					</Col>
					<Col>
						{/* <Form.Text>Maximum marks should not be more than 1000</Form.Text> */}
					</Col>
				</Row>
				<br />
				<Row>
					<Form.Label column lg={2}>
						Time
					</Form.Label>
					<Col sm={3}>
						<span>
							<Form.Control type='number' placeholder='0' />
						</span>
					</Col>
					<Col>
						<Form.Text>Number of minutes</Form.Text>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default SelectTestDetails;
