
import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class EmployeeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }

    getEmployees() {
        axios.get('http://localhost:3001/employees')
            .then(result => {
                this.setState({ employees: result.data })
                console.log(this.state.employees);
            })
            .catch(error => {
                console.log("Error Caught : " + error)
            })
    }

    componentDidMount() {
        this.getEmployees();
    }

    deleteEmployee(id) {
        axios.delete('http://localhost:3001/employees/' + id)
            .then(result => {
                alert('Employee Deleted with Id ' + id);
                this.getEmployees();
                this.props.history.push('/emp-list');
            })
            .catch(error => { console.log(error) })
    }


    render() {
        return (
            <div className="container">
                <div className="p-5 mb-4 bg-light rounded-3 text-center">
                    <div className="container-fluid py-5">
                        <NavLink to={'/emp-add'} className="btn btn-secondary">Add New Employee</NavLink>
                        <br /><br />
                        <h3 className="display-5 fw-bold">Employee List</h3>
                        <br />
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Salary</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.employees.map((emp, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{emp.id}</td>
                                            <td>{emp.name}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.salary}</td>
                                            <td>
                                                <NavLink
                                                    to={'/emp-detail/' + emp.id} className="btn btn-secondary">View Detail</NavLink> |
                                                <button className="btn btn-secondary"
                                                    onClick={this.deleteEmployee.bind(this, emp.id)}>Delete</button> |
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}

export default EmployeeList;