import React, { Component } from 'react';

class _headerAccounts extends Component {

    constructor() {
        super();
    }
    render() {
        return (
            <div className="">
                <nav className="my-navbar navbar navbar-default navbar-fixed-top">
                    <div class="container">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="studentPortal.html">Accounts</a>
                        </div>
                        <div class="navbar-right">
                            <ul class="nav navbar-nav">
                                <li><a href="#">Account Settings</a></li>
                            </ul>
                            <button class="btn btn-primary logoutBtn loginBtn">Logout</button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default _headerAccounts;