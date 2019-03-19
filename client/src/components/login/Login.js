import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Card, Form, FormGroup, FormControl, Button, FormLabel, FormText, Alert } from 'react-bootstrap';
import logo from '../images/userIcon2.png'

import { loginUser } from '../ListFunctions'


class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            alertDialog: false,
            variant: '',
            message: ''
        }

        this.login = this.login.bind(this);
    }

    login(e) {
        e.preventDefault();
        const user = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }
        loginUser(user)
            .then(res => {
                if (res) {
                    if (user.username.startsWith('TR')) {
                        this.props.history.push('/teacherportal')
                    } else if (user.username.startsWith('ADM')) {
                        this.props.history.push('/admin')
                    } else if(user.username.startsWith('SDT')) {
                        this.props.history.push('/studentportal')
                    } else if(user.username.startsWith('ACC')) {
                        this.props.history.push('/accountportal')
                    } else{
                        this.setState({
                            alertDialog: true,
                            variant: 'danger',
                            message: 'Login failed. Incorrect username or password'
                        })
                    }
                }
                else {
                    this.setState({
                        alertDialog: true,
                        variant: 'danger',
                        message: 'Login failed. Incorrect username or password'
                    })
                }
            })
            .catch(err => {
                this.setState({
                    alertDialog: true,
                    variant: 'danger',
                    message: 'Login failed... ' + err
                })
            })
    }

 
    render() {
        return (
            <div className="container">
                <Alert
                    style={{ marginTop: '15px', height: '50px' }}
                    show={this.state.alertDialog} dismissible variant={this.state.variant} onClick={() => this.setState({ alertDialog: false })}>
                    <p className="text-center">
                        {this.state.message}
                    </p>
                </Alert>
                <Card style={{ margin: '70px auto', width: '25rem' }}>
                    <Card.Header style={{ backgroundColor: 'rgb(5,180,185)' }}>
                        <Card.Img src={logo} alt="school logo"
                            style={{
                                margin: '5px 130px',
                                width: '100px',
                                height: '100px',
                                borderRadius: '50px'
                            }}
                        />
                        <Card.Title as="h4" className="text-center" style={{ color: 'white' }}>Sign In</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.login}>
                            <FormGroup>
                                <FormLabel style={{ marginLeft: '8px', color: 'rgb(5,120,205)' }}>Username</FormLabel>
                                <FormControl placeholder="Enter registration number" ref="username" type="text"
                                    style={{
                                        borderTopWidth: '0px',
                                        borderLeftWidth: '0px',
                                        borderRightWidth: '0px',
                                        borderBottomWidth: '2px',
                                        borderRadius: '0px'

                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel style={{ marginLeft: '8px', color: 'rgb(5,120,205)' }}>Password</FormLabel>
                                <FormControl placeholder="Enter password" ref="password" type="password"
                                    style={{
                                        borderTopWidth: '0px',
                                        borderLeftWidth: '0px',
                                        borderRightWidth: '0px',
                                        borderBottomWidth: '2px',
                                        borderRadius: '0px'
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button className="form-control" variant="outline-primary" type="submit">Login</Button>
                            </FormGroup>
                            <FormGroup>
                                <FormText as="p" className="text-center"><NavLink to="/signup">Create account</NavLink></FormText>
                            </FormGroup>
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text className="text-center">&copy;2019 all rights reserved.</Card.Text>
                    </Card.Footer>
                </Card>

            </div>

        );
    }
}

export default withRouter(Login);