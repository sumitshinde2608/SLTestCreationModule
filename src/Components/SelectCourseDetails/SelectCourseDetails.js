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

	const [ButtonColor, setButtonColor] = useState({
		black: true,
	});

	function handleClick() {
		setButtonColor("black");
	}

	// const changeStyles = () => {
	// 	let element = document.getElementById("button");
	// 	ReactDOM.findDOMNode(element).style.backgroundColor = this.state.isClicked
	// 		? "#ececec"
	// 		: "red";
	// };

	let btn_class = ButtonColor ? "Option-one" : "Option-two";

	return (
		<div className={classes.root}>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
				>
					<Typography className={classes.heading}>Accordion 1</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div className='options'>
						<button className='Option-one'> JEE Main</button>
						<button className='Option-two'> JEE Main</button>
						<button className='Option-one'> JEE Main</button>
						<button className='Option-two'> JEE Main</button>
					</div>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
