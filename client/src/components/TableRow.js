import React, { Component } from 'react'

class TableRow extends Component{
 
    render(){
        return(
            <tr>
                {/* <td>{this.props.obj._id}</td> */}
                <td>{this.props.obj.adm_no}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.fee_status}</td>
                <td>
                    <button className="btn btn-primary">Edit</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;