import React, { Component } from "react";
// import CustomProgressBar from "./CustomProgressBar"; // Adjust path as per your project structure
import CustomProgressBar from "../bootstrap/progressbar";
export default class FetchExample1 extends Component {
  state = {
    products: [],
    loader: true,
    error: false,
  };

  componentDidMount() {
    // Fetch data when component mounts
    this.fetchProducts();
  }

  fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => this.setState({ products: data, loader: false }))
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.setState({ error: true, loader: false });
      });
  };

  handleClick = (targetID) => {
    const updatedProducts = this.updateProductPrice(this.state.products, targetID);
    this.setState({
      products: updatedProducts,
    });
  };

  updateProductPrice = (products, targetID) => {
    return products.map((product) => {
      if (product.id === targetID) {
        // Increase the price of the product by 10% (for demonstration purposes)
        const updatedPrice = product.price * 1.1; // Increase by 10%
        return { ...product, price: updatedPrice };
      }
      return product;
    });
  };

  calculatePercentage = (price) => {
    const base = 1000; // Example base value
    let percentage = (price / base) * 100;
    return percentage.toFixed(2); // Adjusted to fix to 2 decimal places
  };

  render() {
    return (
      <div className="fetch-example-container">
        <button onClick={this.fetchProducts}>Fetch data</button>
        {this.state.loader ? (
          <h2>Please wait....</h2>
        ) : this.state.error ? (
          <h2>Error fetching data. Please try again later.</h2>
        ) : (
          <div>
            {this.state.products.map((product) => (
              <div key={product.id} className="card" onClick={() => this.handleClick(product.id)}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <button className="price">${product.price.toFixed(2)}</button>
                <img src={product.image} alt={product.title} />
                <CustomProgressBar scale={this.calculatePercentage(product.price)} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
