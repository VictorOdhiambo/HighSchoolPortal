import React, { Component } from 'react'

class Error extends Component{
    render(){
        return(
            <div className="container">
                <div className="panel panel-danger">
                    <p className="text-center">Oops! The link does not exists</p>
                </div>
            </div>
        );
    }
}

export default Error;