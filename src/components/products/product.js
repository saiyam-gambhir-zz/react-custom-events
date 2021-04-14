const product = (props) => {
  let actions = null;
  if(!props.isCartView) {
    actions = <button className="btn" onClick={props.addProduct}>Add To Cart</button>;
  } else if(props.isCartView && !props.orderPlaced) {
    actions = <button className="btn remove" onClick={props.removeProduct}>Remove</button>;
  };

  return <div className="product">
    <div className="product-image">
      <img src={`images/${props.image}`} alt={props.image} />
    </div>
    <div className="product-details">
      <h3 className="product-name">{props.name}</h3>
      <h4 className="product-price">
        ${props.price}
        <span className="product-storage">({props.storage})</span>
      </h4>
      {actions}
    </div>
  </div>
};

export default product;
