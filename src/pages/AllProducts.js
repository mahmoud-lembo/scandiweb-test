import { Link } from "react-router-dom";
import ProductList from "../components/products/ProductList";
import classes from "./AllProducts.module.css";
import { ProductSelectedValues } from "../components/products/ProductItem";
import { useProducts } from "../hooks/useProducts";
import { API, instance } from "../api/api";

function AllProductsPage() {
  const { data, isFetching, error, refetch } = useProducts();

  function MassDelete() {
    const Form = new FormData();
    ProductSelectedValues.forEach((ProductSelectedValue) => {
      Form.append("sku", ProductSelectedValue);
      instance.post(API.deleteProducts, Form).then(() => refetch());
    });
  }

  if (isFetching) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) return null;

  return (
    <section>
      <div className={classes.Group}>
        <span className={classes.PageTitle}>Product List</span>
        <div className={classes.btnGroup}>
          <Link to="/add-product">
            <button className={classes.buttonAdd}>ADD</button>
          </Link>
          {data.length ? (
            <button
              className={classes.buttonDelete}
              id="delete-product-btn"
              onClick={MassDelete}
            >
              MASS DELETE
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <hr></hr>
      <ProductList products={data} />
    </section>
  );
}

export default AllProductsPage;
