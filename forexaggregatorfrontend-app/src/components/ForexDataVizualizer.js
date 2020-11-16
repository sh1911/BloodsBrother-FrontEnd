import React from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2'; 
import '../App.css';
import SkeletonDataVizualizer from '../skeletons/SkeletonDataVizualizer';
export default class ForexDataVizualizer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            jsonData:null,
            base:'',
            to:'',
           days:90,
            EEstate:{
                labels:[],
            datasets: [
                {
                label: '',
                fill: true,
                lineTension: 0.25,
                backgroundColor: '	rgba(65,105,225,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data:[]
                }
            ]
        }
           
                      
        }
        

        
    }
    
    componentDidMount(){
       
        this.getHistoryData(this.props.base,this.props.to)
    }
    getHistoryData(base,to){
        this.setState({
            jsonData:null
        })
        const URL="http://ec2-13-59-139-183.us-east-2.compute.amazonaws.com";
        const endpoint="/history/"+this.state.days+"?base="+base+"&to="+to;
       
        let valuesOnXaxis=[];
        let valuesOnYaxis=[];
        axios({
            method:'GET',
            url:`${URL}${endpoint}`,
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => {
          
                this.setState({
                    jsonData:response.data,
                   
                        
                })
                
               for(var key in this.state.jsonData['rates']){
                   valuesOnXaxis.push(new Date(key));
                   valuesOnYaxis.push(this.state.jsonData['rates'][key][to])
               }
               var eestate=this.state.EEstate
                eestate.labels=valuesOnXaxis
               
                eestate.datasets[0].data=valuesOnYaxis
                eestate.datasets[0].label=this.props.base
                this.setState({

                    EEstate:eestate,                   
                }) 
                console.log(this.state.EEstate)
                  
        })
        .catch(err =>{console.log(err.message)});
    }
    render() {return(
        <div className="graph-container">
       {this.state.jsonData==null?<SkeletonDataVizualizer/>:
        <Line
          data={this.state.EEstate}
          options={{
            title:{
              display:true,
              text:"Exachange Rates of "+this.props.to+" with respect to "+this.props.base,
              fontSize:20,
              fontColor:"#0A1C76",
              message:"heelo there"
            },
            
            legend:{
              display:true,
              position:'right'
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        unit: 'month'
                    }
                }]
            }
          }}
        />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    }
    </div>)
    }
}