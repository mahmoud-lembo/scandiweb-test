import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteProduct) => {},
    removeFavorite: (productID) => {},
    itemIsFavorite: (productID) => {}
});
export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteProduct){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteProduct);
        });
    }
    function removeFavoriteHandler(productID){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(product => product.id !== productID);
        }
            )
    }
    function itemIsFavoriteHandler(productID){
        return userFavorites.some(product => product.id === productID);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (<FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>);
}
export default FavoritesContext;
