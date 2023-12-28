// script.js

// Function to add a new row to the table
function addTableRow(application, users) {
    var table = document.getElementById("appTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = application;
    cell2.innerHTML = users;
}

// Example of adding a new row dynamically
addTableRow("NewApp", "500 million");