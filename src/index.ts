#!/usr/bin/env node
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("it works!");
});

app.listen(3005, () => {
  console.log("Listening on http://localhost:3005");
});
