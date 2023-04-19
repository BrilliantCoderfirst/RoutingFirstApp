import React, { useContext } from "react";
import { ContextData } from "../App";
import Button from "../components/Button";

const AddToCard = () => {
  const { addCard, handleDelete } = useContext(ContextData);
  console.log(addCard);

  return (
    <>
      <div className="addToCardContainer">
        <h1>Add To Card</h1>
        <div className="cardContent">
          {addCard.length !== 0 ? (
            addCard.map((items, index) => (
              <div className="cards" key={index}>
                <div className="leftPart">
                  <img src={items.image} alt="" />
                  <div className="content">
                    <p>{items.title}</p>
                    <p>{items.description}</p>
                    <p>
                      Rs. <span> {items.price} </span>
                    </p>
                  </div>
                </div>
                <div className="removeBtn">
                  <Button text="Delete" items={items} runFun={handleDelete} />
                </div>
              </div>
            ))
          ) : (
            <h1>Data Not Found... Please Add To Card :)</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default AddToCard;
