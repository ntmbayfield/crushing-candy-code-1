var store3 = require('./store3-data.js');

//()()()()() ACCESSING DATA ()()()()()\\

// Return Berry Bites data for store3 on January 7.
function accessesingData1() {
  return store3[1]['inventory sold']['Berry Bites'];
}

// Return how many Mint Wafers were sold on January 9th
function accessesingData2() {
  return store3[3]['inventory sold']['Mint Wafers']['quantity'];
}

// Return total number of dates included in the dataset.
function accessesingData3() {
  return store3.length;
}

//()()()()() LOOPING OVER DATA ()()()()()\\

// Create a loop to iterate over the sale data from store3. Use this loop to return an array of dates contained in the sale data.
function loopingData1() {
  //create a variable named 'saleDates' which should be initialized as an empty array.
  let saleDates = [];

  //write a for loop to iterate over sales data for store3, and uses the .push() method to add the value stored in the [date] key for each index of the array to our 'saleDates' variable
  for (let i = 0; i < store3.length; i++) {
    saleDates.push(store3[i]['date']);
  }

  //return the now populated 'saleDates' variable
  return saleDates;
}

// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price. Return the result.
// Example:
// {
//   'Dark Chocolate Crunchies': 1.30,
//   'Mint Wafers': 1.40,
//   ...
// }
function loopingData2() {
  //create a new empty object called jan10CandyPrices
let jan10CandyPrices = {};
let candyNames = Object.keys(store3[4]['inventory sold']);
let candyPrices = [];

// for (let i = 0; i < candyNames.length; i++) {
//     candyPrices.push(store3[4]['inventory sold'][candyNames[i]]['cost']); //instead of using[i] or [key] to be able to iterate through candy names had to use [candyNames[i]]
// }
for (let key in store3[4]['inventory sold']) {
candyPrices.push(store3[4]['inventory sold'][key]['cost']);
}

for (let i = 0; i < candyNames.length; i++) {
  jan10CandyPrices[candyNames[i]] = candyPrices[i];
}
console.log(candyPrices);
return jan10CandyPrices;

//use Object.keys method on store3[4]['inventory sold'] to loop over ['inventory sold'] for January 10th in store3 to get

}

// Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold over all dates. Return the result.
function loopingData3() {
  let result = 0;
    //use for loop to iterate over each index in the array of dates, and access the quantity of PBBP sold on that dates
    for (let i = 0; i < store3.length; i++) {
      result = result + store3[i]['inventory sold']['Peanut Butter Buttered Peanuts']['quantity'];
    }
    return result;
    //use accumulator pattern to update the total number of peanuts sold as we iterate

}

//()()()()() CHALLENGE ()()()()()\\

// Determine how much money store3 made on January 9th and return the result fixed to two decimal points
function challenge1() {
  //declare and assign an initial value of zero to accuymulator variable
  let totalRevenueJan9 = 0;

  //will need to loop over the object stored in index 3 of the array, which corresponds to Janaury 9th
  for (let key in store3[3]['inventory sold']) {
    let candyCost = store3[3]['inventory sold'][key]['cost'];
    let amountOfCandySold = store3[3]['inventory sold'][key]['quantity'];
    let revenueFromCandy = candyCost * amountOfCandySold;

    totalRevenueJan9 = totalRevenueJan9 + revenueFromCandy;
  }

  //round to totalRevenueJan9 to 2 decimal points
  return Math.round(100 * totalRevenueJan9)/100;


  //for each key(name of a candy) in inventory sold on that date need to multiply the value stored in the key named ['cost'] and multiply that by the value stored in the key named ['quantity']
  //then add the result of that multiplication to the accumulator variable
  //return the accumulator variable
}

module.exports = {
  accessesingData1,
  accessesingData2,
  accessesingData3,
  loopingData1,
  loopingData2,
  loopingData3,
  challenge1
}
