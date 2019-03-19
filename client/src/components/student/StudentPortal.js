import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import StudentHeader from './StudentHeader';
import _FeeStatus from './_FeeStatus';
import _Assignments from './_Assignments';
import { getFeeBalance } from '../ListFunctions'


import jwt_decode from 'jwt-decode';


class StudentPortal extends Component {
    constructor() {
        super()

        this.state = {
            _id:'',
            username: '',
            firstName: '',
            lastName: '',
            password: '', 
            form: '',
            feeBalance: ''
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("usertoken");
        if (token) {
            const decoded = jwt_decode(token);
            const studentData = {
                _id: decoded._id,
                username: decoded.username,
                firstName: decoded.firstName,
                lastName: decoded.lastName,
                form: decoded.form
            }
            this.setState({
                _id: decoded._id,
                username: decoded.username,
                firstName: decoded.firstName,
                lastName: decoded.lastName,
                form: decoded.form,
            })
            const studentReg =  decoded.username;
            const form = decoded.form;
            getFeeBalance({ regNo: studentReg })
            .then(student => {
                if(student){
                    const balance = student.data.fee_status;
                    this.setState({feeBalance: balance}, () => console.log(form))
                }
            })

            console.log('Form:' + studentData._id)
        }else{
            this.props.history.push('/')
        }
    }
    render() {
        return (
            <div className="">
                <StudentHeader studentName={`${this.state.firstName} ${this.state.lastName}`}/>
                <Container>
                    <Row>
                        <Col md={8} xs={12}><_Assignments studentClass={this.state.form}/></Col>
                        <Col><_FeeStatus studentName={`${this.state.firstName} ${this.state.lastName}`}
                            studentReg={this.state.username} balance={this.state.feeBalance}
                        /></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(StudentPortal);