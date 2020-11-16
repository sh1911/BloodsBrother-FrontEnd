import React from 'react';
import {Navbar,Nav,Dropdown,DropdownButton} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class NavigationBar extends React.Component{
	
	render()
	{
		return(<div className="col-14" style={{width:"100%"}}>
				<Navbar bg="primary" variant="dark">

					<Nav className="mr-auto">
					<Link to={"/home"} className="nav-link">
						<strong className="navbar-brand mr-auto" style={{borderStyle:"double",borderColor:"black",backgroundColor:"black"}}>FxT</strong>
						</Link>
					
					</Nav>
					<Link to={"/converter"} className="nav-link text-white" style={{marginRight:"1000px",textEmphasis:"circle",textDecorationThickness:"5px"}}>CurrencyConverter</Link>
					{/*<Navbar sticky="bottom" >
					<Nav className="mr-auto">
					<Nav.Link href="/register">Register</Nav.Link>
					<DropdownButton id="dropdown-basic-button" title=" Account">
					  <Dropdown.Item href="/Account">Your Account</Dropdown.Item>
					  <Dropdown.Item href="/login">login</Dropdown.Item>
					  <Dropdown.Item href="/logout">logout</Dropdown.Item>
					  
					</DropdownButton>

					</Nav>
		</Navbar>*/}
				</Navbar>
	  </div>);
	}
	
}
export  default NavigationBar;