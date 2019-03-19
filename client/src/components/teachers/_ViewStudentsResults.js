import React, { Component } from 'react'
import {  Collapse, Alert, Button } from 'react-bootstrap'


class _ViewStudentsResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadedAssignments: 2,
            open: false,
            show: false,
            assignmentIsSent: 'success',
            sentMessage: 'Your assignment was sent successfully. Thanks'
        }
    }
    render() {
        return (
            <div>
                <div className="row">
                <form className="form-inline" style={{width: '60rem'}}>
                    <div className="form-group" style={{ margin: '5px' }}>
                        <select className="form-control">
                            <option>---select class---</option>
                            <option value="formOne">Form One</option>
                            <option value="formTwo">Form Two</option>
                            <option value="formThree">Form Three</option>
                            <option value="formFour">Form Four</option>
                        </select>
                    </div>
                    <div className="form-group" >
                        <Button style={{ float: 'right', margin: '10px' }} variant="outline-primary" onClick={this.handleShow}>
                            Show
                    </Button>
                    </div>
                </form>

                <Button style={{ float: 'right', margin: '10px' }} variant="outline-primary" onClick={this.handleShow}>
                            Upload Result
                    </Button>
                </div>
                <hr />

                <p><strong>Students result</strong>
                </p>
                <Alert variant="primary">
                    <p style={{ cursor: 'pointer' }}
                        aria-controls="assignment_description"
                        aria-expanded='true'>Assignment_one.docx
                    <span class="glyphicon glyphicon-send" aria-hidden="true"></span>
                    </p>
                    <Collapse in={this.state.open}>
                        <div id="assignment_description">
                            This is the detailed description of what the assignment is all about...
                </div>
                    </Collapse>
                </Alert>
                <Alert variant="primary">
                    <p style={{ cursor: 'pointer' }}
                        aria-controls="assignment_description2"
                        aria-expanded='true'>Assignment_two.pdf</p>
                    <Collapse in={this.state.open}>
                        <div id="assignment_description2">
                            This is the detailed description of what the assignment is all about...
                </div>
                    </Collapse>
                </Alert>
                <hr />
                <div>

                </div>
            </div>
        );
    }
}
export default _ViewStudentsResults;