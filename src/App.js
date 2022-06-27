import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BuyPage from "./Components/BuyPage";

const App = () => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex((arr) => {
      return arr.id === item.id;
    });
    if (isAlreadyAdded !== -1) {
      return toast("Already In Cart", { type: "error", position: "top-right" });
    }

    setCartItem([...cartItem, item]);
  };
  const buyNow = () => {
    setCartItem([]);
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };
  return (
    <div className="App">
      <BuyPage addInCart={addToCart} />
    </div>
  );
};

export default App;
