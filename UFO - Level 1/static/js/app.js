// from data.js
var tableData = data;

// YOUR CODE HERE!

var $tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Set values in input type date and time 
var inputFieldDate = d3.select("#datetime");

var columns = ["datetime", "city", "state", "country", "shape", "Duration", "comments"]