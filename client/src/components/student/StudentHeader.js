import React, { Component } from 'react'
import { Navbar, Form, Button, Popover, OverlayTrigger, Modal } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class StudentHeader extends Component {
    constructor(){
        super();
        this.state = {
            modal: false
        }

        this.modalOpened = this.modalOpened.bind(this)
        this.modalClosed = this.modalClosed.bind(this)
        this.logOut = this.logOut.bind(this)
    }

    logOut(e){
        e.preventDefault();
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    modalOpened(){
        this.setState({
            modal: true
        })
    }

    modalClosed(){
        this.setState({
            modal: false
        })
    }

    render() {
        const popover = (
            <Popover id="settings">
                <Button variant="outline-primary" onClick={this.modalOpened}>Account settings</Button>
            </Popover>
        );
        return (
            <div style={{ marginBottom: '70px' }}>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
                    <Navbar.Brand style={{ marginLeft: '20px' }}>Student Portal</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text style={{ marginRight: '15px', color: 'white'}}>
                           Signed in as: <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <strong style={{cursor: 'pointer'}}>{this.props.studentName}</strong>
                            </OverlayTrigger>
                        </Navbar.Text>
                        <Form inline style={{ marginRight: '35px' }}>
                            <Button color="success" variant="outline-light" onClick={this.logOut}>Logout</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

                <Modal show={this.state.modal} onHide={this.modalClosed}>
                    <Modal.Header closeButton>
                        <Modal.Title>Account Settings</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Coming soon..
                    </Modal.Body>
                    <Modal.Footer>
                    <   Button variant="primary" onClick={this.modalClosed}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default withRouter(StudentHeader);