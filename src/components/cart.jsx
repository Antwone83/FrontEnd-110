import "./cart.css";
import storeContext from "../context/storeContext";
import { useContext } from "react";
import CartProd from "./cartProd";

const Cart = () => {
  const context = useContext(storeContext);

  const getTotal = () => {
    let total = 0;
    for(let i=0; i< context.cart.length; i++) {
      let prod = context.cart[i];
      total += prod.quantity * prod.price;
    }

  };
  return (
    <div className="cart-page">
      <h1>Here's What You Have So Far...</h1>
      <h3>You have {context.cart.length} items in your cart</h3>

      <div className="cart-container">
        <div className="products">
          {context.cart.map((p) => ( 
          <CartProd key={p._id} data={p}></CartProd>))}
        </div>

        <div className="side-menu">
          <h5>Ready To Pay?</h5>
          <div className="product-total">
            
          <h6>${getTotal}</h6>
          </div>

          <hr></hr>

        </div>
      </div>
    </div>
  );
};

export default Cart;
