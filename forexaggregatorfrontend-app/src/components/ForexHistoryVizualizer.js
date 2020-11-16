import React from 'react';
import axios from 'axios';
import '../App.css'
import SkeletonHistoryVizualizer from '../skeletons/SkeletonHistoryVizualizer';
export default class ForexHistoryVizualizer extends React.Component{
    constructor(props){
        super(props)
        this.state={
           data:null,
            avg30:'',
            min30:'',
            max30:'',
            avg90:'',
            min90:'',
            max90:'',
            avgW:'',
            minW:'',
            maxW:''
        }
    }
    componentDidMount(){
       
        this.getHistoryDataForWeek(this.props.base,this.props.to)
        this.getHistoryDataFor30(this.props.base,this.props.to)
        this.getHistoryDataFor90(this.props.base,this.props.to)

    }
    getHistoryDataForWeek(base,to){
        const URL="http://ec2-13-59-139-183.us-east-2.compute.amazonaws.com";
        const endpoint="/history/days/7?base="+base+"&to="+to;
        axios({
            method:'GET',
            url:`${URL}${endpoint}`,
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => {
            this.setState({
                data:response.data
            })
            
            this.setState({
                maxW:this.state.data.max,
                minW:this.state.data.min,
                avgW:this.state.data.average
            })
            console.log(this.state)
            
        })
        .catch(err=>{console.log(err.message)})
       
    }
    getHistoryDataFor30(base,to){
        const URL="http://ec2-13-59-139-183.us-east-2.compute.amazonaws.com";
        const endpoint="/history/days/30?base="+base+"&to="+to;
       
        axios({
            method:'GET',
            url:`${URL}${endpoint}`,
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => {
            this.setState({
                data:response.data
            })
            
            this.setState({
                max30:this.state.data.max,
                min30:this.state.data.min,
                avg30:this.state.data.average
            })
            console.log(this.state)
            
        })
        .catch(err=>{console.log(err.message)})
       
    }
    getHistoryDataFor90(base,to){
        const URL="http://ec2-13-59-139-183.us-east-2.compute.amazonaws.com";
        const endpoint="/history/days/90?base="+base+"&to="+to;
        axios({
            method:'GET',
            url:`${URL}${endpoint}`,
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => {
            this.setState({
                data:response.data
            })
            console.log(this.state.data)
            this.setState({
                max90:this.state.data.max,
                min90:this.state.data.min,
                avg90:this.state.data.average
            })
            console.log(this.state)
            
        })
        .catch(err=>{console.log(err.message)})
       
    }
    render() {
        return(<div className="table-container" >
        {this.state.data==null?<SkeletonHistoryVizualizer/>:
        <div>
         <p className="textColor" style={{marginTop:"10px"}}>{this.props.to} to {this.props.base} Stats</p> 
        <table className="table table-hover" style={{width:"85%"}} >
        <thead>
        <tr>    
        <th></th>
        <th>Last Week</th>
        <th>Last 30 days</th>
        <th>Last 90 days</th>
        </tr>
        </thead>
        <tbody>
            <tr>
            <td className="textColor-2" title="This shows the Highest rates for the time period of 30 and 90 days">High</td>
            <td>{this.state.maxW}</td>
            <td>{this.state.max30}</td>
            <td>{this.state.max90}</td>
            </tr>
            <tr>
            <td className="textColor-2" title="This shows the Lowest rates for the time period of 30 and 90 days">Low</td>
            <td>{this.state.minW}</td>
            <td>{this.state.min90}</td>
            <td>{this.state.min90}</td>
            </tr>
            <tr>
            <td className="textColor-2" title="This shows the average rates for the time period of 30 and 90 days">Average</td>
            <td>{this.state.avgW}</td>
            <td>{this.state.avg30}</td>
            <td>{this.state.avg90}</td>
            </tr>
   
        </tbody>
    </table>
        </div>}</div>)}
}