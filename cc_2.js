// Task 1 Working With Arrays
let products = ["Lightsaber", "Blue Milk", "Robe", "Boots", "Backpack"]; // Input ["Lightsaber", "Blue Milk", "Robe", "Boots", "Backpack"]
console.log(products); // Output ["Lightsaber", "Blue Milk", "Robe", "Boots", "Backpack"]
products.push("Gloves"); // Adding new product to array
console.log(products); // Update array of products
products.pop(); // Remove last product from array
console.log("Updated product list:", products); // Update array of products 

// Task 2 Acessing and Modify Arrays 
let scores = [105, 89, 95, 97, 90]; // Array of student scores 
scores[1] = 93; // Changing the second score of the array 
let average = scores.reduce((acc, scores) => acc + scores, 0) / scores.length; // Summing the scores in the array then dividing by array length
console.log("Update Scores", scores); // Print updated scores
console.log("Average Scores", average) // Print average score

// Task 3 Working with Objects
let employee = {
    name: "Mandalorian",
    age: 32,
    department: "Security",
    isActive: true,
}; // Declare object
console.log(employee); // Log object to console
employee.department = "Guardians" ; // Update department propety 
employee.position = "Nighttime Guard"; // Add new property 'position' to object
console.log(employee); // Log updated object to console

// Task 4 Array of Object 

