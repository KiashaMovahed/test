const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "stable",
  });
});

app.listen(5000, () => {
  console.log("server is running");
});
