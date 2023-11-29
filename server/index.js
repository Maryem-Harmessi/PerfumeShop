const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();
const db = require("./database/mysql");
const router = require("./routes");

app.use(express.json());
app.use(cors());
app.use("/api/perfumes", router);

app.get("/api/perfumes", (req, res) => {});

app.get("/api/users/:username", (req, res) => {});

app.get("/api/perfumes/:fragranceFamily/:gender/:season", (req, res) => {});

app.get("/api/perfumes/basket/:userId", (req, res) => {});

app.post("api/perfumes/perfume", (req, res) => {});

app.post("api/perfumes/user", (req, res) => {});

app.post("api/perfumes", (req, res) => {});

app.delete("/api/perfumes/basket/:userId/:perfumeId", (req, res) => {});

app.put("/api/perfumes/basket/:userId/:perfumeId", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
