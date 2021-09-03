import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { Form, Row, Col } from "react-bootstrap";
import "./SelectTestDetails.css";
import "./SelectCourseDetails.css";
import Kp from "./SelectSubjects";

import ChooseTopics from "../ChooseTopics/ChooseTopics";
import ChooseChapters from "../ChooseTopics/ChooseChapters";

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
			console.log("First");
		} else {
			e.target.style.backgroundColor = "#ececec";
			e.target.style.color = "black";
			x = 0;
			console.log("Second");
		}
	};

	let btn_class = ButtonColor ? "Option-unselected" : "Option-selected";

	const [personName, setPersonName] = React.useState([]);
	// const [topicName, setTopicName] = React.useState([]);

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
							<span className={"Outline"}>1</span> Create Test
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<div>
							<div className=' main '>
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
								<br />
								<Row>
									<Form.Label column sm={2}>
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
									<Col sm={3}>
										<div className='options'>
											<div>
												<button className={btn_class} onClick={HandleSubmit}>
													{" "}
													30 minutes{" "}
												</button>
											</div>
											<div>
												<button className={btn_class} onClick={HandleSubmit}>
													{" "}
													1 hour{" "}
												</button>
											</div>
											<div>
												<button className={btn_class} onClick={HandleSubmit}>
													{" "}
													2 hours{" "}
												</button>
											</div>
											<div>
												<button className={btn_class} onClick={HandleSubmit}>
													{" "}
													3 hours{" "}
												</button>
											</div>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</AccordionDetails>
				</Accordion>
			</div>

			<Accordion className='p'>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
				>
					{" "}
					<Typography variant='h6'>
						{" "}
						<span className={"Outline"}>2</span> Choose Topics
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div>
						<div>
							<span
								style={{ float: "center", width: "inherit", height: "auto" }}
							>
								<Kp personName={personName} setPersonName={setPersonName} />
							</span>
						</div>
						{/* <Typography variant='body1'>Maths</Typography> */}
						<br />
						{/* <div className='row'> */}
						{/* <div className='col-md-12'> */}
						{personName.map((person) => (
							<div>
								<br />
								<h6> {person} </h6>
								<br />
								<div style={{ display: "flex", flexDirection: "row" }}>
									<ChooseTopics />
									<ChooseChapters />
								</div>
								{/* <Kp personName={personName} setPersonName={setPersonName} /> */}
							</div>
						))}
					</div>
					{/* </div> */}
				</AccordionDetails>
			</Accordion>

			<div className='Main'>
				<button className='Submit'>Publish</button>
			</div>
		</div>
	);
}

{
	/* <FormControl className={classes.formControl}>
<InputLabel id='demo-simple-select-label'>Age</InputLabel>
<Select
	labelId='demo-simple-select-label'
	id='demo-simple-select'
	multiple
>
	<MenuItem value={10}>Ten</MenuItem>
	<MenuItem value={20}>Twenty</MenuItem>
	<MenuItem value={30}>Thirty</MenuItem>
</Select>
</FormControl> */
}
