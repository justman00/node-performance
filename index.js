process.env.UV_THREADPOOL_SIZE = 1;

const cluster = require("cluster");

// is the file being executed in master mode?
if (cluster.isMaster) {
  // cause index.js be executed again but in child mode
  cluster.fork();
  cluster.fork();
} else {
  // I am a child, going to act like a server and nothing else
  const express = require("express");
  const crypto = require("crypto");
  const app = express();

  app.get("/", (req, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("Hi there");
    });
  });

  app.get("/fast", (req, res) => {
    res.send("this was fast");
  });

  app.listen(5000, () => console.log("listening on port 5000"));
}
