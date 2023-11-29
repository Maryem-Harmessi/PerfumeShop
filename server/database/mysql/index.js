const { connect } = require("mongoose");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "perfumer",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MySQL!");
  }
});

// get all perfumes
const getAllPerfumes = () => {
  var sql = `SELECT * FROM perfumes`;
  return connection.promise().query(sql);
};

//add perfume to cart
const addToCart = (basketId, userId, perfumeId) => {
  // var sql = `INSERT INTO basket (users_userId,perfumes_perfumeId)
  // VALUES(?,?)`
  var sql = `INSERT INTO basket (idbasket,users_userId, perfumes_perfumeId)
    VALUES (?, ?, ?)`;
  return connection.promise().query(sql, [basketId, userId, perfumeId]);
};

//addUser
const addUser = (username) => {
  var sql = `INSERT INTO users (userName)
  VALUES (?)`;
  return connection.promise().query(sql, [username]);
};
//addperfume
const addPerfume = (
  name,
  fragranceFamily,
  gender,
  season,
  price,
  description
) => {
  var sql = `INSERT INTO perfumes (name,fragranceFamily,gender,season,price,description)
 VALUES (?,?,?,?,?,?)`;
  return connection
    .promise()
    .query(sql, [name, fragranceFamily, gender, season, price, description]);
};

//get perfumes filtered by client critirea
const getSomePerfumes = (fragranceFamily, gender, season) => {
  var sql = `SELECT * FROM perfumes
  WHERE fragranceFamily = ? AND gender= ? AND season=?`;
  return connection.promise().query(sql, [fragranceFamily, gender, season]);
};

const getCart = (userId) => {
  // var sql= `SELECT * FROM perfumes
  // INNER JOIN Basket ON perfumes.perfumeId= basket.perfumes_perfumeId
  // INNER JOIN users ON users.userId= basket.users_userId
  // WHERE basket.users_userId = ? AND basket.perfumes_perfumeId = ?`

  var sql = `SELECT * FROM perfumes 
  INNER JOIN Basket ON perfumes.perfumeId= basket.perfumes_perfumeId
  INNER JOIN users ON users.userId= basket.users_userId 
  WHERE basket.users_userId = ? `;
  return connection.promise().query(sql, [userId]);
};

//get one user
const getOneUtilisateur = (username) => {
  var sql = `SELECT * FROM users 
  WHER userName = '${username}'`;
  return connection.promise().query(sql);
};

//delete from basket
const deleteP = (userId, perfumeId) => {
  var sql = `DELETE FROM basket
  WHERE users_userId = ? AND perfumes_perfumeId = ?`;
  return connection.promise().query(sql, [userId, perfumeId]);
};
const updateP = (userId, perfumeId,quantity) => {
  var sql = `UPDATE  basket
  SET quantity=?
  WHERE users_userId = ? AND perfumes_perfumeId = ?`;
  return connection.promise().query(sql, [quantity,userId, perfumeId]);
};

// Don't forget to export your functions!
module.exports = {
  getAllPerfumes,
  addToCart,
  getSomePerfumes,
  addPerfume,
  addUser,
  getCart,
  getOneUtilisateur,
  deleteP,
  updateP,
};
