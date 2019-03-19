import React, { Component } from 'react'
import {Alert, Button} from 'react-bootstrap'

class ListData extends Component {
    render() {
        return (
            <li style={{
                margin: '5px',
                width: '50rem',
                backgroundColor: 'white',
                boxShadow: '0 2px  2px gray',
                borderTopRightRadius: '10px',
                borderBottomLeftRadius: '20px'
            }}>
                <Alert>
                    <div className="row">
                    <h6 style={{ cursor: 'pointer', margin: '5px' }} className="text-center">{this.props.obj.file}</h6>
                        <Button  variant="outline-danger" style={{float: 'right', marginLeft: '25rem'}}>Delete</Button>
                    </div>
                </Alert>
            </li>
        );
    }
}
export default ListData;