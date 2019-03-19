import React, { Component } from 'react'
import { Card, Button, ListGroup, Form } from 'react-bootstrap'
import { updateFeeStatement, updateFeeBalance } from '../ListFunctions'
import MyAlert from './Alert';


class FeeStatus extends Component {
    constructor() {
        super()

        this.saveFeeStatement = this.saveFeeStatement.bind(this)
    }

    showMessage = () => {
       return <MyAlert message={true} />
    }

    saveFeeStatement(e) {
        e.preventDefault()
        const studentDetails = {
            regNo: this.props.studentReg,
            receiptNo: this.refs.receipt.value,
            amount: this.refs.amount.value
        }
        updateFeeStatement(studentDetails)
            .then(user => {
                if(user){
                   this.props.alert(true, 'primary', 'Fee status successfully updated.')
                }       
            })
            .catch(err => this.props.alert(true, 'danger', 'Fee status update FAILED... '+ err))

            //update Fee balance
            const newAmount = this.props.balance - studentDetails.amount;
            const studentData = {
                adm_no: studentDetails.regNo,
                fee_status: newAmount
            }
            updateFeeBalance(studentData)
            // .then(data => console.log('Successfully'))
            // .catch(err => console.log('errr: ' + err))
    }
    render() {
        return (
            <div >
                <Card>
                    <Card.Header
                        style={{ backgroundColor: 'rgb(99, 172, 240)', color: '#eee' }}
                        as="h5"
                        className="text-center">Fee Payment</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{this.props.studentReg}</ListGroup.Item>
                                <ListGroup.Item>{`Fee Balance: ${this.props.balance}`}</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        <div className="">
                            <Form>
                                <div className="form-group">
                                    <input className="form-control" ref="receipt" type="text" placeholder="Enter receipt number" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" ref="amount" type="text" placeholder="Enter amount" />
                                </div>
                                <div className="form-group">
                                    <Button className="form-control" variant="outline-primary" onClick={this.saveFeeStatement}>Make Payment</Button>
                                </div>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default FeeStatus;