import React, { Component } from 'react'
import axios from 'axios'
import './Github.css'

export default class Github extends Component {
  state = {
    avatar: '',
    name: '',
    hidden: false
  }

  async componentDidMount() {
    const url =`https://api.github.com/users/${this.props.username}`
    const response = await axios.get(url)
    console.log('component did mount');
    this.setState({
      avatar: response.data.avatar_url,
      name: response.data.name
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update');
    console.log(prevProps);
    console.log(prevState);
  }

  componentWillUnmount() {
    console.log('COMPONENT WILL UNMOUNT');
  }

  handleClick = () => {
    this.setState({
      hidden: true
    })
  }

  render() {
    console.log('component did render'); 
    return (
      <div>
        <h1 className={`${this.state.hidden && 'hidden'}`} onClick={this.handleClick}>Hello {this.state.name}</h1>
        <img src={this.state.avatar} alt={this.state.name} />
      </div>
    )
  }
}
