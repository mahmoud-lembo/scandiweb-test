import { Link } from 'react-router-dom';
import ProductList from "../components/products/ProductList";
import { useState, useEffect } from "react";
import classes from "./AllProducts.module.css";
import { useNavigate } from 'react-router-dom';
import {ProductSelectedValues} from "../components/products/ProductItem";

function AllProductsPage (){
  
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);
  const naviage = useNavigate();

  function MassDelete(){
    const Form = new FormData();
    ProductSelectedValues.forEach(ProductSelectedValue => {
      Form.append("sku",ProductSelectedValue);
        fetch('https://scandiweb.lembo.tech/products/delete',
        {
        method: 'POST',
        body: Form
        }).then(() => {
          naviage('/add-product'); // Hot Reload
          naviage('/');
        });
    });
    }

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://scandiweb.lembo.tech/products/get'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const products = [];

        for (const key in data) {
          const product = {
            id: key,
            ...data[key]
          };

          products.push(product);
        }

        setIsLoading(false);
        setLoadedProducts(products);
      });
  }, []);

  if(isLoading){
    return (<section><p>Loading...</p></section>);
  }
    return <section>
      <div className={classes.Group}>
        <span className={classes.PageTitle}>Product List</span>
          <div className={classes.btnGroup}>
        <Link to="/add-product"><button className={classes.buttonAdd}>Add</button></Link>
        <button className={classes.buttonDelete} id="delete-product-btn" onClick={MassDelete} >Mass Delete</button>
          </div>
          </div>
        <hr></hr>
      <ProductList products={loadedProducts} />
    </section>;
}

export default AllProductsPage;