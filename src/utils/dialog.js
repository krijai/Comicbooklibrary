import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PaperExampleSimple from 'utils/Paper_frame';

export default class DialogExampleSimple extends React.Component {
   
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.handleClose}
      />,
    ];

    return (
        <div onTouchTap={this.props.handleOpen}>
        
        {this.props.children}
        
        <Dialog
          title={this.props.res.title}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.handleClose}
        >
        <table>
        <tr>
            <td>
            <img src={ this.props.res.thumbnail.path+"/portrait_medium."+this.props.res.thumbnail.extension}/>
            </td>
        <td>
            {this.props.res.description}
            </td>
        </tr>
        </table>
        </Dialog>
        </div>
    );
  }
}