
import Row from 'react-bootstrap/Row';                                                                                 
import Col from 'react-bootstrap/Col';                                                                                            
import Container from 'react-bootstrap/Container';
import ForexConverter from './components/ForexConverter'
import NavigationBar from './components/NavigationBar';
import FooterBar from './components/FooterBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';

  
function App() {
  const marginTop={
    marginTop:"20px"
  };
  const marginNext={
    marginTop:"40px"
  };
  return (
   
     <Router>
    <NavigationBar/>
    <Container>
      <Row>
        <Col lg={12} style={marginTop}>
          <Switch>
            <Route path="/home" exact component={Home}/>
            
            <Route path="/converter" exact component={ForexConverter}/>

          </Switch>
        </Col>
      </Row>
    </Container>      
        <FooterBar/>
      
   </Router>
 
  );
}


export default App;
