import Product from './product';

const productsData = [
  {name: 'Iphone 11 Pro (Silver)', price: '999', storage: '64gb', image: 'silver.png'},
  {name: 'Iphone 11 Pro (Grey)', price: '1199', storage: '128gb', image: 'grey.png'},
  {name: 'Iphone 11 Pro (Gold)', price: '1399', storage: '256gb', image: 'gold.png'},
  {name: 'Iphone 11 Pro (Midnight Green)', price: '1599', storage: '512gb', image: 'green.png'}
];

const products = (props) => {
  return productsData.map(product => <Product key={product.name} {...product} isCartView={false} addProduct={()=>props.addProduct(product)} />);
};

export default products;
