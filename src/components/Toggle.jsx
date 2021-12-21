import React, { Component } from 'react'

export default class Toggle extends Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
    console.log('current state: ', this);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    )
  }
}
