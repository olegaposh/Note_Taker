// GET /notes - Should return the notes.html file.

// GET * - Should return the index.html file

// The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.


// The following API routes should be created:


// GET /api/notes - Should read the db.json file and return all saved notes as JSON.


// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.


// DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.



const express = require("express");
const path = require("path");
const fs = require("fs");
const db = require("./db/db.json");

const app = express();
const PORT = 3000;

// used for converting/reading data as json that is in POST body.
app.use(express.json());
// used to read arrays/strings that the FORM POSTs.
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (request, response) {
    console.log(`/ called`);
    response.sendFile(path.join(__dirname, "/public/index.html"));
    // response.sendFile(__dirname + "/public/index.html");
});

app.get("/notes", function (request, response) {
    console.log(`/ called`);
    response.sendFile(path.join(__dirname, "/public/notes.html"));
    // response.sendFile(__dirname + "/public/index.html");
});

app.get("/api/notes", function (request, response) {
    response.json(db);
});
// The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.
app.post("/api/notes", function (request, response) {

    let title = request.body;
 //text variable, title varible, into a object, 
    // fs read json file
    fs.readFile(db, handleFile)

    // Write the callback function
    function handleFile(err, data) {
        if (err) throw err
        obj = JSON.parse(data)
        let data_json = JSON.stringify(data);
        fs.writeFileSync(db, data_json);

        // You can now play with your datas
    }

    // write to the json file


    // return the json file
});



app.listen(PORT, function () {
    console.log(`App listening on http://localhost:${PORT}`);
});


