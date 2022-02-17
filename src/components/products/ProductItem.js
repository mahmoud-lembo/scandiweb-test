import classes from './ProductItem.module.css';
import Card from '../ui/Card';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
export let ProductSelectedValues = [];
    
function ProductItem(props){
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
    function toggleFavoriteStatusHandler(){
        if(itemIsFavorite){
            favoritesCtx.removeFavorite(props.id);
        }else{
            favoritesCtx.addFavorite({
                id: props.id,
                sku: props.sku,
                image: props.image,
                name: props.name,
                price: props.price,
                type: props.type,
                size: props.size,
                weight: props.weight,
                height: props.height,
                width: props.width,
                length: props.length
            });
        }
    }

    function handleChange(e) {
        let isChecked = e.target.checked;
        isChecked ? ProductSelectedValues.push(e.target.value): ProductSelectedValues = ProductSelectedValues.filter(z => z !== e.target.value);
        }

    return <li className={classes.item}>
        <Card>
        <div className={classes.image}>
        <input className={classes['delete-checkbox']} onChange={e => handleChange(e)} value={props.id} type="checkbox" />
            <img src={props.image} alt="" />
        </div>
        <div className={classes.content}>
            <span>{props.sku}</span>
            <span>{props.name}</span>
            <span>{Number(props.price).toFixed(2)}$</span>
            <span>{props.type}</span>
            <span>Size: {props.size} MB</span>
            <span>Weight: {props.weight}KG</span>
            <span>Dimension <small>(HxWxL)</small>: {props.height} x {props.width} x {props.length} CM</span>
            
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}> {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
        </div>
        </Card>
    </li>
}

export default ProductItem;