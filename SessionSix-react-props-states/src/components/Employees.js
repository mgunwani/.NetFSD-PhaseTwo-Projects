import React, { Component } from "react";
import Employee from "./Employee";

class Employees extends Component {

    state = {
        title: "Employee Management System",
        empList: [
            { name: 'King Kochhar', age: 23 },
            { name: 'Sarah Bowling', age: 30 },
            { name: 'James Bond', age: 40 },
            { name: 'Ricky Behel', age: 42 },
            { name: 'Ruskin Bond', age: 50 }
        ]
    };

    doClickMe = () => {
        console.log("You Clicked Me!!")
        const newState = this.state.empList.map((emp) => {
            const e1 = emp;
            e1.age = e1.age + 5;
            return e1;
        });
        this.setState({ newState });
    };

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>

                {
                    this.state.empList.map((emp, i) => {
                        return <Employee name={emp.name} key={i}>{emp.age}</Employee>
                    })
                }

                {/* <Employee name={this.state.empList[0].name}>{this.state.empList[0].age}</Employee>
                <Employee name={this.state.empList[1].name}>{this.state.empList[1].age}</Employee>
                <Employee name={this.state.empList[2].name}>{this.state.empList[2].age}</Employee> */}
                <br />
                <input type="button" onClick={this.doClickMe} value="Increase User Age by 5 Years" />
            </div>
        );
    }
}

export default Employees;