var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// Return the value '4.63' from store1
function accessesingData1() {
  return store1['2015-01-08'][0][1];
}

// Return how many 'Mint Wafers' were sold on January 6th
function accessesingData2() {
    return store1['2015-01-06'][1][2];

}

// *********** LOOPING OVER DATA *********** \\


// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
function loopingData1() {
  let namesOfCandiesSold = [];

  for (let i = 0; i < store1['2015-01-08'].length; i++) {
   namesOfCandiesSold.push(store1['2015-01-08'][i][0]);
  }
  return namesOfCandiesSold;
}

// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?
function loopingData2() {
  
  let jan10CandiesSold = [];
  for (let i = 0; i < store1['2015-01-10'].length; i++) {
    jan10CandiesSold.push(store1['2015-01-10'][i][2]);
  }

  let count=0;
  for (let i=0; i<jan10CandiesSold.length; i++) {
    let count = count + jan10CandiesSold[i];
  }
  return count;
}

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
function loopingData3() {
  let saleDates = Object.keys(store1);
  return saleDates;
}

// Use a loop to calculate the total number of candies sold at store1.
function loopingData4() {

// declare and initialize variable to he be returned that will be the result of adding together all of the index[2]'s
//  within the object'
//  use for..in loop to iterate through the keys in store1 object
//  return result;
let result = 0;

  for (let key in store1) {
    for (let i = 0; i < store1[key].length; i++) {
      result = result + store1[key][i][2];
    }
  }
  return result;
}

// In the previous exercise, where did you have to initialize the counter variable? Why?

function loopingData5() {
//PSEUDOCODE
//inside of the for in loop used in the previous step, use a for loop to iterate over the arrays that are the value for that key
//use accumulate pattern on index[2] for each item looped in previous step

//return the total number of candies sold which should be stored in our accumulator variable

// In the previous exercise, where did you have to initialize the counter variable? Why?

  return "We had to initialize it outside of any of the for loops, otherwise the accumulator pattern doesn't work properly as the result would be reassigned a value of 0 each time that the for..in loop runs for example";
}

// *********** CHALLENGE *********** \\

// Calculate the total revenue of the candies sold by store1 on January 10th.
// Be sure to return a number! Example `14.55`
function challenge1() {
  //
  // function precise(x) {  //to round to 2 numbers
  //   return Number.parseFloat(x).toPrecision(3);
  // }

  let totalRevenue = 0;

  for (var i = 0; i < store1['2015-01-10'].length; i++) {
    totalRevenue = totalRevenue + (store1['2015-01-10'][i][1] * store1['2015-01-10'][i][2]);
  }

  return Math.round(10 * totalRevenue)/10;

}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  loopingData3,
  loopingData4,
  loopingData5,
  challenge1
}
