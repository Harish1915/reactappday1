import { Component } from "react";
import axios from "axios";

export default class FetchExample2 extends Component{
  state = {
    products: [],
    loader: true,
    error: false,
  };

  fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response); // response.data will get the products data
      if (response.status === 200) {
        this.setState({
          products: response.data,
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
    return (
      <div>
        <button onClick={this.fetchProducts}> Fetch data</button>
        {this.state.loader ? (
          <h2>please wait....</h2>
        ) : (
          <div>
            {this.state.products.map((each) => {
              return (
                <div key={each.id}>
                  <h3> {each.title}</h3>
                  <p>{each.description}</p>

                  <div> $Price{each.price} </div>
                  <img src={each.image} alt={each.title} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
