/* 
 author: Ashya H
 filename: Final_Project_AshyaHamer.js
 description:   
*/

let xmlData = null;

window.onload = function () {
  loadXML();
};
// load XML on the loading page

function loadXML() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "class_catalog.xml", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      xmlData = xhr.responseXML;
      console.log("XML Loaded!");
    } else {
      console.error("Failed to load XML.");
    }
  };

  xhr.send();
}
