import React from "react";
import "../App.css";

const Perfumes = ({ perfumes, userId, addToBasket }) => {
  return perfumes.map((perfume) => {
    return (
      <div className="card">
        {/* <img src={perfume.imageUrl}></img> */}
        <h2 key={perfume.id}>{perfume.name}</h2>
        <h4>{perfume.price} TND</h4>
        <p>{perfume.description}</p>
        <button
          className="simple-button"
          onClick={() => {
            addToBasket(userId, perfume.perfumeId);
          }}
        >
          add to Cart
        </button>
      </div>
    );
  });
};

export default Perfumes;
