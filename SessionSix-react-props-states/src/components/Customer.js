import React from "react";

class Customer extends React.Component {

    state = {
        name: 'John Smith',
        age: 23
    };

    changeName = () => {
        this.setState({
            name: 'Sarah Bowling'
        });
    }

    changeAge = (newAge) => {
        this.setState({
            age: newAge
        });
    }

    changeNamefromInput = (event) => {
        this.setState({
            name: event.target.value
        })
        console.log(this.state.name);
    }

    render() {
        return (
            <div>
                <h2>Customer Component</h2>

                <button onClick={this.changeName}>Change Name</button> |
                <button onClick={() => { this.changeAge(40) }}>Change Age 1</button> |
                <button onClick={this.changeAge.bind(this, 100)}>Change Age 2</button>
                <br />
                <p>Write Name: <input type="text" onChange={this.changeNamefromInput} /></p>
                <p>Name: {this.state.name} | Age: {this.state.age}</p>
            </div>
        );
    }

}

export default Customer;