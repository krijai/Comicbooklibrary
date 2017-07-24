import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 50,
  textAlign: 'center',
  display: 'inline-block',
};

class PaperExampleSimple extends React.Component{
render() {
    return (

    <Paper style={style} zDepth={5} >
        {this.props.children}
    </Paper>

);
}}
export default PaperExampleSimple;