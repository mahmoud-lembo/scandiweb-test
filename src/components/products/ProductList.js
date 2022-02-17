import classes from "./ProductList.module.css";
import ProductItem from "./ProductItem";
function ProductList(props) {
  return (
    <ul className={classes.list}>
      {props.products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          sku={product.sku}
          image={product.image}
          name={product.name}
          price={product.price}
          type={product.type}
          size={product.size}
          weight={product.weight}
          height={product.height}
          width={product.width}
          length={product.length}
        />
      ))}
    </ul>
  );
}

export default ProductList;
