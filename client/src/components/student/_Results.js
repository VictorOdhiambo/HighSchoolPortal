import React, { Component } from 'react'
import {Button, Card} from 'react-bootstrap'

class _Results extends Component{

    render(){
        return(
            <div style={{marginTop: '10px'}}>
                <Card>
                    <Card.Header style={{backgroundColor: 'rgb(99, 172, 240)', color: '#eee'}} as="h5">Results</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <select className="form-control">
                                <option>---select form---</option>
                                <option>Form One</option>
                                <option>Form Two</option>
                                <option>Form Three</option>
                                <option>Form Four</option>
                            </select>
                        </Card.Text>
                        <Button variant="outline-primary" style={{ marginLeft: '95px' }}>Download Slip</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default _Results;