import React, {useState} from "react";

function Item({ name, category }) {
  // State for cart Items
  const [isAdded, setIsAdded] =useState(false)

  // Change button Class
 let buttonClass = isAdded? "in-cart" : ""

 const buttonText = isAdded? "Remove From Cart" : "Add to Cart"

  // Handle Click
  function handleClick(event) {
    setIsAdded((isAdded) => !isAdded)
  }
  return (
    <li className= {buttonClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
