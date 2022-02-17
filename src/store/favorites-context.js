import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteProduct) => {},
    removeFavorite: (productID) => {},
    itemIsFavorite: (productID) => {}
});
export function FavoritesContextProvider(props){
    var prevFavorites = localStorage.getItem('Favorites') ? JSON.parse(localStorage.getItem('Favorites'))['Favorites'] : [];
    const [userFavorites, setUserFavorites] = useState(prevFavorites);

    function addFavoriteHandler(favoriteProduct){
        setUserFavorites((prevUserFavorites) => {
            var prevFavorites = localStorage.getItem('Favorites') ? localStorage.getItem('Favorites').replace("]}", ",") : '{ "Favorites": [';
            prevFavorites = prevFavorites + JSON.stringify(favoriteProduct) + ']}';
            localStorage.setItem('Favorites', prevFavorites);
            return JSON.parse(localStorage.getItem('Favorites'))['Favorites'];
        });
    }
    function removeFavoriteHandler(productID){
        setUserFavorites(prevUserFavorites => {
            var prevFavorites = JSON.parse(localStorage.getItem('Favorites'));
            if(prevFavorites && prevFavorites['Favorites'].length > 1){
                prevFavorites = prevFavorites['Favorites'].filter( element => element.id !== productID);
                prevFavorites = '{ "Favorites": ' + JSON.stringify(prevFavorites) + '}';
                localStorage.setItem('Favorites', prevFavorites);
                return JSON.parse(localStorage.getItem('Favorites'))['Favorites'];
            }else
            {
                localStorage.removeItem('Favorites');
                return [];
            }
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
