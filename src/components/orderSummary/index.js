import Product from '../products/product';

const orderSummary = (props) => {
  return props.orderedItems.map(product => <Product key={product.id} {...product} isCartView orderPlaced />);
};

export default orderSummary;
