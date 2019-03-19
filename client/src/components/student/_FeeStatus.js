import React, { Component } from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'
import _Results from './_Results';


class _FeeStatus extends Component {

    render() {
        return (
            <div >
                <Card>
                    <Card.Header style={{ backgroundColor: 'rgb(99, 172, 240)', color: '#eee' }} as="h5">Fee Status</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{this.props.studentReg}</ListGroup.Item>
                                <ListGroup.Item>{this.props.studentName}</ListGroup.Item>
                                <ListGroup.Item>{`Fee Bal. ${this.props.balance}`}</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        <Button variant="outline-primary" style={{ marginLeft: '95px' }}>Fee Structure</Button>
                    </Card.Body>
                </Card>

                <_Results />
            </div>
        );
    }
}

export default _FeeStatus;