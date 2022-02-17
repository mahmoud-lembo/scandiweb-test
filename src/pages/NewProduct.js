import { Link } from 'react-router-dom';
import classes from "./AllProducts.module.css";
import { useNavigate } from 'react-router-dom';
import NewProductForm from '../components/products/NewProductForm';
function NewProductPage (){
  const Form = new FormData();
    const naviage = useNavigate();
    function addProductHandler(productData){
      Form.append("sku", productData.sku);
      Form.append("name", productData.name);
      Form.append("price", productData.price);
      Form.append("image", productData.image);
      Form.append("type", productData.type);
      Form.append("height", productData.height);
      Form.append("width", productData.width);
      Form.append("length", productData.length);
      Form.append("size", productData.size);
      Form.append("weight", productData.weight);
        fetch(
            'https://scandiweb.lembo.tech/products/add',
            {
                method: 'POST',
                body: Form,
            }
            ).then(() => {
              naviage('/', { replace: true });
          });
    }
    return <section>
      <div className={classes.Group}>
        <span className={classes.PageTitle}>Product Add</span>
          <div className={classes.btnGroup}>
        <button form='product_form' type="submit" className={classes.buttonAdd}>Save</button>
        <Link to="/"><button className={classes.buttonDelete} id="cancel-btn">Cancel</button></Link>
          </div>
          </div>
        <hr></hr>
        <NewProductForm onAddProduct={addProductHandler} />
    </section>;
}

export default NewProductPage;