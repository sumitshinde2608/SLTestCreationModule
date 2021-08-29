import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./SelectCourseDetails.css";

import { Form, Row, Col } from "react-bootstrap";
import "../SelectTestDetails/SelectTestDetails.css";

// import { Button } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
	button: {
		margin: theme.spacing(1),
		padding: theme.spacing(3),
	},
}));

export default function SimpleAccordion() {
	const classes = useStyles();

	const [ButtonColor, setButtonColor] = useState(true);
	var x = 0;

	const HandleSubmit = (e) => {
		if (x === 0) {
			e.target.style.backgroundColor = "#584f52";
			e.target.style.color = "white";
			x = 1;
		} else {
			e.target.style.backgroundColor = "#ececec";
			e.target.style.color = "#584f52";
			x = 0;
		}
	};

	let btn_class = ButtonColor ? "Option-unselected" : "Option-selected";

	return (
		<div>
			<div className={classes.root}>
				<Accordion className='p'>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Typography variant='h6'>
							{" "}
							<span className={"Outline"}>1</span> Test details
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<div>
							<div className='options'>
								<div>
									<button className={btn_class} onClick={HandleSubmit}>
										{" "}
										Easy
									</button>
								</div>
								<div>
									<button className={btn_class} onClick={HandleSubmit}>
										{" "}
										Medium
									</button>
								</div>
								<button className={btn_class} onClick={HandleSubmit}>
									{" "}
									Hard
								</button>
							</div>

							{/* Second row */}

							<div className='options'>
								<div>
									<button className={btn_class} onClick={HandleSubmit}>
										{" "}
										Maths
									</button>
								</div>
								<div>
									<button className={btn_class} onClick={HandleSubmit}>
										{" "}
										Science
									</button>
								</div>
								<div>
									<button className={btn_class} onClick={HandleSubmit}>
										{" "}
										English
									</button>
								</div>
								<div>
									<button className={btn_class} onClick={HandleSubmit}>
										{" "}
										Mental Ability
									</button>
								</div>
							</div>
						</div>
					</AccordionDetails>
				</Accordion>

				<Accordion className='p'>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Typography variant='h6'>
							{" "}
							<span className={"Outline"}>2</span> Create Test
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<div>
							<div className=' main '>
								<br />
								<Row>
									<Form.Label column sm={4}>
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
									<Form.Label column sm={2}>
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
									<Form.Label column sm={2}>
										Number of questions attempts
									</Form.Label>
									<Col sm={3}>
										<span>
											<Form.Control type='text' placeholder='0' />
										</span>
									</Col>
									<Col>
										<Form.Text>
											Cannot be more than the number of questions
										</Form.Text>
									</Col>
								</Row>
								<br />
								<Row>
									<Form.Label column sm={2}>
										Maximum Marks
									</Form.Label>
									<Col sm={3}>
										<span>
											<Form.Control type='text' placeholder='0' />
										</span>
									</Col>
									<Col>
										<Form.Text>
											Maximum marks should not be more than 1000
										</Form.Text>
									</Col>
								</Row>
								<br />
								<Row>
									<Form.Label column sm={2}>
										Marking Scheme
									</Form.Label>

									<Form.Label column sm={2}>
										Positive Marks
									</Form.Label>

									<Col sm={1}>
										<span>
											<Form.Control type='text' placeholder='0' />
										</span>
									</Col>
									<Form.Label column sm={2}>
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
									<Form.Label column sm={2}>
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
					</AccordionDetails>
				</Accordion>
			</div>

			<div className='Main'>
				<button className='Submit'>Publish</button>
			</div>
		</div>
	);
}
