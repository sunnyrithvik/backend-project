const express = require("express");
const fs = require("fs");

const app = express();

const port = 3000;

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/data/tours-simple.json`)
);

app.get("/api/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tours: tours,
    },
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// GET method route
app.get("/myget", (req, res) => {
  res.send("GET request to the homepage");
});

// POST method route
app.post("/post", (req, res) => {
  res.send("POST request to the homepage");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
