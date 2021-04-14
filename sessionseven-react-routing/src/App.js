import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import UserList from "./components/UserList";
import EmployeeList from './components/EmployeeList';

class App extends Component {

  state = {
    loggedIn: false
  }

  // loginHandle = () => {
  //   this.setState({
  //     loggedIn: true
  //   })
  //   console.log(this.state.loggedIn)
  // }

  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }



  render() {
    return (
      <Router>
        {/* <div>
          <Link to="/home">Home</Link> |
          <Link to="/about">About</Link> |
          <Link to="/contact">Contact</Link>
        </div> */}
        <div>
          <NavLink to="/home" activeStyle={{ color: "green" }}>Home</NavLink> |
          <NavLink to="/about" activeStyle={{ color: "green" }}>About</NavLink> |
          <NavLink to="/contact" activeStyle={{ color: "green" }}>Contact</NavLink> |
          <NavLink to="/user/King" activeStyle={{ color: "green" }}>User Detail</NavLink> |
          <NavLink to="/user-list" activeStyle={{ color: "green" }}>User</NavLink> |
          <NavLink to="/emp-list" activeStyle={{ color: "green" }}>Employees</NavLink> |
          {/* <button type="button" onClick={this.loginHandle.bind(this)}>Login</button> */}
          <input type="button" onClick={this.loginHandle.bind(this)}
            value={this.state.loggedIn ? "Logout" : "Login"} />
        </div>
        <Route path="/" exact render={Home} />
        <Route path="/home" render={Home} />
        <Route path="/about" render={About} />
        {/* <Route path="/contact" render={Contact} /> */}
        <Route path="/contact" render={() => (this.state.loggedIn ? <Contact /> : (<Redirect to='/' />))} />
        <Route path="/user/:username" render={User} />
        <Route path="/user-list" component={UserList} />
        <Route path="/emp-list" component={EmployeeList} />
      </Router>
    );
  }
}

export default App;
