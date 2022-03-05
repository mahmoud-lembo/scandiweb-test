import { Link } from "react-router-dom";
import classes from "./AllProducts.module.css";
import { useNavigate } from "react-router-dom";
import NewProductForm from "../components/products/NewProductForm";
import { useMutation } from "react-query";
import { API, instance } from "../api/api";
function NewProductPage() {
  const navigate = useNavigate();
  const mutation = useMutation(
    (newProduct) => {
      return instance.post(API.addProduct, newProduct);
    },
    {
      onSuccess: () => {
        navigate("/", { replace: true });
      },
    }
  );

  return (
    <section>
      <div className={classes.Group}>
        <span className={classes.PageTitle}>Product Add</span>
        <div className={classes.btnGroup}>
          <button
            form="product_form"
            type="submit"
            className={classes.buttonAdd}
          >
            Save
          </button>
          <Link to="/">
            <button className={classes.buttonDelete} id="cancel-btn">
              Cancel
            </button>
          </Link>
        </div>
      </div>
      <hr></hr>
      <div className={classes.errorAlert} style={{display: mutation.error ? 'block' : 'none' }}>{mutation.error?.response?.data?.message}</div>
      <NewProductForm onAddProduct={mutation} />
    </section>
  );
}

export default NewProductPage;
