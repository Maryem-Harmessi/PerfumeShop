const express = require("express");
const {
  getAll,
  getSome,
  addOne,
  createUser,
  addToBasket,
  getBasket,
  getOneuser,
  deletePerfume,
  updatePerfume,
} = require("./controller.js");
const router = express.Router();

router.get("/", getAll);
router.get("/basket/:userId/:perfumeId", getBasket);
router.get("/:fragranceFamily/:gender/:season", getSome);
// router.get("/username",getOneuser)

router.post("/", addToBasket);
router.post("/perfume", addOne);
router.post("/user", createUser);

router.delete("/basket/:userId/:perfumeId", deletePerfume);

router.put("/basket/:userId/:perfumeId", updatePerfume);

module.exports = router;
