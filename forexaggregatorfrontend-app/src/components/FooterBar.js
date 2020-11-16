import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';                                                                                            
import Container from 'react-bootstrap/Container';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  { faCopyright } from '@fortawesome/free-solid-svg-icons';
class FooterBar extends React.Component{

    render()
	{
        let year=new Date().getFullYear();
		return(
            <div style={{marginTop:"80px"}}>
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col class="w-25 p-3" className="text-center text-muted">
                        <div>{year}-{year+1}, All Rights Reserved by <FontAwesomeIcon className="fa fa-sm" icon={faCopyright}/>ForexTrade</div>
                    </Col>
                </Container>
            </Navbar>
           </div> 
        )
    }
}
export  default FooterBar;