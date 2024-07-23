import React, { Component } from "react";



const imageUrls = [
   "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" ,
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" ,
   "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" ,
   "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" ,
   "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" ,
   "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" ,
   "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" ,
   "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" 
];

class UserList1 extends Component {
  state = {
    products: [],
    loader: true,
    error: false,
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to fetch users details');
        }
      })
      .then((data) => {
        for(let each in data){

          data[each]["image"]=imageUrls[each]
        }
        console.log(data);
        this.setState({ products: data, loader: false });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({ error: true, loader: false });
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.fetchProducts}>Fetch Data</button>
        {this.state.loader ? (
          <h1>Please wait....</h1>
        ) : this.state.error ? (
          <p>Error fetching data</p>
        ) : (
          <div>
            {this.state.products.map((each,index) => (
              <div key={each.id}>
                <h1>{each.id}</h1>
                <p>{each.name}</p>
                <p>{each.username}</p>
                <p>{each.email}</p>
                <p>{each.address.street}</p>
                <img src= {each.image }  style={{ maxWidth: '200px', maxHeight: '200px' }}/>
                {/* <img 
                  src={imageUrls[index%imageUrls.length].source} alt={`Image${each.id}`} style={{width:200,height:200}} /> another way to display images */}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default UserList1;
