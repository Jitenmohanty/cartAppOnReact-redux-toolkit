import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({
      type: "calculatePrice",
    });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
    dispatch({
      type: "calculatePrice",
    });
  };
  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({
      type: "calculatePrice",
    });
  };
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              price={i.price}
              name={i.name}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              increment={increment}
              decrement={decrement}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Yet Inside Cart</h1>
        )}
      </main>
      <aside>
        <h2>Sub Total:${subTotal}</h2>
        <h2>Shipping :${shipping}</h2>
        <h2>Tax :${tax}</h2>
        <h2>Total :${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  id,
  price,
  name,
  increment,
  decrement,
  qty,
  deleteHandler,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="Item" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>

    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
