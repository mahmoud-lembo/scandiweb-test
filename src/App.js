import { Route, Routes,Navigate } from 'react-router-dom';
import AllProductsPage from './pages/AllProducts';
import NewProductPage from './pages/NewProduct';
import FavoritesPage from './pages/Favorites';
import './App.css';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
      <Route path='/' element={<AllProductsPage/>} exact/>
      <Route path='/add-product' element={<NewProductPage/>}/>
      <Route path='/favorites' element={<FavoritesPage/>}/>
      <Route path='/products/get' element={<Navigate to="https://scandiweb.lembo.tech/products/get" />} />
      <Route path='/products/add' element={<Navigate to="https://scandiweb.lembo.techm/products/add" />} />
      <Route path='/products/delete' element={<Navigate to="https://scandiweb.lembo.tech/products/delete" />} />
        </Routes>
    </Layout>
  );
  
}

export default App;
