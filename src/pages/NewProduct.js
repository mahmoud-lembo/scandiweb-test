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
        <h1>Product Add</h1>
        <NewProductForm onAddProduct={addProductHandler} />
    </section>;
}

export default NewProductPage;