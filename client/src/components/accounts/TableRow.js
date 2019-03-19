import React, { Component } from 'react'

class TableRow extends Component{
 
    render(){
        return(
            <tr>
                <td>{this.props.obj.date}</td>
                <td>{this.props.obj.regNo}</td>
                <td>{this.props.obj.receiptNo}</td>
                <td>{this.props.obj.amount}</td>
            </tr>
        );
    }
}

export default TableRow;