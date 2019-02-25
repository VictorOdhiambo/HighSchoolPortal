import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Navigator extends Component {
    constructor() {
        super();

        this.state = {
            route: ''
        }
        
        this._handleLinkRequests = this._handleLinkRequests.bind(this);
    }

    _handleLinkRequests(route) {
        switch (route) {
            case 'home':
                <NavLink to="/">route</NavLink>
                break;
            case 'admin':
                <NavLink to="/admin">route</NavLink>
                break;
            case 'accounts':
                <NavLink to="/accounts">route</NavLink>
                break;
            case 'student':
                <NavLink to="/studentPortal">route</NavLink>
                break;
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}