// from data.js
var tableData = data;

// YOUR CODE HERE!

var $tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Set values in input type date and time 
var inputFieldDate = d3.select("#datetime");


var inputFieldCity = d3.select("#city");

var columns = ["datetime", "city", "state", "country", "shape", "duration", "comments"]

// Input the data into the HTML
var createData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

createData(tableData);

button.on("click", () => {
    d3.event.preventDefault();

// Filter list by text field
var inputDate = inputFieldDate.property("value").trim();
var inputCity = inputFieldCity.property("value").toLowerCase().trim();
var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
var filterCity = tableData.filter(tableData => tableData.city === inputCity);
var filterCombinedData = tableData.filter(tableData => tableData.datetime === inputDate && tableData.city === inputCity);

$tbody.html("");

let response = {
    filterDate, filterCity, filterCombinedData
}
if(response.filterCombinedData.length !== 0) {
    createData(filterCombinedData);
}
else if(response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0))) {
    createData(filterDate) || createData(filterCity);
}

else {
    $tbody.append("tr").append("td").text("No UFO Sightings found");
}
})



