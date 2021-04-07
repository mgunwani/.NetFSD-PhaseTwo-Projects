import React, { Component } from "react";
import User from "./User";

/**
 * Class Component (Stateful Component)
 */
class Users extends Component {
    render() {
        return (
            <div>
                <h2>Users Component</h2>
                <User />
                <User />
            </div>
        );
    }
}

export default Users;