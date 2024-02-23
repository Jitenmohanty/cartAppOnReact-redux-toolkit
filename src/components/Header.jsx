import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import Logo from '../assets/Logo.avif';

const Header = () => {
  const {cartItems} = useSelector(state=>state.cart)
  return (
    <nav>
      {/* <img src={Logo}/> */}
      <h2>TrendyFunk..</h2>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={'/cart'}>
          <FiShoppingBag size={'1.7rem'} />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
