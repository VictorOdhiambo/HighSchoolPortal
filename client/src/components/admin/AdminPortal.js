import React, { Component } from 'react'
import AdminHeader from './AdminHeader';
import AddStudent from '../AddStudent';
import jwt_decode from 'jwt-decode';
import {withRouter} from 'react-router-dom'


class AdminPortal extends Component {
    constructor() {
        super();
        this.state = {
            _id:'',
            username: '',
            firstName: '',
            lastName: '',
            password: ''
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
        }else{
            this.props.history.push('/')
        }
    }
    render() {
        return (
            <div className="container">
                <AdminHeader />
                <AddStudent />
            </div>
        );
    }
}

export default withRouter(AdminPortal);
