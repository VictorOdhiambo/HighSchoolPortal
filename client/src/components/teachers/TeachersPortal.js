import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import '../jquery/HandleEvents'

import TeacherHeader from './TeacherHeader'
import _UploadAssignment from './_UploadAssignment';
import _ViewSubmittedAssignment from './_ViewSubmittedAssignments'
import _ViewStudentResult from './_ViewStudentsResults'
import jwt_decode from 'jwt-decode'
import { Alert } from 'react-bootstrap';

class TeachersPortal extends Component {
    constructor() {
        super()

        this.state = {
            title: 'uploadAssignment',
            _id: '',
            username: '',
            firstName: '',
            lastName: '',
            password: '',
            alertDialog: false,
            variant: '',
            message: ''
        }

        this.displayAction = this.displayAction.bind(this)
        // this.setTitle = this.setTitle.bind(this)
    }

    componentDidMount() {
        const token = localStorage.getItem("usertoken");
        if (token) {
            const decoded = jwt_decode(token);

            this.setState({
                _id: decoded._id,
                username: decoded.username,
                firstName: decoded.firstName,
                lastName: decoded.lastName,
                password: decoded.password
            })
        } else {
            this.props.history.push('/')
        }
    }
    setTitle = (title) => {
        this.setState({
            title
        })
    }

    displayAlert = (showAlert, variant, message) => {
        this.setState({
            alertDialog: showAlert,
            variant: variant,
            message: message
        }, () => console.log(this.state.message))
    }
    displayAction(title) {
        switch (title) {
            case "uploadAssignment":
                return (<_UploadAssignment alert={this.displayAlert} />)
            case "submitAssignment":
                return (<_ViewSubmittedAssignment />)
            case "studentResult":
                return (<_ViewStudentResult />)
        }
    }
    render() {
        return (
            <div className="container">
                <TeacherHeader teacherName={`${this.state.firstName} ${this.state.lastName}`} />
                <div style={{
                    backgroundColor: 'white',
                    width: '35rem',
                    margin: 'auto',
                }}>
                    <ul style={{
                        listStyleType: 'none',
                        padding: '15px',
                        position: 'static',
                        backgroundColor: 'white',
                        boxShadow: '0 3px  2px gray'
                    }}>
                        <li id="li-one" style={{ display: 'inline', textAlign: 'center', padding: '12px', cursor: 'pointer' }}
                            onClick={() => this.setTitle('uploadAssignment')}
                        >Upload Assignment</li>
                        <li id="li-two" style={{ display: 'inline', textAlign: 'center', padding: '12px', cursor: 'pointer' }}
                            onClick={() => this.setTitle('submitAssignment')}
                        >Submitted Assignment(s)</li>
                        <li id="li-three" style={{ display: 'inline', textAlign: 'center', padding: '12px', cursor: 'pointer' }}
                            onClick={() => this.setTitle('studentResult')}
                        >Student Result</li>
                    </ul>
                </div>

                <Alert dismissible show={this.state.alertDialog} variant={this.state.variant}
                    onClose={() => this.setState({ alertDialog: false })}
                    style={{height: '50px', width: '50rem', margin: 'auto'}}
                    >
                    <p className="text-center">{this.state.message}</p>
                </Alert>

                <div style={{
                    marginTop: '10px'
                }}>{this.displayAction(this.state.title)}</div>
            </div>
        );
    }
}

export default withRouter(TeachersPortal);
