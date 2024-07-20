import { Component } from "react";

export default class FetchExample extends Component {
  state = {
    products: [],
    loader: true,
    error: false,
  };

  fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => this.setState({ products: data, loader: false }))
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({ error: true, loader: false });
      });
  };


  calculatePercentage = (input) => {
    const base = 100;
    let percentage = (input / base) * 100;
    return percentage;
  };

  render() {
    return (
      <div className="fetch-example-container">
        <button onClick={this.fetchProducts}> Fetch data</button>
        {this.state.loader ? (
          <h2>please wait....</h2>
        ) : (
          <div className="card-container">
            {this.state.products.map((each) => {
              return (
                <div key={each.id} className="card">
                  <h3 className=""> {each.title}</h3>
                  <p>{each.description}</p>
                  
                  <div className="price"> ${each.price} </div>
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
// export default FetchExample;
