import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <nav>
      <h2>Logo here..</h2>
      <div>
        <Link to={"/Home"}>Home</Link>
        <Link>
          <FiShoppingBag size={'1.7rem'} />
          <p>{0}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;