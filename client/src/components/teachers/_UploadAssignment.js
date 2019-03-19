import React, { Component } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

import ListData from './ListData'

import { uploadAssignment, getAssignment } from '../ListFunctions'

class _UploadAssignment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectSubject: '',
            selectClass: '',
            open: false,
            show: false,
            assignmentIsSent: 'success',
            sentMessage: 'Your assignment was sent successfully. Thanks',
            assignments: []
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
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
            form: this.selectClass.value,
            subject: this.selectUnit.value
        }

        getAssignment(conditions)
        .then(assignment => {
            if(assignment.data){
                this.setState({assignments: assignment.data}, ()=> console.log(this.state.assignments))
            }
        })
    }

    assignmentUpload = () => {
        const assignment = {
            form: this.selectForm.value,
            subject: this.selectSubject.value,
            file: this.refs.assignment.value
        }
        uploadAssignment(assignment)
            .then(res => {  
                if(res) {
                    console.log('Yees')  
                }           
                // this.props.alert(true, 'success', 'Student assignment successfully uploaded!')                
            })
            .catch(err => {
                this.props.alert(true, 'danger', 'Assignment upload failed... ' + err)
            })
            this.setState({show: false})
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                <form className="form-inline" encType="multipart/form-data">
                    <div className="form-group" style={{ margin: '5px' }}>
                        <select className="form-control" 
                        ref={select => this.selectClass = select}
                        name="selectClass"
                        >
                            <option>---select class---</option>
                            <option value="formOne">Form One</option>
                            <option value="formTwo">Form Two</option>
                            <option value="formThree">Form Three</option>
                            <option value="formFour">Form Four</option>
                        </select>
                    </div>
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
                            Upload Assignment(s)
                    </Button>
                </div>

                <hr />
                <div className="container">
                <p style={{marginLeft: '30px'}}><strong>Uploaded Assignments: </strong></p>
                <div style={{ margin: 'auto' }}>
                    <ul style={{
                        listStyleType: 'none',
                        padding: '15px',
                        position: 'relative',
                        // margin: 'auto'
                    }}>
                        {this.listRow()}
                    </ul>
                </div>
                
                </div>


                <div>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Upload assignment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form >
                                <div className="form-group">
                                    <select className="form-control"
                                    ref={select => this.selectForm = select}
                                    name="selectForm"
                                    >
                                        <option>---select class---</option>
                                        <option value="formOne">Form One</option>
                                        <option value="formTwo">Form Two</option>
                                        <option value="formThree">Form Three</option>
                                        <option value="formFour">Form Four</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select className="form-control"
                                    ref={select => this.selectSubject = select}
                                    name="selectSubject"
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
                                <div className="form-group">
                                    <input type="file" ref="assignment" />
                                </div>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() => this.assignmentUpload()}>
                                Upload
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>
        );
    }
}
export default _UploadAssignment;