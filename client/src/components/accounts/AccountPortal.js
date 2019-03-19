import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button, Collapse, Alert } from 'react-bootstrap';
import AccountHeader from './AccountHeader';
import FeeStatus from './FeeStatus';
import { getMiniStatement, getFeeBalance } from '../ListFunctions'
import TableRow from './TableRow'


import jwt_decode from 'jwt-decode';


class AccountPortal extends Component {
    constructor() {
        super()

        this.state = {
            _id: '',
            username: '',
            firstName: '',
            lastName: '',
            password: '',
            feeBalance: '',
            open: false,
            studentReg: '',
            studentStatement: [],
            alertDialog: false,
            variant: '',
            message: ''
        }
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

    //Handle the flash messages here
    displayAlert = (showAlert, variant, message) => {
        this.setState({
            alertDialog: showAlert,
            variant: variant,
            message: message
        })
    }

    ministatement = () => {
        getMiniStatement({regNo: this.state.studentReg})
            .then(statement => {
                if(statement.data){
                    this.setState({studentStatement: statement.data, open: true})
                }else{
                    this.setState({ open: false})
                }
            })
            .catch(err => console.log(err))

            //get fee balance
            getFeeBalance({regNo: this.state.studentReg})
            .then(student => {
                if(student.data){
                    this.setState({feeBalance: student.data.fee_status})
                }else{
                    this.setState({open: false})
                    this.displayAlert(true, 'danger', 'Student not found.. Ensure the Registration Number is correct')
                }
            })
            .catch(err => {
                this.setState({open: false})
                this.displayAlert(true, 'danger', 'Unable to retrieve student data..' + err)
            })
    }
    tableRow = () => {
        return this.state.studentStatement.map((statement) => {
            return <TableRow obj={statement} key={statement.adm_no} />
        })
      }

    render() {

        return (
            <div className="container">
                <AccountHeader accountName={`${this.state.firstName} ${this.state.lastName}`} />
                <Alert
                    style={{ marginTop: '10px', height: '50px', position: 'float' }}
                    show={this.state.alertDialog} dismissible variant={this.state.variant} onClick={() => this.setState({alertDialog: false})}>
                    <p className="text-center">
                        {this.state.message}
                    </p>
                </Alert>
                <Container>
                    <div style={{
                        width: '40rem',
                        padding: '12px',
                        margin: 'auto',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 2px gray'
                    }}>
                        <div className="row" style={{
                            width: '35rem',
                            margin: 'auto'
                        }}>
                            <form className="form-inline">
                                <div className="form-group">
                                    <input 
                                    onChange={(e) => this.setState({studentReg: e.target.value, open: false, alertDialog: false})}
                                    style={{ marginLeft: '16px' }} className="form-control" type="text" placeholder="Enter student reg number.." />
                                </div>
                                <div className="form-group">
                                    <Button
                                        style={{ marginLeft: '16px' }}
                                        aria-controls="ministatement"
                                        aria-expanded={this.state.open} onClick={() => this.ministatement()}
                                        variant="outline-primary">Retrieve info</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Row>
                        <Col md={8} xs={12}>
                            <Collapse in={this.state.open}>
                                <div id="ministatement" style={{
                                    boxShadow: '0 2px 2px gray',
                                    marginTop: '8px'
                                }}>
                                <div className="alert alert-success"
                                 style={{
                                    // backgroundColor: 'white',
                                    boxShadow: '0 2px 2px gray',
                                    marginTop: '8px',
                                    height: '50px'
                                }}><p className='text-center'>Payment Record</p></div>
                                    <table id="studentTable" className="table table-hover table-striped table-bordered">
                                        <thead className="thead">
                                            <tr>
                                                <th>Date</th>
                                                <th>Registration number</th>
                                                <th>Receipt number</th>
                                                <th>Amount paid(Ksh)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.tableRow()}
                                        </tbody>

                                    </table>
                                </div>
                            </Collapse>
                        </Col>
                        <Col>
                            <Collapse in={this.state.open}>
                                <div id="ministatement" style={{
                                    boxShadow: '0 2px 2px gray',
                                    marginTop: '8px'
                                }}>
                                    <FeeStatus studentReg={this.state.studentReg} alert={this.displayAlert} balance={this.state.feeBalance}/>
                                </div>
                            </Collapse></Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default withRouter(AccountPortal);