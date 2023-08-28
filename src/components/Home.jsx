import React from "react";
import { toast } from "react-hot-toast";

const Home = () => {
  const img1 =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
  const img2 =
    "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/m/f/y/-original-imaggcawkhbb5qcg.jpeg?q=70";

  const Products = [
    {
      img: img1,
      id: "asd",
      name: "Mac Book",
      price: 30000,
    },
    {
      img: img2,
      id: "asdf",
      name: "Shoee",
      price: 3000,
    },
  ];

  const addToCartHandler = (options) => {
    console.log(options);
    toast.success('Add to Cart');
  };

  return (
    <div className="home">
      Home
      {Products.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.img}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ imgSrc, id, name, price, handler }) => (
  <div className="productCard">
    <img src={imgSrc} alt="" />
    <p>{name}</p>
    <h3>${price}</h3>
    <button onClick={() => handler({ name, id, price, quantity: 1 })}>
      AddToCart
    </button>
  </div>
);
export default Home;
