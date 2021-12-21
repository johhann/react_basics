import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: "Your name",
            numbers: "Secondary"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
    }
    // handle form on submit
    handleProfile(event){
        alert('Your name is: ' + this.state.value);
        event.preventDefault();
    }

    // handel changes to form
    handleChange(event){
        this.setState({value: event.target.value})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleProfile}>
                    <label htmlFor="">
                        Name: <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label><br /><br />
                    <label htmlFor="">Choose: </label>
                    <select name="" value={this.state.value} onChange={this.handleChange} id="">
                        <option value="">Primary</option>
                        <option value="">Secondary</option>
                        <option value="">Tertiary</option>
                        <option value="">Quaternary</option>
                    </select><br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
