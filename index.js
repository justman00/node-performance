// I am a child, going to act like a server and nothing else
const express = require("express");
const crypto = require("crypto");
const Worker = require("webworker-threads").Worker;
const app = express();

app.get("/", (req, res) => {
  const worker = new Worker(function() {
    this.onmessage = function() {
      let counter = 0;
      while (count < 1e9) {
        counter++;
      }

      postMessage(counter);
    };
  });

  worker.onmessage = function({ data }) {
    console.log(data);
    res.send(`${data}`);
  };

  worker.postMessage();
});

app.get("/fast", (req, res) => {
  res.send("this was fast");
});

app.listen(5000, () => console.log("listening on port 5000"));
