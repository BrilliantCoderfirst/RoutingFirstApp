import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function Product() {
  const [data, setData] = useState([]);

  function fun() {
    const url = `https://fakestoreapi.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fun();
  }, []);

  return (
    <>
      <div className="productContainer">
        <h1>Our Products</h1>
        <div className="productsPart">
          {data.map((items, index) => (
            <Card
              key={index}
              id={items.id}
              image={items.image}
              category={items.category}
              price={items.price}
              items={items}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
