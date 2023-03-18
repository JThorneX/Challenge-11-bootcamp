// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

//rename to api instead of index.js for the requirement
//const express = require("express");
const fs = require("fs");

//const app = express();
//app.use("/notes", notesRouter);

//parse and read json from db
module.exports = (app) => {
  app.get("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      let dbJSON = JSON.parse(data);
      res.json(dbJSON);
    });
  });

  //post - receive new note to save to request body -> add to db.json -> return to client (unique id)
  app.post("/api/notes", (req, res) => {
    const clientNote = req.body;

    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      dbJSON = JSON.parse(data);
      dbJSON.push(clientNote);
      //says use package but ++ works?
      let noteIndex = 0;

      dbJSON.forEach((clientNote, index) => {
        clientNote.id = noteIndex;
        noteIndex++;
        return dbJSON;
      });
      noteString = JSON.stringify(dbJSON);

      fs.writeFile("./db/db.json", noteString, (err, data) => {
        if (err) throw err;
      });
    });
    res.send("Note Saved.");
  });

  //extra credit : delete notes
//   app.delete("/api/notes/:id", (req, res) => {
//     const noteId = req.params.id;
//     const note = JSON.parse(fs.readFile("./db/db.json"));
//     const deleteNote = note.filter((removeNote) => removeNote.id !== noteId);
//     fs.writeFile("./db/db.json", JSON.stringify(deleteNote));
//     res.send(deleteNote);
//   });
};
