import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Component } from "react";
import "./App.css";

export default class App extends Component {
  name = "RED ";
  render() {
    return (
      <div>
        <h1>Hello Guys my name is {this.name}</h1>
        <h2>This is an class Component</h2>
      </div>
    );
  }
}
