import React, { Component } from "react";
import axios from "axios";
class EmployeeAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'abc',
            email: 'abc@gmail.com',
            salary: 12000
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        const employee = {
            name: this.state.name,
            email: this.state.email,
            salary: this.state.salary
        };
        console.log(employee);
        axios.post('http://localhost:3001/employees', employee)
            .then(result => {
                console.log('Employee Added Successfully..!!' + result.data);
            })
            .catch(error => { console.log(error) })
    }

    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value })
        console.log(this.state);

    }

    render() {
        return (
            <div className="container">
                <div className="p-5 mb-4 bg-light rounded-3 text-center">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Add New Employee</h1>
                        <br />
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Employee Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="name"
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Employee Email</label>
                                <input type="text"
                                    className="form-control"
                                    name="email"
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Employee Salary</label>
                                <input type="text"
                                    className="form-control"
                                    name="salary"
                                    onChange={this.handleChange} />
                            </div>
                            <input type="submit" className="btn btn-secondary" value="Add Employee" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeAdd;