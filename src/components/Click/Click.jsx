import React, { Component } from 'react'

export default class Click extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <h4>You clicked {count} times. </h4>
                <button>Event</button>
            </div>
        )
    };
}
