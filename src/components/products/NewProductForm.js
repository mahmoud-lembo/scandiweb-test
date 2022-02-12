import { useRef, useState } from 'react';
import Card from '../ui/Card';
import classes from './NewProductForm.module.css';

const TypeSwitcher = ({ name, items, selectid }) => {
  const productTypeInputRef = useRef();
  const sizeInputRef = useRef();
  const weightInputRef = useRef();
  const heightInputRef = useRef();
  const widthInputRef = useRef();
  const lengthInputRef = useRef();
    const defaultSelectValue = items[0]
    const [selected, setSelected] = useState(defaultSelectValue)
  
    return (
      <>
        <div className={classes.control}>
        <label htmlFor={selectid}>{name}</label>{' '}
        <select
          id={selectid}
          name={selectid}
          defaultValue={selected}
          style={{ color: selected === defaultSelectValue ? "black" : "gray" }}
          onChange={e => setSelected(e.target.value)}
          ref={productTypeInputRef}
        >
          {items.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        </div>
  
        {selected === "DVD" ?  <div className={classes.control}>
                <label htmlFor='size'>Size (MB)</label>
                <input type='text' required id='size' ref={sizeInputRef}/>
                <span>Please Provide Size in Megabytes!</span>
            </div>
      : selected === "Book" ?             <div className={classes.control}>
      <label htmlFor='weight'>Weight (KG)</label>
      <input type='text' required id='weight' ref={weightInputRef}/>
      <span>Please Provide Weight in Kilograms!</span>
  </div>
      : selected === "Furniture" ?             <div className={classes.control}>
      <label htmlFor='height'>Height (CM)</label>
      <input type='text' required id='height' ref={heightInputRef}/>

      <label htmlFor='width'>Width (CM)</label>
      <input type='text' required id='width' ref={widthInputRef}/>

      <label htmlFor='length'>Length (CM)</label>
      <input type='text' required id='length' ref={lengthInputRef}/>
      <span>Please Provide dimensions in HxWxL format!</span>
  </div>
      : ""}
      </>
    )
  }
function ProductForm(props){
    const skuInputRef = useRef();
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const imageInputRef = useRef();
    const productTypeInputRef = useRef();
    const sizeInputRef = useRef();
    const weightInputRef = useRef();
    const heightInputRef = useRef();
    const widthInputRef = useRef();
    const lengthInputRef = useRef();
    //const options=[{label:'DVD',value:'DVD'},{label:'Furniture',value:'Furniture'},{label:'Book',value:'Book'}];
    const [state,setState] = useState(false);
    function SubmitHandler(event){
        event.preventDefault();
        const enteredSku = skuInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredProductType = productTypeInputRef.current.value;
        const enteredSize = sizeInputRef.current.value;
        const enteredWeight = weightInputRef.current.value;
        const enteredHeight = heightInputRef.current.value;
        const enteredWidth = widthInputRef.current.value;
        const enteredLength = lengthInputRef.current.value;

        const productData = {
            sku: enteredSku,
            name: enteredName,
            price: enteredPrice,
            image: enteredImage,
            type: enteredProductType,
            size: enteredSize,
            weight: enteredWeight,
            height: enteredHeight,
            width: enteredWidth,
            length: enteredLength
        };
        props.onAddProduct(productData);
    }
    return <Card>
        <form className={classes.form} id='product_form' onSubmit={SubmitHandler}>
            <div className={classes.control}>
                <label htmlFor='sku'>SKU</label>
                <input type='text' required id='sku' ref={skuInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='name'>Name</label>
                <input type='text' required id='name' ref={nameInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='price'>Price</label>
                <input type='number' required id='price' ref={priceInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Image</label>
                <input type='url' required id='image' ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
            {/* <label htmlFor='address'>Type Switcher</label>
            <select onChange={() => setState(true)}>
            <option>Select product type</option>
            <option value="DVD">DVD</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture</option>
            </select>
            {state && <div>Hi </div>} */}
            <TypeSwitcher
  selectid="productType"
  name="Type Switcher"
  items={['Select product type', 'DVD', 'Book', 'Furniture']}
/>
            </div>
            
            {/*<div className={classes.control}>
                <label htmlFor='size'>Size (MB)</label>
                <input type='text' required id='size' ref={sizeInputRef}/>
                <span>Please Provide Size in Megabytes!</span>
            </div>
            <div className={classes.control}>
                <label htmlFor='weight'>Weight (KG)</label>
                <input type='text' required id='weight' ref={weightInputRef}/>
                <span>Please Provide Weight in Kilograms!</span>
            </div>
            <div className={classes.control}>
                <label htmlFor='height'>Height (CM)</label>
                <input type='text' required id='height' ref={heightInputRef}/>

                <label htmlFor='width'>Width (CM)</label>
                <input type='text' required id='width' ref={widthInputRef}/>

                <label htmlFor='length'>Length (CM)</label>
                <input type='text' required id='length' ref={lengthInputRef}/>
                <span>Please Provide dimensions in HxWxL format!</span>
          </div>*/}
            
            <div className={classes.actions}>
                <button>Add Product</button>
            </div>
        </form>
    </Card>;
}
export default ProductForm;