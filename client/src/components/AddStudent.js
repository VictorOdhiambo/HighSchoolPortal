import React, { Component } from 'react';
import { Button, Modal, Alert } from 'react-bootstrap'
import { postRequest } from './ListFunctions';
import '../components/jquery/HandleEvents'
import TableRow from './TableRow';


class AddStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [],
            modal: false,
            alertDialog: false,
            show: false,
            variant: '',
            message: ''
        }

        this._onSubmit = this._onSubmit.bind(this)
        this.tableRow = this.tableRow.bind(this)
        this.addNewStudent = this.addNewStudent.bind(this)
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        fetch("/api/student")
            .then(res => res.json())
            .then(data => {
                this.setState({ students: data }, () => console.log(data))
            })
            .catch(error => console.error('Get Request Error: ', error))
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    //toggle the modal
    addNewStudent() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    tableRow() {
        return this.state.students.map((object, i) => {
            return <TableRow obj={object} key={i} />
        })
    }

    toggleAlert = () => {
        this.setState(prevState => ({
            alertDialog: !prevState.alertDialog
        }))
    }
    _onSubmit = e => {
        e.preventDefault();
        this.setState({
            adm_no: this.refs.adm_no.value,
            name: this.refs.full_name.value,
            fee_status: this.refs.feeStatus.value
        })

        const student = {
            adm_no: this.refs.adm_no.value,
            name: this.refs.full_name.value,
            form: this.selectForm.value,
            fee_status: this.refs.feeStatus.value
        }
        postRequest(student)
            .then(student => {
                this.setState({
                    alertDialog: true,
                    show: false,
                    variant: 'success',
                    message: 'Student was added successfully!'
                })
            })
            .catch(err => {
                this.setState({
                    alertDialog: true,
                    show: false,
                    variant: 'danger',
                    message: 'Failed to add student... ' + err
                })
            })

            console.log(student)
    }

    render() {
        return (
            <div className="col-md-12">
                <Alert
                    style={{ marginTop: '10px' }}
                    show={this.state.alertDialog} dismissible variant={this.state.variant} onClick={this.toggleAlert}>
                    <p className="text-center">
                        {this.state.message}
                    </p>
                </Alert>
                <div className="" style={{ margin: '10px', float: 'right' }}>
                    <form className="form-inline">
                        <div className="form-group" style={{ marginRight: '5px' }}>
                            <input className="form-control" type="search" placeholder="Search here..." name="search" />
                        </div>
                        <Button variant="outline-primary" onClick={this.handleShow}>Add Student</Button>
                    </form>
                </div>
                <div>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Student Information</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="modal-content">
                                <div className="modal-body">
                                    <form onSubmit={this._onSubmit}>
                                        <div className="form-group">
                                            <input className="form-control" type="text" ref="adm_no" name="adm_no" placeholder="Admission number" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="text" ref="full_name" name="full_name" placeholder="Full name" />
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control"
                                             ref={select => this.selectForm = select}
                                             name="selectForm">
                                                <option value="Form One">Form One</option>
                                                <option value="Form Two">Form Two</option>
                                                <option value="Form Three">Form Three</option>
                                                <option value="Form Four">Form Four</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="text" ref="feeStatus" name="feeStatus" placeholder="Fee status" />
                                        </div>
                                        <div className="form-group" style={{ float: 'right' }}>
                                            <Button variant="outline-primary" type="submit" onClick={this.postRequest} >Save Student</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
                <div>
                    <table id="studentTable" className="table table-hover table-striped table-bordered">
                        <thead className="thead">
                            <tr>
                                <th>Admission No.</th>
                                <th>Full Name</th>
                                <th>Fee Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.tableRow()}
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default AddStudent;