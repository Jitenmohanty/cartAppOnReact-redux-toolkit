import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const increment = (id) => {
   dispatch({
    type:'addToCart',
    payload:{id}
   })
  };
  const decrement = (id) => {
    dispatch({
      type:'decrement',
      payload:id
    })
  };
  const deleteHandler = (id) => {
    dispatch({
      type:'deleteFromCart',
      payload:id
    })
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
        <h2>Sub Total:$2000</h2>
        <h2>Shipping :$200</h2>
        <h2>Tax :$20</h2>
        <h2>Total :$2220</h2>
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
