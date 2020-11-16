import React from 'react';
import axios from 'axios';
import '../App.css';
import Form from 'react-bootstrap/Form'
import { faList,faSearch, faTimes,faSort,faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Dropdown,DropdownButton} from 'react-bootstrap';
import SkeletonProvidersList from '../skeletons/SkeletonProvidersList';
export default class ForexExchangeList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            jsonData:null,
            option:'',
            base:'',
            to:'',
            amount:''
        }

        this.onChange=this.onChange.bind(this)
        this.onradioClickHigh=this.onradioClickHigh.bind(this)
        this.onradioClickLow=this.onradioClickLow.bind(this)
        
        
    }
    componentDidMount(){
       this.setState({
           base:this.props.base,
           to:this.props.to,
           amount:this.props.amount
       })
       this.getExchangeListOfProviders(this.props.base,this.props.to,this.props.amount)
    }
    /*componentWillReceiveProps()
    {
        this.getExchangeListOfProviders(this.props.base,this.props.to,this.props.amount)
    }*/
        getExchangeListOfProviders(base,to,amount){
        const URL="http://ec2-13-59-139-183.us-east-2.compute.amazonaws.com";                                                                                                                                                                                             
        const endpoint="/convert/?base="+base+"&to="+to+"&amount="+amount
        axios({
            method:'GET',
            url:`${URL}${endpoint}`,
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => {
               
                this.setState({
                    jsonData:response.data,
                    
                })
                console.log(this.state.jsonData)
               
                
        })
        .catch(err =>{console.log(err.message)});
        }
        onChange(e)
        {
             
            this.setState({
                [e.target.name]:e.target.value,
               
            })  
             
        } 
        onradioClickHigh()
        {
            this.setState({
                jsonData:this.state.jsonData.sort((a,b)=> b.perRate - a.perRate)
            })
              
           
            

        }
        onradioClickLow(){
            this.setState({
                jsonData:this.state.jsonData.sort((a,b)=> a.perRate - b.perRate)
            })
        }
        
        render() {
           
        return(<div className="list-container col-14">
            {this.state.jsonData==null?<SkeletonProvidersList/>:
                <div>
                <div className="border border-light bg-light">
                <div className="border border-light border-header bg-white text-black">
                <p className="textColor3"><FontAwesomeIcon icon={faList}/>{' '}List ForexEchange Providers
                <div style={{"float":"right"}} className="col-4">
                <Form>
                <Form.Row>
                <div className="form-group col-3" >
                <label>SortBy{''}<FontAwesomeIcon icon={faSort}/>{' '}</label>
                </div>
                <div className="form-group col-0" >
                        
                        <input type="radio" name="option" value="high" checked={this.state.option==="high"} onChange={this.onChange} onClick={this.onradioClickHigh} required="required" />  
                        <label class="font-weight-light font-italic">High</label>
                </div>
                <div className="form-group  col-0" >
                        <input type="radio"  name="option" value="low" checked={this.state.option==="low"} onChange={this.onChange} onClick={this.onradioClickLow}required="required" />
                        <label class="font-weight-light font-italic">Low</label>
                </div>
            </Form.Row>

            </Form>
                </div> 
                </p> 
                </div>
                <div className="text-container scroll col-14" style={{marginTop:"10px",marginLeft:"40px"}}>
                        {this.state.jsonData.map((key,index)=>
                        <div style={{marginLeft:"18px",marginTop:"20px"}}>
                        <div className="border border-light text-light " style={{backgroundColor:"grey",borderRadius:"4px",height:"30px"}} >
                        <p style={{marginTop:"3px",marginLeft:"5px",marginBottom:"3px"}}>{key.nameofProvider}</p>
                        </div>
                        <div style={{marginTop:"15px",borderRadius:"4px"}}>
                        <strong className="text-secondary" style={{backgroundColor:"white"}}>Rate :- {key.perRate}</strong>
                        <p style={{marginTop:"5px"}}>Conversion of {key.base} to {key.to} is {key.resultValue}</p>
                        </div>
                    
                       
                    </div>)}
                </div>
            </div>
            </div>
                   
        }</div>)}

}