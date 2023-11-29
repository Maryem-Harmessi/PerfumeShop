import React, { useState } from "react";
import "../App.css";

const Buy = ({ basket, userId, removeFromBasket,addQuantity }) => {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = basket.reduce((acc,element)=>{
    return acc+element.price
  },0)
 
  return basket.map((perfume) => {
    return (
      <div>
        {" "}
        {perfume.name}
        <input
          className="rounded-input"
          type="number"
          // value={1}
          onChange={(e) => {setQuantity(Number(e.target.value))}}
        ></input>
        <button
          className="simple-button"
          onClick={() => {
            addQuantity(userId, perfume.perfumes_perfumeId,quantity);
          }}
        >
          update
        </button>
        <button
          className="simple-button"
          onClick={() => {
            console.log(userId, perfume.perfumes_perfumeId);
            removeFromBasket(userId, perfume.perfumes_perfumeId);
          }}
        >
          delete
        </button>
      </div>
    );
  });
};

export default Buy;
