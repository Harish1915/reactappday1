import ConditionalRendering from "../conditionalrender/condition";

const { Component } = require("react");



class SubscribeComponent extends Component{


    // state creation 

    state={

        isSubscribe:false,// true
        text1:"subscribe",
        text2:"subscribed"
    };

    handleClick=()=>{
// console.log("clicked");

this.setState({


    isSubscribe:!this.state.isSubscribe, // 12 n 23 line connected

},()=>{}) // here call back function is optional 
    };
    render(){

        return(

            <>
            <button onClick={this.handleClick}>
                {this.state.isSubscribe?this.state.text2:this.state.text1}
            </button>

            {
                this.state.isSubscribe?
                <>
                <h1>Thanks for subscribe</h1>
                <ConditionalRendering/>
                </>
                :<h2> Please subscribe </h2>
            }
            
            </>
        )
    }
}; 
export default SubscribeComponent;