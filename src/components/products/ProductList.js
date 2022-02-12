import classes from "./ProductList.module.css";
import ProductItem from "./ProductItem";
function ProductList(props) {
  return (
    <ul className={classes.List}>
      {props.products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          address={product.address}
          description={product.description}
        />
      ))}
    </ul>
  );
}

export default ProductList;
