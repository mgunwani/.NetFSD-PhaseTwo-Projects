import React, { Component } from "react";
import axios from "axios";

class EmployeeDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/employees/' + this.props.match.params.id)
            .then(result => {
                this.setState({ employee: result.data })
                console.log(this.state.employee);
            })
            .catch(error => { console.log(error) })
    }

    deleteEmployee(id) {
        axios.delete('http://localhost:3001/employees/' + id)
            .then(result => {
                alert('Employee Deleted with Id ' + id);
                this.props.history.push('/emp-list');
            })
            .catch(error => { console.log(error) })
    }

    render() {
        return (
            <div className="container">
                <div className="p-5 mb-4 bg-light rounded-3 text-center">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Employee Detail</h1>

                        <div className="card">
                            <div className="card-header">
                                <b>Details of {this.state.employee.name}</b>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Employee Id: {this.state.employee.id}</li>
                                <li className="list-group-item">Employee Name: {this.state.employee.name}</li>
                                <li className="list-group-item">Employee Email: {this.state.employee.email}</li>
                                <li className="list-group-item">Employee Salary: {this.state.employee.salary}</li>
                            </ul>
                            <div className="card-footer">
                                <button className="btn btn-secondary"
                                    onClick={this.deleteEmployee.bind(this, this.state.employee.id)}>Delete</button> |
                                <button className="btn btn-secondary">Update</button> |
                                <button className="btn btn-secondary">Back</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeDetail;