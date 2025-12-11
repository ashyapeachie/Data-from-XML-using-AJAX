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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});