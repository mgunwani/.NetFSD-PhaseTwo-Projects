
import React, { Component } from "react";
import './main.css';

class Main extends Component {
    render() {
        var myStyle = { color: 'navy', fontSize: 40 };
        var number = 10;
        return (
            <div>
                {/* Applying Inline Style */}
                {/* Use CTRL+/ to comment/uncomment */}
                <h1 style={myStyle}>Main Component</h1>
                <p className="para">This is my main component</p>
                <p className="para">The sum of two numbers : {3 + 4}</p>
                <p className="para">{number > 0 ? "Positive" : "Negative"}</p>
            </div>
        );
    }
}

export default Main;