const customers = require("./routes/customers");
const genres = require("./routes/genres");
const movies = require("./routes/movies");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/genreDB")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/movies", movies);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
