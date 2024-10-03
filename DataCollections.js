const prompt = require ("prompt-sync")({sigint: true})
// Part 1 Refactoring Code to make it better
//Output is a lot nicer looking style wise and the code is different from the original Loops js file 

// Define headers and split by comma
let headers1 = "ID, Name, Occupation, Age"; 
let headerItems1 = headers1.split(","); 

//This line removes whitespaces 
for (let i = 0; i < headerItems1.length; i++) {
    headerItems1[i] = headerItems1[i].trim();
}
console.log(headerItems1.join(" | ")); // Output: ID | Name | Occupation | Age

let data1 = `
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor's Assistant,26`;

// Split data into rows
let dataRows1 = data1.trim().split("\n");
// Process and display each data row
for (let i = 0; i < dataRows1.length; i++) {
    let row = dataRows1[i];
    let columns = row.split(","); // Split row into columns

    for (let j = 0; j < columns.length; j++) {
        columns[j] = columns[j].trim();
    }
    console.log(columns.join(" | "));
}
let data2 = `
Index,Mass (kg),Spring 1 (m),Spring 2 (m)
1,0.00,0.050,0.050
2,0.49,0.066,0.066
3,0.98,0.087,0.080
4,1.47,0.116,0.108
5,1.96,0.142,0.138
6,2.45,0.166,0.158
7,2.94,0.193,0.174
8,3.43,0.204,0.192
9,3.92,0.226,0.205
10,4.41,0.238,0.232`;

let dataLines2 = data2.trim().split("\n");

// Extract headers from the first line and split by comma
let headers2 = dataLines2[0].split(","); 
for (let i = 0; i < headers2.length; i++) {
    headers2[i] = headers2[i].trim();
}
console.log(headers2.join(" | "));

for (let i = 1; i < dataLines2.length; i++) {
    let row = dataLines2[i];
    let columns = row.split(","); // Split row into columns

    // Trim whitespace from each column
    for (let j = 0; j < columns.length; j++) {
        columns[j] = columns[j].trim();
    }

    console.log(columns.join(" | "));
}
// Part 2

// Combine headers and data1 to avoid redundant code 
let dataCombined = headers1 + '\n' + data1.trim();

// Split data into lines and headers
let lines = dataCombined.trim().split("\n");
let headers = lines[0].split(",");
let numCols = headers.length;

// Prompt user for number of columns
let input = prompt("Enter the number of columns per row:", numCols);
numCols = parseInt(input);
if (isNaN(numCols) || numCols < 1) {
    numCols = headers.length;
}
// Trim headers for whitespace
for (let i = 0; i < numCols; i++) {
    headers[i] = (headers[i] || "").trim();
}
console.log(headers.slice(0, numCols).join(" | "));

//Display data rows
for (let i = 1; i < lines.length; i++) {
    let cols = lines[i].split(",");
    for (let j = 0; j < numCols; j++) {
        cols[j] = (cols[j] || "").trim();
    }
    console.log(cols.slice(0, numCols).join(" | "));
}

//Part 3 
// Part 3: Transforming Data

// We will use the dataCombined variable from Part 2
// Split the data into lines
let dataLines = dataCombined.trim().split("\n");

// Extract headers from the first line and convert them to lowercase
headers = dataLines[0].split(",");
for (let i = 0; i < headers.length; i++) {
    headers[i] = headers[i].trim().toLowerCase();
}

// Initialize an array to store the objects
let dataObjects = [];

for (let i = 1; i < dataLines.length; i++) {
    let columns = dataLines[i].split(",");
    let obj = {};

    for (let j = 0; j < headers.length; j++) {
        let value;
        if (columns[j]) {
            value = columns[j].trim();
        } else {
            value = "";
        }
        obj[headers[j]] = value;
    }
    dataObjects.push(obj);
}
// Part 4
// We can remove the last eleemnt from sorted array via pop 
dataObjects.pop() 
dataObjects.splice(0,1, {id: "48", name: "Barry", occupation: "Runner", age: "25"}) //Insert beginning of arraythis new object 
dataObjects.push({id: "7", name: "Bilbo", occupation: "None", age: "111"}); //Insert at end of array 
console.log(dataObjects) //Display outputs

// 4. Calculate the average age of the group using a loop
let totalAge = 0;
for (let i = 0; i < dataObjects.length; i++) {
  totalAge += parseInt(dataObjects[i].age);
}
let averageAge = totalAge / dataObjects.length;
console.log("Average Age:", averageAge); 

