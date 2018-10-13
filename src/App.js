import React, { Component } from "react";

import "./App.css";
import GenerateQuote from "./components/GenerateQuote";
import DisplayQuote from "./components/DisplayQuote";

const sampleQuote = {
  character: "Homer Simpson",
  quote:
    "And this is the snack holder where I can put my beverage or, if you will, cupcake.",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // First quote before any click
      quotation: sampleQuote
    };
  }

  getNewQuote() {
    // Let's get the information from the Api with fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        //  now we update the state with setState
        this.setState({
          // there is only one object in the array, so [0]
          quotation: data[0]
        });
      });
  }

  render() {
    return (
      <div>
        <h1>The Simpsons' Quotes</h1>
        <DisplayQuote quotation={this.state.quotation} />
        <GenerateQuote selectQuote={() => this.getNewQuote()} />
      </div>
    );
  }
}

export default App;
