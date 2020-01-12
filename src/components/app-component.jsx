import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="container">
                <h1 className="header__title">Welcome To React!!!</h1>
                <h2 className="header__subtitle">
                    This is a boiler plate project to start your Hackathon!!!
                </h2>
          </div>
        </div>
        <div className="container center">
          <h1 className="title">Welcome To React. This is App Component</h1>
        </div>
      </div>
    );
  }
}

export default App;
