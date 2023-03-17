//html routes
//const express = require("express");
//const fs = require("fs");
const path = require("path");

module.exports = function (app) {
  // GET requests when users visit a different page
  app.get("/index", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/index.html"))
  );
  app.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  );
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/index.html"))
  );
};
