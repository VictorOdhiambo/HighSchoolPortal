import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Card, Form, FormGroup, FormControl, Button, FormLabel, FormText } from 'react-bootstrap';
import logo from '../images/userIcon2.png'
// import './HandleSignUpEvents'

import { registerUser } from '../ListFunctions'

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            visibility: 'none'
        }

        this.createAccount = this.createAccount.bind(this);
    }

    createAccount(e) {
        e.preventDefault();

        if(this.refs.password.value === this.refs.passwordTwo.value && 
            this.refs.password.value > 8
        ){
        const newUser = {
            username: this.refs.username.value,
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            form: this.currentForm.value,
            password: this.refs.password.value
        }

        registerUser(newUser)
            .then(res => {
                if (res) {
                    console.log('Success')
                }
                this.props.history.push('/')
            })
            .catch(err => {
                console.log('Registration error...' + err)
            })
        }else{
            alert('Passwords should match and contain at least 8 characters!')
        }
    }

    //TODO: Display showForm

    displayForm = (visibility) => {
        this.setState({ visibility: visibility })
    }

    render() {
        return (
            <div className="container">

                <Card style={{ margin: '80px auto', width: '30rem' }}>
                    <Card.Header style={{ backgroundColor: 'rgb(5,180,185)' }}>
                        <Card.Img src={logo} alt="school logo"
                            style={{
                                margin: '5px 160px',
                                width: '100px',
                                height: '100px',
                                borderRadius: '50px'
                            }}
                        />
                        <Card.Title as="h4" className="text-center" style={{ color: 'white' }}>Create account</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.createAccount}>
                            <div className="form-group">
                                <div style={{
                                    width: '200px',
                                    margin: 'auto'
                                }} className="radio">
                                    <label>
                                        <input
                                            type="radio"
                                            name="position"
                                            value="student"
                                            onClick={() => this.displayForm('block')} />
                                        Student
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="position"
                                            value="staff"
                                            onClick={() => this.displayForm('none')} />
                                        Staff
                                    </label>
                                </div>
                            </div>
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
                                <FormLabel style={{ marginLeft: '8px', color: 'rgb(5,120,205)' }}>First name</FormLabel>
                                <FormControl placeholder="Enter first name" ref="firstName" type="text"
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
                                <FormLabel style={{ marginLeft: '8px', color: 'rgb(5,120,205)' }}>Last name</FormLabel>
                                <FormControl placeholder="Enter last name" ref="lastName" type="text"
                                    style={{
                                        borderTopWidth: '0px',
                                        borderLeftWidth: '0px',
                                        borderRightWidth: '0px',
                                        borderBottomWidth: '2px',
                                        borderRadius: '0px'

                                    }}
                                />
                            </FormGroup>
                            <FormGroup id="showForm" style={{
                                display: this.state.visibility
                            }} >
                                <FormLabel style={{ marginLeft: '8px', color: 'rgb(5,120,205)' }}>Select form</FormLabel>
                                <select className="form-control" ref={select => this.currentForm = select} name="currentForm" >
                                    <option value="formOne">Form One</option>
                                    <option value="formTwo">Form Two</option>
                                    <option value="formThree">Form Three</option>
                                    <option value="formFour">Form Four</option>
                                </select>
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
                                <FormLabel style={{ marginLeft: '8px', color: 'rgb(5,120,205)' }}>Re-enter password</FormLabel>
                                <FormControl placeholder="Re-enter password" ref="passwordTwo" type="password"
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
                                <Button className="form-control" variant="outline-primary" type="submit">Create</Button>
                            </FormGroup>
                            <FormGroup>
                                <FormText as="p" className="text-center"><NavLink to="/">Back</NavLink></FormText>
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
export default withRouter(SignUp);