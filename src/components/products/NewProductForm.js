import { useRef, useState } from "react";
import { getFormData } from "../../utils/getFormData";
import Card from "../ui/Card";
import classes from "./NewProductForm.module.css";

function ProductForm({ onAddProduct }) {
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
  const [currentState, changeState] = useState();

  function SubmitHandler(event) {
    event.preventDefault();
    const enteredSku = skuInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredProductType = productTypeInputRef.current.value;
    let enteredSize = "-1";
    let enteredHeight = "-1";
    let enteredWidth = "-1";
    let enteredLength = "-1";
    let enteredWeight = "-1";
    if (enteredProductType === "DVD") {
      enteredSize = sizeInputRef.current.value;
    } else if (enteredProductType === "Furniture") {
      enteredHeight = heightInputRef.current.value;
      enteredWidth = widthInputRef.current.value;
      enteredLength = lengthInputRef.current.value;
    } else if (enteredProductType === "Book") {
      enteredWeight = weightInputRef.current.value;
    }

    const productData = {
      sku: enteredSku,
      name: enteredName,
      price: enteredPrice,
      image: enteredImage,
      type: enteredProductType,
      height: enteredHeight,
      width: enteredWidth,
      length: enteredLength,
      size: enteredSize,
      weight: enteredWeight,
    };
    onAddProduct.mutate(getFormData(productData));
  }
  // End of SubmitHandler
  return (
    <Card>
      <form className={classes.form} id="product_form" onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="sku">SKU</label>
          <input type="text" required id="sku" ref={skuInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input type="number" required id="price" ref={priceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            value="https://i.ibb.co/7Q5J3TM/placeholder-image.png"
            id="image"
            ref={imageInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="TypeSwitcher">Type Switcher</label>
          <select
            onChange={(e) => changeState(e.target.value)}
            id="productType"
            required
            ref={productTypeInputRef}
          >
            <option>Select Product Type...</option>
            <option>DVD</option>
            <option>Book</option>
            <option>Furniture</option>
          </select>
        </div>
        {currentState === "DVD" ? (
          <div className={classes.control}>
            <label htmlFor="size">Size (MB)</label>
            <input type="number" required id="size" ref={sizeInputRef} />
            <span>Please Provide Size in Megabytes!</span>
          </div>
        ) : currentState === "Book" ? (
          <div className={classes.control}>
            <label htmlFor="weight">Weight (KG)</label>
            <input type="number" required id="weight" ref={weightInputRef} />
            <span>Please Provide Weight in Kilograms!</span>
          </div>
        ) : currentState === "Furniture" ? (
          <div className={classes.control}>
            <label htmlFor="height">Height (CM)</label>
            <input type="number" required id="height" ref={heightInputRef} />

            <label htmlFor="width">Width (CM)</label>
            <input type="number" required id="width" ref={widthInputRef} />

            <label htmlFor="length">Length (CM)</label>
            <input type="number" required id="length" ref={lengthInputRef} />
            <span>Please Provide dimensions in Centimeters!</span>
          </div>
        ) : (
          ""
        )}
      </form>
    </Card>
  );
}
export default ProductForm;
