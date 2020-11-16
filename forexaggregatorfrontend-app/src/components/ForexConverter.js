import React from 'react';
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import ForexDataVizualizer from './ForexDataVizualizer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faExchangeAlt,faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';
import ForexHistoryVizualizer from './ForexHistoryVizualizer';
import ForexExchangeList from './ForexExchangeList';

export default class ForexConverter extends React.Component{



    constructor(props){
        super(props)
        this.state={
        amount:null,
        keys:[],
        keyValueFrom:null,
        keyValueTo:null,
        data:'',
        result:null,
        load:false,
        load2:false

   
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onSwitch=this.onSwitch.bind(this);
    }
    componentDidMount(){
        this.getCurrenciesName();
    }
    onChange(e)
    {
        this.setState({
            [e.target.name]:e.target.value,
            load:false,
            load2:false
        }) 
        console.log(this.state)
    }
    getCurrenciesName(){
        const URL="http://ec2-13-59-139-183.us-east-2.compute.amazonaws.com";
        const endpoint="/CurrencyNameList"
        axios({
            method:'GET',
            url:`${URL}${endpoint}`,
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => {
          
                this.setState({
                    data:response.data,
                    
                })
                this.setState({
                    keys:Object.keys(this.state.data),
                  
                })
                
        })
        .catch(err =>{console.log(err.message)});
    }
    onSwitch()
    {
        this.setState({
            keyValueFrom:this.state.keyValueTo,
            keyValueTo:this.state.keyValueFrom,
            load2:false,
            load:false
        })
    }
    onSubmit(e)
    {
        e.preventDefault()
        if(this.state.keyValueFrom!==null && this.state.keyValueTo!==null )
            this.setState({
                load:true,
                load2:true
            })
    }
    render() {
    return(
    <div>   
        <Card className="border border-light bg-light text-black col-10 mx-auto">
            <Card.Body>
            <Form onSubmit={this.onSubmit}>
            <Form.Row>
            <div className="form-group col-3 " >
                    <input type="number" className="form-control" placeholder="Amount" name="amount" value={this.state.amount} onChange={this.onChange} required="required" />
            </div>
            <div className="form-group col-3" >
              <Form.Control as="select" defaultValue="from " name="keyValueFrom" value={this.state.keyValueFrom} onChange={this.onChange} required="required">
              {this.state.keys.map(state =>
                        <option>{state}</option>
                    )}
            </Form.Control>
            </div>
           <div className="form-group" >
           <Button size="md" variant="" type="button" onClick={this.onSwitch}>
                        <FontAwesomeIcon className="fa fa-sm" icon={faExchangeAlt}/>
            </Button>
            </div>
            <div className="form-group col-3 " >
              <Form.Control as="select" defaultValue="to" name="keyValueTo" value={this.state.keyValueTo} onChange={this.onChange} required="required" >
              {this.state.keys.map(state =>
                        <option>{state}</option>
                    )}
                </Form.Control>
                
           </div>
           
            <div className="form-group  mx-auto" >
                <button className="btn btn-primary " type="submit" >Convert <FontAwesomeIcon className="fa fa-sm" icon={faArrowAltCircleRight}/></button>
            </div>
            </Form.Row>
            </Form>
            </Card.Body>
            </Card>
                <div className="container item-a">
                {this.state.amount!=null &&this.state.load?<ForexExchangeList base={this.state.data[this.state.keyValueFrom]} to={this.state.data[this.state.keyValueTo]} amount={this.state.amount}/>:null}
                </div>
                <div className="container item-a">
                <div className="container item-b">
                {this.state.load2?<ForexDataVizualizer base={this.state.data[this.state.keyValueFrom]} to={this.state.data[this.state.keyValueTo]}/>:null}
                <div className="container item-c">
                {this.state.load2?<ForexHistoryVizualizer base={this.state.data[this.state.keyValueFrom]} to={this.state.data[this.state.keyValueTo]}/>:null}
                </div>
                </div>
                
                </div>
              
                
            
            </div>
      
        )}



          
           
  

}