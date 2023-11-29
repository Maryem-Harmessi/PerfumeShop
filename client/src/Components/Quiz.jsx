import React, { useState } from "react";
import "../App.css";

const Quiz = ({ filterPerfumes }) => {
  const [gender, setGender] = useState("");
  const [fragrance, setFragrance] = useState("");
  const [season, setSeason] = useState("");

  return (
    <>
      <p>Favourite fragrance family</p>
      <form>
        <input
          type="radio"
          value="Floral"
          id="floral"
          onChange={(e) => setFragrance(e.target.value)}
        />
        <label for="floral">Floral</label>
        <br></br>
        <input
          type="radio"
          value="Woody"
          id="woody"
          onChange={(e) => setFragrance(e.target.value)}
        />
        <label for="woody">Woody</label>
        <br></br>
        <input
          type="radio"
          value="Fresh"
          id="fresh"
          onChange={(e) => setFragrance(e.target.value)}
        />
        <label for="fresh">Fresh</label>
        <br></br>
      </form>

      <p>Gender</p>
      <form>
        <input
          type="radio"
          value="Women"
          id="women"
          onChange={(e) => setGender(e.target.value)}
        />
        <label for="women">Women</label>
        <br></br>
        <input
          type="radio"
          value="Men"
          id="men"
          onChange={(e) => setGender(e.target.value)}
        />
        <label for="men">Men</label>
        <br></br>
        <input
          type="radio"
          value="Unisex"
          id="unisex"
          onChange={(e) => setGender(e.target.value)}
        />
        <label for="unisex">Unisex</label>
        <br></br>
      </form>

      <p>Season</p>
      <form>
        <input
          type="radio"
          value="Spring-Summer"
          id="springSummer"
          onChange={(e) => setSeason(e.target.value)}
        />
        <label for="springSummer">Spring/Summer</label>
        <br></br>
        <input
          type="radio"
          value="Fall-Winter"
          id="fallWinter"
          onChange={(e) => setSeason(e.target.value)}
        />
        <label for="fallWinter">Fall/Winter</label>
        <br></br>
      </form>

      <button
        className="simple-button"
        onClick={() => {
          filterPerfumes(gender, fragrance, season);
        }}
      >
        Submit
      </button>
    </>
  );
};

export default Quiz;
