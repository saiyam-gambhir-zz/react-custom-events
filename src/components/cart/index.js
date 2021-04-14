import Product from '../products/product';

const cart = (props) => {
  return props.cartItems.map(product => <Product key={product.id} {...product} isCartView removeProduct={() => props.removeProduct(product)} />);
};

export default cart;
