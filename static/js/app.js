// from murders.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });

  // Add count of solved cases
  var count = 0;
  for(var i = 0; i < data.length; ++i){
    if (data[i]["Solved"] == "Yes"){
      count++;
    }
  }
  var rate = d3.select("rate");
  var solverate = count/data.length*100
  rate.html(solverate.toFixed(1))
}

// Create a variable to keep track of all the filters as an object.
var filters = {};

// Use this function to update the filters. 
function updateFilters() {

  // Save the element that was changed as a variable.
  let changedElement = d3.select(this);

  // Save the value that was changed as a variable.
  let elementValue = changedElement.property("value");
  console.log(elementValue);

  // Save the id of the filter that was changed as a variable.
  let filterId = changedElement.attr("id");
  console.log(filterId);
  
  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }

  // Call function to apply all filters and rebuild the table
  filterTable();  
}

// Use this function to filter the table when data is entered.
function filterTable() {

  // Set the filtered data to the tableData.
  let filteredData = tableData;

  // Loop through all of the filters and keep any data that
  // matches the filter values
  for (var id in filters) {
    filteredData = filteredData.filter(row => row[id] === filters[id]);
  }
  
  // Finally, rebuild the table using the filtered data
  buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
d3.selectAll("select").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData.slice(0, 20));