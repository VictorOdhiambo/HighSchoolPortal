import React, { Component } from 'react';
import _HeaderAccounts from './_HeaderAccounts';


class AccountsPortal extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container">
                <_HeaderAccounts />
            </div>
        );
    }
}
export default AccountsPortal;