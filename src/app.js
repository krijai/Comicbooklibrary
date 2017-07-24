import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PaperExampleSimple from 'utils/Paper_frame';
import styles from '../styles/flexboxgrid.css';
import DialogExampleSimple from 'utils/dialog';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';
import { Router, Route, browserHistory } from 'react-router';

const style = {
  margin: 12,
};
var count=80;
var i;
var len=100;
class MyApp extends React.Component {
    
    constructor(){
        super();
        this.state={
            open:false,
            people:{results:[]},
            
        };
    };
    

moreContent(value){
    
     count -= value;
};

handleOpen() {
  this.setState({ open: true });
};

handleClose() {
  this.setState({ open: false });
};
    
    componentWillMount(){
    var url =`http://gateway.marvel.com/v1/public/comics?limit=20&startYear=2010&apikey=e8bc28746c6089ad4fe6ae055967e4f2`;
    fetch(url).then(resp => resp.json()).then(r => {
      this.setState({people: r.data});
        
        })
    }
    
    
 render() {
     var that=this;
     for (i = count; i <len; i++) {
        var lis = 
            (    <div>
             
         {this.state.people.results.map((res)=>
             {
             var img_not_avail = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
             if(res.thumbnail.path!=img_not_avail)
                 {
                      return (
                     <PaperExampleSimple>
                    <DialogExampleSimple open={this.state.open} handleOpen={this.handleOpen.bind(this)} handleClose = {this.handleClose.bind(this)} res={res} >
                        <img  src={ res.thumbnail.path+"/portrait_xlarge."+res.thumbnail.extension}/> 
                            
                    </DialogExampleSimple>
                        
                    </PaperExampleSimple> 
                    ) 
                     
                 }
         else{
               return;
            }
            }
        )}
        </div>
        );
         };
     return (
         <div id="divStyle">
         
         <img id="logo"  alt="HomePage" src="../logo.png"/>
    {lis}
         
    <FlatButton
        backgroundColor="#a4c639"
        hoverColor="#8AA62F"
        icon={<ActionAndroid color={fullWhite} />}
        style={style}
        onClick={that.moreContent.bind(that, 20)} 
    />

</div>
 );}
  
}
export default MyApp;
