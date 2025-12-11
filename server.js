/* 
 author: Ashya H
 filename: server.js
 description:   
*/

const express = require("express");
// loads Express format
const app = express();
// create an Express server
const path = require("path");
// load Node's utilities

/* files from directory */
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Final_Project_AshyaHamer.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});