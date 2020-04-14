const express = require("express");
const server = express();
const PORT = process.env.PORT || 8989;

server.get("*", (req, res) => {
  res.send({ message: "You are using the API" });
});

server.listen(PORT, (err) => {
  if (err) {
    throw err
  }
  console.log(`Listening on port ${PORT}`);
});
