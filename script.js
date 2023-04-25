const fs = require('fs');
const data = require("./sample_data")

for (let i = 0; i < data.length; i++) {
// Convert the "phone_price" attribute from a string to a number
data[i].phone_price = parseInt(data[i].phone_price);
}

// Write the array of JSON objects to a file
fs.writeFile('output.json', JSON.stringify(data), (err) => {
if (err) throw err;
console.log('Data written to file');
});