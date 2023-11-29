import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Perfumes from "./Components/Perfumes.jsx";
import Quiz from "./Components/Quiz.jsx";
import Buy from "./Components/Buy.jsx";

function App() {
  const [perfumes, setPerfumes] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(1);
  const [basket, setBasket] = useState([]);

  //fetching all the perfumes
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/perfumes")
      .then((response) => {
        setPerfumes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //addClient
  const createClient = (username) => {
    axios
      .post("http://localhost:3000/api/perfumes/user", { userName: username })
      .then((response) => {
        console.log(response.data);
        // console.log(response.data.userId)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //add perfume to basket
  const addToBasket = (userId, perfumeId) => {
    console.log(userId, perfumeId);
    axios
      .post("http://localhost:3000/api/perfumes", {
        basketId: 7,
        userId: userId,
        perfumeId: perfumeId,
      })
      .then((response) => {
        getBasket(userId, perfumeId);
        setShowCart(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //filter perfume by user choice (not working due to problem with endpoints in the backend)
  const filterPerfumes = (gender, fragranceType, season) => {
    console.log(fragranceType, gender, season, "Floral/Women/Spring-Summer");
    axios
      .get(
        `http://localhost:3000/api/perfumes/${fragranceType}/${gender}/${season}`
      )
      .then((response) => {
        console.log(response);
        setPerfumes(response.data);
      })
      .catch((error) => console.error(error));
  };

  //get Basket
  const getBasket = (userId, perfumeId) => {
    // console.log(userId,perfumeId)
    axios
      .get(`http://localhost:3000/api/perfumes/basket/${userId}/${perfumeId}`)
      .then((response) => {
        setBasket(response.data);
      })
      .catch((error) => {
        console.error;
      });
  };

  //remove from basket
  const removeFromBasket = (userId, perfumeId) => {
    axios
      .delete(
        `http://localhost:3000/api/perfumes/basket/${userId}/${perfumeId}`
      )
      .then((response) => {
        getBasket(userId, 5);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addQuantity = (userId, perfumeId, quantity) => {
    console.log(userId, perfumeId, quantity);
    axios
      .put(`http://localhost:3000/api/perfumes/basket/${userId}/${perfumeId}`, {
        quantity: quantity + 1,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //render
  return (
    <>
      <nav className="navbar">
        <div>
          <input
            className="rounded-input"
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
          <button
            className="simple-button"
            onClick={() => {
              createClient(userName);
            }}
          >
            Enter name
          </button>
        </div>

        <h1
          className="website-title"
          onClick={() => {
            location.reload();
          }}
        >
          ArtFin
        </h1>
        <div>
          <button
            className="simple-button"
            onClick={() => {
              setShowQuiz(!showQuiz);
            }}
          >
            perfume finder
          </button>
          <button
            className="simple-button"
            onClick={() => {
              setShowCart(!showCart);
              getBasket(userId, 5);
            }}
          >
            Cart
          </button>
        </div>
      </nav>

      {showCart && (
        <Buy
          basket={basket}
          userId={userId}
          removeFromBasket={removeFromBasket}
          addQuantity={addQuantity}
        />
      )}
      {showQuiz && <Quiz filterPerfumes={filterPerfumes} />}
      <Perfumes perfumes={perfumes} userId={userId} addToBasket={addToBasket} />
    </>
  );
}

export default App;
