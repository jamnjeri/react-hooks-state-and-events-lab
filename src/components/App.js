import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkMode, setMode] = useState(false);

  

  // Handle the dark button clicking
  function handleClick () {
    setMode((darkMode) => !darkMode);
  }

  // Change the div class name
  const appClass = darkMode ? "App dark" : "App light"

  //  Change the Dark mode text
  const mode = darkMode? "Dark" : "Light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{mode} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
