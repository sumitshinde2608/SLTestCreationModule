import React from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import logo from "../../Assets/logo.svg";
import "./Navbar.css";
const Navibar = () => {
	return (
		<div>
			<Navbar
				collapseOnSelect
				expand='lg'
				variant='light'
				className='custom-navbar'
			>
				<Navbar.Brand href='#home'>
					{"     "}
					<div style={{ padding: "5px" }}>
						<img src={logo} height='67px' width='100px' />
					</div>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'></Nav>
					<Nav>
						<Nav.Link href='#'>Option 1</Nav.Link>
						<Nav.Link href='#'>Option 2</Nav.Link>
						<Nav.Link href='#'>Option 3</Nav.Link>
						<Nav.Link href='#'>Option 4</Nav.Link>
						<Nav.Link eventKey={2} href='#memes'>
							Account
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navibar;
