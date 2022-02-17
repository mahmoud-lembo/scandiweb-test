import { Link } from 'react-router-dom';
import classes from "./AllProducts.module.css";
import { useNavigate } from 'react-router-dom';
import NewProductForm from '../components/products/NewProductForm';
function NewProductPage (){
    const naviage = useNavigate();
    function addProductHandler(productData){
        fetch(
            'https://react-test-34fa1-default-rtdb.europe-west1.firebasedatabase.app/products.json',
            {
                method: 'POST',
                body: JSON.stringify(productData),
                headers: {
                    'Content-Type': 'application/json'
                }
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