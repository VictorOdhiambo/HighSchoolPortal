import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

class ListData extends Component {
    render() {
        return (
            <li style={{
                margin: '5px',
                width: '40rem',
                backgroundColor: 'white',
                boxShadow: '0 2px  2px gray',
                borderTopRightRadius: '10px',
                borderBottomLeftRadius: '20px'
            }}>
                <Alert>
                    <div>
                        <h6 style={{ cursor: 'pointer' }} className="text-center">{this.props.obj.file}</h6>
                    </div>
                </Alert>
            </li>
        );
    }
}
export default ListData;