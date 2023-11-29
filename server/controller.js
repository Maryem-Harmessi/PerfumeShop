const {
  getAllPerfumes,
  getSomePerfumes,
  addToCart,
  addPerfume,
  addUser,
  getCart,
  deleteP,
  updateP,
} = require("./database/mysql");

//get all perfumes
const getAll = (req, res) => {
  getAllPerfumes()
    .then((response) => {
      res.send(response[0]);
    })
    .catch((error) => res.send(error));
};

//get perfumes filtered by client critirea
const getSome = (req, res) => {
  perfumeId = req.params.perfumeId;
  var fragranceFamily = req.params.fragranceFamily;
  var gender = req.params.gender;
  var season = req.params.season;
  getSomePerfumes(fragranceFamily, gender, season)
    .then((response) => {
      res.send(response[0]);
    })
    .catch((error) => res.send(error));
};

//add perfume to basket
const addToBasket = (req, res) => {
  const { basketId, userId, perfumeId } = req.body;
  addToCart(basketId, userId, perfumeId)
    .then((response) => {
      res.send(req.body);
    })
    .catch((error) => {
      res.send(error);
    });
};

//add Perfume
const addOne = (req, res) => {
  var { name, fragranceFamily, gender, season, price, description } = req.body;
  addPerfume(name, fragranceFamily, gender, season, price, description)
    .then((response) => {
      res.send(req.body);
    })
    .catch((error) => {
      res.send(error);
    });
};

//add User
const createUser = (req, res) => {
  var username = req.body.userName;
  addUser(username)
    .then((response) => {
      res.send(response[0]);
    })
    .catch((error) => {
      res.send(error);
    });
};

//get Basket
const getBasket = (req, res) => {
  var userId = req.params.userId;
  var perfumeId = req.params.perfumeId;
  getCart(userId, perfumeId)
    .then((response) => {
      res.send(response[0]);
    })
    .catch((error) => res.send(error));
};

//get One user
const getOneuser = (req, res) => {
  if (!req.params.basket) {
    username = req.params.username;
    getOneUtilisateur(username)
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        res.send(error);
      });
  }
};

//delete Perfume from basket
const deletePerfume = (req, res) => {
  userId = req.params.userId;
  perfumeId = req.params.perfumeId;
  deleteP(userId, perfumeId)
    .then((response) => res.send("ok"))
    .catch((error) => {
      res.send("error");
    });
};

const updatePerfume = (req, res) => {
  userId = userId = req.params.userId;
  perfumeId = req.params.perfumeId;
  quantity = req.body.quantity;
  updateP(userId, perfumeId)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = {
  getAll,
  addOne,
  createUser,
  addToBasket,
  getBasket,
  getOneuser,
  deletePerfume,
  getSome,
  updatePerfume,
};
