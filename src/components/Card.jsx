import React, { useContext } from 'react';
import Button from './Button';
import { ContextData } from "../App";


const Card = ({ id, image, category, price, items }) => {

  const {handleFunction} = useContext(ContextData);
  // console.log(handleFunction)


  return (
    <>
        <div className="card">
          <img src={image} alt="" />
          <div className="content">
            <h4>Category: {category}</h4>
            <p>Price: {price} Rs</p>
            <Button text="Add To Card" items={items} runFun={handleFunction} />
          </div>
        </div>
    </>
  )
}

export default Card