import React, { Component } from 'react'
import _headerStudent from './_HeaderStudent';

class StudentPortal extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="container">
                <_headerStudent />
            </div>
        );
    }
}
export default StudentPortal;