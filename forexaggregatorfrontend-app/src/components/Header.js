import React from 'react';
import Container  from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
class Header extends React.Component{

    render()
	{
        
		return(
         
    <Container>
          
          <Jumbotron className="bg-info text-white col-13 ">
             <h1>ForexTrade</h1> 
             <blockquote className="blockquote mb-o">
            <p>Welcome to ForexAggregator where you find great analytics and best providers throughout the world</p>
            <footer className="blockquote-footer" style={{color:"honeydew",marginLeft:"100px"}}>
                Team 2XX-Success
            </footer>
            </blockquote>
        </Jumbotron>
          
          
     </Container>

            
        )
    }
}
export  default Header;