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

document.getElementById("searchBtn").addEventListener("click", searchCourses);

function searchCourses() {
  if (!xmlData) return;

  const searchText = document.getElementById("searchInput").value.trim().toLowerCase();
  const category = document.getElementById("categorySelect").value;

  const classes = xmlData.getElementsByTagName("CLASS");
  const tableBody = document.querySelector("#resultsTable tbody");
  tableBody.innerHTML = "";

  for (let cls of classes) {
    let value = cls.getElementsByTagName(category)[0].textContent.trim().toLowerCase();

        if (value.includes(searchText)) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${cls.getElementsByTagName("DEPT")[0].textContent}</td>
            <td>${cls.getElementsByTagName("COURSENUMBER")[0].textContent}</td>
            <td>${cls.getElementsByTagName("COURSETITLE")[0].textContent}</td>
            <td>${cls.getElementsByTagName("DAYS")[0].textContent}</td>
            <td>${cls.getElementsByTagName("TIME")[0].textContent}</td>
            <td>${cls.getElementsByTagName("CAMPUS")[0].textContent}</td>`;

            tableBody.appendChild(row);
        }
    }
  }