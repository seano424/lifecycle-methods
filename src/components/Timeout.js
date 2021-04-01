import React, { Component } from 'react'

export default class Timeout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      timer: new Date()
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        timer: new Date()
      })
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Timeout</h1>
        <h3>{this.state.timer.getSeconds()}</h3>
      </div>
    )
  }
}

