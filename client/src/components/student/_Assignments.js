import React, { Component } from 'react'
import { Alert, Button, Modal } from 'react-bootstrap'
import Form from 'react-bootstrap/FormGroup';
import ListData from './ListData'
import { getAssignment, submitAssignment } from '../ListFunctions'


class _Assignments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            show: false,
            alertDialog: false,
            assignmentIsSent: '',
            message: '',
            assignments: []
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    displayAlert = (showAlert, variant, message) => {
        this.setState({
            alertDialog: showAlert,
            assignmentIsSent: variant,
            message: message
        }, () => console.log(this.state.message))
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    listRow = () => {
        return this.state.assignments.map((object, i) => {
            return <ListData obj={object} key={i} />
        })
    }

    //TODO: Retrieve assignment
    fetchAssignment = () => {
        const conditions = {
            form: this.props.studentClass,
            subject: this.selectUnit.value
        }

        getAssignment(conditions)
            .then(assignment => {
                if (assignment.data) {
                    this.setState({ assignments: assignment.data }, () => console.log(this.state.assignments))
                }
            })
    }

    sendAssignment = () => {
        const assignment = {
            form: this.selectMyClass.value,
            subject: this.selectMySubject.value,
            file: this.refs.myassignment.value
        }

        submitAssignment(assignment)
            .then(res => {
                if (res) {
                    this.setState({
                        alertDialog: true,
                        assignmentIsSent: 'success',
                        message: 'Your assignment was submitted successfully',
                        show: false
                    })
                } else {
                    this.setState({
                        alertDialog: true,
                        assignmentIsSent: 'danger',
                        message: 'Oops!.. Failed to submit the assignment',
                        show: false
                    })
                }
            })
            .catch(err => {
                this.setState({
                    alertDialog: true,
                    assignmentIsSent: 'danger',
                    message: 'Error submiting the assignment.. ' + err,
                    show: false
                })
            })
    }
    render() {
        return (
            <div className="container">
                <Alert dismissible show={this.state.alertDialog} onClose={() => { this.setState({ alertDialog: false }) }}
                    variant={this.state.assignmentIsSent}
                    style={{ height: '50px' }}>
                    <p className="text-center">{this.state.message}</p>
                </Alert>
                <p><strong>Available Assignments: </strong></p>
                <div className="row">
                    <form className="form-inline" encType="multipart/form-data" style={{ marginLeft: '25px' }}>
                        <div className="form-group" style={{ margin: '5px' }}>
                            <select className="form-control"
                                ref={select => this.selectUnit = select}
                                name="selectUnit"
                            >
                                <option>---select subject---</option>
                                <option value="english">English</option>
                                <option value="mathematics">Mathematics</option>
                                <option value="kiswahili">Kiswahili</option>
                                <option value="chemistry">Chemistry</option>
                                <option value="biology">Biology</option>
                                <option value="physics">Physics</option>
                                <option value="bst">Business Studies</option>
                                <option value="history">History</option>
                            </select>
                        </div>
                        <div className="form-group" >
                            <Button style={{ float: 'right', margin: '10px' }} variant="outline-primary" onClick={this.fetchAssignment}>
                                Retrieve
                    </Button>
                        </div>
                    </form>
                    <Button style={{ float: 'right', margin: '10px' }} variant="outline-primary" onClick={this.handleShow}>
                        Submit Assignment(s)
                    </Button>
                </div>
                {/* Display fetched assignments */}
                <div >
                    <ul style={{
                        listStyleType: 'none',
                        padding: '15px',
                        position: 'relative',
                        margin: 'auto'
                    }}>
                        {this.listRow()}
                    </ul>
                </div>
                <hr />
                <div>
                    <Button variant="outline-primary" onClick={this.handleShow}>
                        Submit Assignment
                    </Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Send your assignment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form >
                                <div className="form-group">
                                    <select className="form-control" ref={select => this.selectMyClass = select} name="selectMyClass">
                                        <option>---select class---</option>
                                        <option value="formOne">Form One</option>
                                        <option value="formTwo">Form Two</option>
                                        <option value="formThree">Form Three</option>
                                        <option value="formFour">Form Four</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className="form-control" ref={select => this.selectMySubject = select} name="selectMySubject">
                                        <option>---select subject---</option>
                                        <option value="english">English</option>
                                        <option value="mathematics">Mathematics</option>
                                        <option value="kiswahili">Kiswahili</option>
                                        <option value="chemistry">Chemistry</option>
                                        <option value="biology">Biology</option>
                                        <option value="physics">Physics</option>
                                        <option value="bst">Business Studies</option>
                                        <option value="history">History</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="file" ref="myassignment" />
                                </div>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.sendAssignment}>
                                Submit assignment
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>
        );
    }
}
export default _Assignments;