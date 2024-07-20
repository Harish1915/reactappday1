import axios from "axios";

const { Component } = require("react");

class MountingComponent extends Component {
  constructor() {
    // 1st this execute
    console.log("constructor.");
    super(); // used to access the this key word inside the derived class
    this.state = {
      color: "red",
      recipesList:[],
      loader:true,
      error:false,
    };
  }

  static getDerivedStateFromProps(props, state) { // this is static method so that's we r not using setState
    // 2nd executed
    console.log("getDerivedStateFromProps", props, state);
    return { color: props.myColor };
  }
  componentDidMount() {
    // 4th executed
    this.fetchRecipes();
    console.log("Did");
  }

  fetchRecipes = async () => {
    try {
      // const response = await axios.get("https://dummyjson.com/recipes");// here we r doing D-structure
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        this.setState({
          recipesList: data.recipes,
          loader: false,
        });
      }
    } catch (error) {
      this.setState({
        error: true,
        loader: false,
      });
    }
  };
  render() {
    // 3rd this executed
    console.log("render");
    return (
      <>
        <h1>Mounting Example</h1>
        <h4 style={{ color: this.state.color }}>
          This is My Favorite {this.state.color}
        </h4>
      </>
    );
  }
}
export default MountingComponent;
