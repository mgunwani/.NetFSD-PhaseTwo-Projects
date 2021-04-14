
import React, { Component } from "react";
import axios from "axios";
class EmployeeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/employees')
            .then(result => {
                this.setState({ employees: result.data })
                console.log(this.state.employees);
            })
            .catch(error => {
                console.log("Error Caught : " + error)
            })
    }


    render() {
        return (
            <div>
                <h2>Employee List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.salary}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default EmployeeList;