import axios from "axios";
import React, { Component } from "react";
import Loader from "./Loader";

export default class Wisdom extends Component {
  state = {
    quote: "",
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      axios.get("https://api.github.com/zen").then((response) => {
        console.log(response);
        this.setState({
          quote: response.data,
          isLoading: false,
        });
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>A wiseman once said...</h1>
        {this.state.isLoading ? <Loader /> : <h3>{this.state.quote}</h3>}
      </div>
    );
  }
}
