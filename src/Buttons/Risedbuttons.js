import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 12,
};

class Risedbutton extends React.Component {
render() {
    return (
    <div>
    <RaisedButton label="Default" style={style} />
    <RaisedButton label="Primary" primary={true} style={style} />
    <RaisedButton label="Secondary" secondary={true} style={style} />
    <RaisedButton label="Disabled" disabled={true} style={style} />
    <br />
    <br />
    <RaisedButton label="Full width" fullWidth={true} />
  </div>
);
}
}

export default Risedbutton;