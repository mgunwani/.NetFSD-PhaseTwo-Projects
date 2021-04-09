import React, { Component } from "react";

class Users extends Component {
    render() {
        if (this.props.name) {
            return (<p>User Name: {this.props.name} | User Age: {this.props.age}</p>);
        } else {
            return (<p>User Age: {this.props.age}</p>);
            // return (<p>Invalid Entry..!!</p>);
        }
    }
}
export default Users;

{/* <p>User Name: {this.props.name} | User Age: {this.props.age}</p> */ }