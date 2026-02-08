const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const movies = [
  { id: 1, title: "Stranger Things", image: "https://via.placeholder.com/200x300?text=Stranger+Things" },
  { id: 2, title: "Money Heist", image: "https://via.placeholder.com/200x300?text=Money+Heist" },
  { id: 3, title: "Breaking Bad", image: "https://via.placeholder.com/200x300?text=Breaking+Bad" },
];

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
