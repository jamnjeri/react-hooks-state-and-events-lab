import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Add keep track of the selected value 
  const [selectedCategory, setCategory] = useState("All")

  function handleChange (event) {
    // event.target.value is the value selected by the user
    setCategory(event.target.value);
  }

  // Filter the items to only display the ones based on the category selected
  const itemsDisplayed = items.filter ((item) => {
    if (selectedCategory === "All"){
      return true;
    } else {
      return item.category === selectedCategory;
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsDisplayed.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
