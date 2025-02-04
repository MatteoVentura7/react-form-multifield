import { useState } from "react";

function FormList() {
  const [shoppingList, setShoppingList] = useState([
    "Pane",
    "Pizza",
    "Pasta",
    "Riso",
    "Uova",
  ]);
  const [productName, setProductName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setShoppingList((currentState) => [...currentState, productName]);

    setProductName("");
  };

  const emptyList = () => {
    setShoppingList([]);
  };

  const handleDelete = (productToDelete) => {
    setShoppingList((currentState) =>
      currentState.filter((product) => product !== productToDelete)
    );
  };

  return (
    <div>
      <ul>
        {shoppingList.map((product, index) => (
          <li key={index}>
            {product} <button onClick={() => handleDelete(product)}>🗑️</button>
          </li>
        ))}
      </ul>
      <button onClick={emptyList}>Cancella lista</button>
      <hr />
      <h3>Aggiungi Articolo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <div>
          <button type="submit">Invia</button>
        </div>
      </form>
    </div>
  );
}

export default FormList;
