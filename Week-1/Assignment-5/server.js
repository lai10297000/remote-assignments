// http://localhost:3000
// http://127.0.0.1:3000

const express = require('express');
const app = express();
const port = 3000;


// set up a route handler for HTTP GET requests
app.get('/data', (req, res) => {
    let number = req.query.number;

    if (number == undefined){
        res.send('<h1 style="text-align: center; padding: 20px;">Lack of Parameter</h1>');

    } else if (!Number.isInteger(parseInt(number)) || parseInt(number)<0) { // number is not a positive integer
        // isNaN(number): true if number is not a number
        res.send('<h1 style="text-align: center; padding: 20px;">Wrong Parameter</h1>');

    } else {
        n = parseInt(number);
        const sum = calculateSum(n);
        // res.send(sum.toString());
        res.send( `<h1 style="text-align: center; padding: 20px;">The sum of numbers from 1 to ${number} is ${sum}</h1>`);
    }
    
})

// start the server
app.listen(port, () => {
  console.log(`Assignment 5 listening on port ${port}`)
})

function calculateSum(num) {
    // traditional for-loop method
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;

    // formula method
    // return (number * (number + 1)) / 2;
}



// test case
// http://localhost:3000/data                    // Lack of Parameter
// http://localhost:3000/data?number=xyz         // Wrong Parameter
// http://localhost:3000/data?number=-5          // Wrong Parameter
// http://localhost:3000/data?number=5           // 15
// http://localhost:3000/data?number=100000      // 5000050000
