import React, { Component } from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap'
import {withRouter} from 'react-router-dom'

class AdminHeader extends Component {

    constructor() {
        super();

        this.logOut = this.logOut.bind(this)
    }

    logOut(e){
        e.preventDefault();
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="container" style={{ marginBottom: '60px ' }}>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
                    <Navbar.Brand href="#home">Administrator</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="">
                            <Nav.Link href="#students">Students</Nav.Link>
                            <Nav.Link href="#teacher">Teachers</Nav.Link>
                            <Nav.Link href="#exams">Exam Results</Nav.Link>
                            <Nav.Link href="#settings">Account settings</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Button color="success" variant="outline-light" onClick={this.logOut}>Logout</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>


            </div>
        );
    }
}

export default withRouter(AdminHeader);