import Cart from '../components/cart';
import Products from '../components/products';
import OrderSummary from '../components/orderSummary';
import { Component } from "react";

class Shop extends Component {

  state = {
    cartItems: [],
    isOrderPlaced: false,
    totalPrice: 0
  };

  getCartValue = (product, action) => {
    let updatedPrice = this.state.totalPrice;
    switch (action) {
      case "add":
        updatedPrice += +product.price;
        break;
      case "remove":
        updatedPrice -= +product.price;
        break;
      default:
        break;
    }
    return updatedPrice;
  };

  addProduct = (product) => {
    let cartItems = [...this.state.cartItems];
    product = {...product, id: Date.now()}
    cartItems = [...cartItems, product];
    this.setState({cartItems : cartItems, totalPrice: this.getCartValue(product, "add")});
  };

  removeProduct = (product) => {
    let cartItems = [...this.state.cartItems];
    const updatedCart = cartItems.filter(item => item.id !== product.id);
    this.setState({cartItems: updatedCart, totalPrice: this.getCartValue(product, "remove")});
  };

  placeOrder = () => {
    this.setState({isOrderPlaced : true});
  };

  renderShop = () => {
    if(!this.state.isOrderPlaced) {
      return (
        <>
          <div className="products">
            <Products addProduct={this.addProduct} />
          </div>
          {this.state.cartItems.length > 0 && (
            <div className="cart">
              <div className="cart-value">
                <span className="value">${this.state.totalPrice}</span>
                <button onClick={this.placeOrder} className="btn-order">Order</button>
              </div>
              <Cart cartItems={this.state.cartItems} removeProduct={this.removeProduct} />
            </div>
          )}
        </>
      )
    } else {
      return (
        <div className="order-details">
          <h1 className="value">Total: ${this.state.totalPrice}</h1>
          <OrderSummary orderedItems={this.state.cartItems} />
        </div>
      )
    }
  };

  render () {
    return this.renderShop()
  };
};

export default Shop;
