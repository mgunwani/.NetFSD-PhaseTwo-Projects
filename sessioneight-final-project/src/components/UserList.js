import React, { Component } from "react";
import axios from "axios";

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(result => {
                this.setState({ users: result.data })
                console.log(this.state.users);
            })
            .catch(error => {
                console.log("Error Caught : " + error)
            })
    }

    render() {
        return (
            <div>
                <h2>UserList Component</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default UserList;