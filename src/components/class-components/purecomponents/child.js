import { Component, PureComponent } from "react";

export default class Child extends PureComponent{
    componentDidMount(){
        console.log("componentDidMount Child");// 2nd execute
    }
    // componentDidUpdate(){
    //     console.log("componentDidMount child");
    // }
    render(){
        console.log("Child rendering....");

        return(


            <div>HI child</div>
        )
    }
};
