import { useContext } from "react";
import FavoritesContext from "../pages/favorites-context";
import ProductList from "../components/products/ProductList";
function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <ProductList products={favoritesCtx.favorites}></ProductList>;
  }

  return (
    <section>
      <h1>My Favorite Products</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
