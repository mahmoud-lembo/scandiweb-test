import ProductList from "../components/products/ProductList";
import { useState, useEffect } from "react";

function AllProductsPage (){
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-test-34fa1-default-rtdb.europe-west1.firebasedatabase.app/products.json'
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
        <h1>All Products</h1>
      <ProductList products={loadedProducts} />
    </section>;
}

export default AllProductsPage;