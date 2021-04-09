import './App.css';
import Users from "./components/Users";
import User from "./components/User";
import Employees from "./components/Employees";
import Customer from "./components/Customer";

function App() {
  return (
    <div className="App">
      {/* Demonstrating React Props */}
      {/* Stateful Components (Class Components) */}
      {/* <Users name="King Kochhar" age="24" /> */}
      {/* <Users name="John Smith" age="30" /> */}
      {/* <Users age="30" /> */}
      {/* <hr /> */}
      {/* Stateless Components (Functional Components) */}
      {/* <User name="Shreya Sharma" age="23">Delhi</User> */}
      {/* <User name="Gautam Bhalla" age="49">Mumbai</User> */}
      {/* <User age="34">Chennai</User> */}
      {/* <User age="34"></User> */}

      {/* Demonstrating React States */}
      {/* <Employees /> */}

      {/* Demonstrating React Data Binding */}
      <Customer />
    </div>
  );
}

export default App;
