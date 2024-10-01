//Problem 1
for(let i = 1; i <= 100; i++){
    let output = " ";
    
    if(i % 3 == 0 && i % 5 == 0){
        output += "FizzBuzz";
    }
    else if(i % 3 == 0){
        output += "Fizz";
    }
    else if(i % 5 == 0){
        output += "Buzz";
    }
    else {
        output += i; // If not divisible by 3 or 5, print the number
    }  
    console.log(output); // If a number is not divisible by either 3 or 5, log the number.
}
//Problem 2
let n = 5; 
let currentNumber = n + 1; 

while (true) {
    let Prime = true;
    for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
        if (currentNumber % i === 0) {
            Prime = false;
            // If divisible, currentNumber is not prime, so skip to the next number
            currentNumber++;
            break;
        }
    }

    if (Prime) {
        console.log(`${currentNumber} is the next prime number after ${n}.`);
        break; // Exit the while loop as we found the next prime number
    }
}
let cells = "ID, Name, Occupation, Age"; 
let cellSplits = cells.split(","); // Split the headers by comma

let data1 = "\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let splitdata = data1.trim().split("\n"); 

console.log(cellSplits.join(" | ")); // Show the table headers like ID | Name | Occupation | Age

// Store values in an array
let processedData = [];

// Use forEach to process each row
splitdata.forEach(row => {
    let columns = row.split(","); // Split each row by commas into columns
    processedData.push(columns);  // Store the processed row in the array
    console.log(columns.join(" | ")); // Display each row with a separator (like |)
});
let values = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let valueSplit = values.split("\n");
console.log(valueSplit);



