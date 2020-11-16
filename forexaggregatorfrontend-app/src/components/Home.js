import React from 'react';
//import SearchBar from './SearchBar';
import CarouselBar from './CarouselBar';
import Container from 'react-bootstrap/Container';
import Header from "./Header";
import AlertToast from './AlertToast';
export default class Home extends React.Component{
    
	render()
	{
        return(
            <div>
            <Container>
                 <Header/>
                <CarouselBar/>
            </Container>
            
            </div>
            )

        }
    }
