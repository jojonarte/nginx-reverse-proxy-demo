const express = require("express");
const server = express();
const PORT = process.env.PORT || 9090;

server.get("*", (req, res) => {
  res.send({ message: "THIS IS THE BLOG" });
});

server.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${PORT}`);
});
