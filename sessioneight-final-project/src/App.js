import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import UserList from "./components/UserList";
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';
import EmployeeAdd from './components/EmployeeAdd';

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

        {/* <div>
          <NavLink to="/home" activeStyle={{ color: "green" }}>Home</NavLink> |
          <NavLink to="/about" activeStyle={{ color: "green" }}>About</NavLink> |
          <NavLink to="/contact" activeStyle={{ color: "green" }}>Contact</NavLink> |
          <NavLink to="/user/King" activeStyle={{ color: "green" }}>User Detail</NavLink> |
          <NavLink to="/user-list" activeStyle={{ color: "green" }}>User</NavLink> |
          <NavLink to="/emp-list" activeStyle={{ color: "green" }}>Employees</NavLink> |
          <input type="button" className="btn btn-secondary" onClick={this.loginHandle.bind(this)}
            value={this.state.loggedIn ? "Logout" : "Login"} />
        </div> */}

        <div className="container">
          <header className="d-flex justify-content-center py-3 border-bottom">
            <ul className="nav nav-pills">
              <li className="nav-item"><NavLink to="/home" className="nav-link active">Home</NavLink></li>
              <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
              <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
              <li className="nav-item"><NavLink to="/user/King" className="nav-link">User Detail</NavLink></li>
              <li className="nav-item"><NavLink to="/user-list" className="nav-link">Users</NavLink></li>
              <li className="nav-item"><NavLink to="/emp-list" className="nav-link">Employees</NavLink></li>
            </ul>
          </header>
        </div >

        <Route path="/" exact render={Home} />
        <Route path="/home" render={Home} />
        <Route path="/about" render={About} />
        {/* <Route path="/contact" render={Contact} /> */}
        <Route path="/contact" render={() => (this.state.loggedIn ? <Contact /> : (<Redirect to='/' />))} />
        <Route path="/user/:username" render={User} />
        <Route path="/user-list" component={UserList} />
        <Route path="/emp-list" component={EmployeeList} />
        <Route path="/emp-detail/:id" component={EmployeeDetail}></Route>
        <Route path='/emp-add' component={EmployeeAdd}></Route>
      </Router >
    );
  }
}

export default App;
