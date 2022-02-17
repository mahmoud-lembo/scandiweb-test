import { Link } from 'react-router-dom';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import classes from './MainNavigation.module.css';
function MainNavigation(){
    const favoritesCtx = useContext(FavoritesContext);
    return <header className={classes.header}>
        <div className={classes.logo}>Junior Developer Test Task</div>
        <nav>
            <ul>
                <li><Link to="/">Product List</Link></li>
                <li><Link to="/add-product">Product Add</Link></li>
                <li><Link to="/favorites">Favorites <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link></li>
            </ul>
        </nav>
    </header>
    
}

export default MainNavigation;