import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './HandleEvents'

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username:'',
            password:''
        }

        this._loginUser = this._loginUser.bind(this);
    }


    _loginUser(){
        let username = this.refs.username.value;
        let password = this.refs.password.value;
       
        if(username === 'Victor' && password === '123456'){
            this.setState({
                password:password,
                username:username
            });
            alert('Login Successful')
            
        }else{
            alert('Login failed');
        }
    }
    render() {
        return (
            <div className="container">
                <div className="panel" >
                    <h2 className="panelHeader">My School</h2>
                </div>
                <div className="loginDiv">
                    <h2 className="text-center loginText" >Login Here</h2>
                    <form onSubmit={this._loginUser}>
                        <div class="form-group">
                            <label className="customLabel loginTextColor" for="username">Username</label>
                            <input className="form-control customInput" type="text" placeholder="Enter username" ref="username" required />
                        </div>
                        <div className="form-group">
                            <label className="customLabel loginTextColor" for="password">Password</label>
                            <input className="form-control customInput" type="password" placeholder="Enter password" ref="password" required />
                        </div>
                        <div className="form-group">
                            <input id="loginBtn" className="btn btn-primary loginBtn" type="submit" value="Login"/>
                            
                        </div>
                    </form>

                    <p className="text-center">Forgot password?</p>
                    <p id="resetBtn" className="text-center"><a href="#">Reset</a></p>

                </div>
            </div>
        );
    }
}

export default Login;