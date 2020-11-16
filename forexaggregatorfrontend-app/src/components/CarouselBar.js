import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
// Image from 'react-image-resizer';

class CarouselBar extends React.Component {

	render()
	{
		return (
				<div className="bg-dark col-7" style={{marginLeft:"200px",marginBottom:"20px"}}>
					<Carousel>
					<Carousel.Item>
				    	<img className="w-70 p-3 "  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSERLGdjn16hD7Gdg5G2laLXgRa994v4RStjA&usqp=CAU"	alt="First slide" style={{width:"500px",height:"350px"}}/>
				  </Carousel.Item>
				  <Carousel.Item >
				  <img className="w-70 p-3"	src="https://miro.medium.com/max/1080/0*P-p2whFUmLoR0X1_"	alt="First slide" style={{width:"500px",height:"350px"}}/>
				  </Carousel.Item>
				  <Carousel.Item>
				  <img className="w-70 p-3"	src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1Gin11z4G2BQE7UJifpXtPH9LapdpA3JZgg&usqp=CAU"	alt="First slide" style={{width:"500px",height:"350px"}}/>
				  </Carousel.Item>
				</Carousel>
			</div>)
	}
	
}
export default CarouselBar;