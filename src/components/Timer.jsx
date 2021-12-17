import React, { Component } from 'react'

class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            minute: Number(this.props.minute),
            second: 10,
            message: "Counter has started"
        };
    }
    render(){
        const {minute} = this.state;
        const {second} = this.state;
        const {message} = this.state;
        return (
            <div>
                <h4>Down timer</h4>
                <h1>{minute} : {second}</h1>
                <h3>{message}</h3>
            </div>
        )
    }

    componentDidMount(){
        this.newInterval = setInterval(()=>{
            this.setState(function(prevState){
                if(prevState.second === 0 && prevState.minute === 0){
                    return {
                        message: "Counter has ended"
                    }
                }else if(prevState.second === 0){
                    return {
                        minute: prevState.minute - 1,
                        second: 10
                    }
                }else{
                    return {
                        second: prevState.second - 1
                    } 
                }         
            })
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.newInterval)
    }
}

export default Timer
