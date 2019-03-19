import React, { Component } from 'react'
import {Alert} from 'react-bootstrap'

class MyAlert extends Component{
   constructor(){
       super()
       this.state = {
        open: this.props.message
    }
   }
    render(){
        const { open } = this.state;
        return(
            <Alert dismissible variant="success" onClick={() => this.setState({open: !open})}>Success</Alert>
        );
    }
}
export default MyAlert;