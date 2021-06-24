import "./App.css";
import Login from "./Login";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

const HomePage = () => (
  <div>
    <img src="/images/2dce4fca085fe87f7992b8bc80bdb0b3.jpg" className="img_1" />
  </div>
);
export default App;
