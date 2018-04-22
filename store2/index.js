var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable, then return that variable
function accessesingData1() {
  let bananaSaleDates = [];
  for (var i = 0; i < store2['sale dates']['Banana Bunches'].length; i++) {
    bananaSaleDates.push(store2['sale dates']['Banana Bunches'][i]);
  } return bananaSaleDates;
  }
}

// Using a built-in array property return the total sale dates there are for store2's 'Banana Bunches'
function accessesingData2() {
  return store2['sale dates']['Banana Bunches'].length;
}

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Return your answer as a boolean and write a comment on why or why not.
function updatingData1() {
  let mintWaferPrice = store2['inventory prices']['Mint Wafers'];
  mintWaferPrice = 2.09;
  return false;
  //No, the price in the data for store2 doesn't change because we created a new variable "mintWaferPrice" and initially set it equal to the price of Mint Wafers.  When we assign a new value to that variable, it doesn't effect the original price of Mint Wafers stored in the data for store2.
}

// Set a variable equal to the 'Caramel Twists' sale dates in store2. Use pop to remove one of the sale dates for store2's 'Caramel Twists'. Does your variables value match up with what is in store2? Return your answer as a boolean and write a comment on why or why not.
function updatingData2() {
  let caramelTwistsSaleDates = store2['sale dates']['Caramel Twists'];
 store2['sale dates']['Caramel Twists'].pop();
 return true;
 //This is because pop modifies the original array, unlike some oher array methods which modify a copy of the original array.
}

/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for 'Caramel Twists'. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
// Example:
// {
//   '2014-11-19': 4,
//   '2014-11-20': 3,
// }
function loopingData1() {
  let amountSoldOnEachDate = {};
    //for loop to iterate over the array of 'sale dates' and for each item

    for (let i = 0; i < store2['sale dates']['Caramel Twists'].length; i++) {
    //  if (amountSoldOnEachDate.store2['sale dates']['Caramel Twists'][i] === undefined) {  can't use .store2 because we're using a reference to a key name not the literal name
      if (amountSoldOnEachDate[store2['sale dates']['Caramel Twists'][i]] === undefined) {      //had to modify bracket positions so that entire key name was inside of the bracket diurectly following the object name
        amountSoldOnEachDate[store2['sale dates']['Caramel Twists'][i]] = 1;
      } else {
        amountSoldOnEachDate[store2['sale dates']['Caramel Twists'][i]] = amountSoldOnEachDate[store2['sale dates']['Caramel Twists'][i]] + 1;
      }
    }
    return amountSoldOnEachDate;
}

// Iterate over store2's sale dates data to find which day had the most total number of sales. Return the date with the most sales.
function loopingData2() {
  let amountSoldOnEachDate = {};
  let maxValue = 0;
  let dateWithMostSales;


  for (let key in store2['sale dates']) {
    for (let i = 0; i < store2['sale dates'][key].length; i++) {
      if (amountSoldOnEachDate[store2['sale dates'][key][i]] === undefined) {
        amountSoldOnEachDate[store2['sale dates'][key][i]] = 1;
      } else {
        amountSoldOnEachDate[store2['sale dates'][key][i]] = amountSoldOnEachDate[store2['sale dates'][key][i]] + 1;
      }
    }
  }

  for (let key in amountSoldOnEachDate) {
    if (amountSoldOnEachDate[key] > maxValue) {
      maxValue = amountSoldOnEachDate[key];
      dateWithMostSales = key;
    }
    // don't need else statement because amountSoldOnEachDate[key] is less than or equal to maxValue then we don't do anything
  }
  return dateWithMostSales;
}

/////////// CHALLENGE ///////////

// Create and return an object containing the amounts that store2 made by selling each type of candy. Round each number to 2 decimal points.
// Example:
// {
//   'Caramel Twists': 14.15,
//   'Peppermint Poppers': 20.51
// }
function challenge1() {
  //will return an object that has candy names as the keys and the number of that candy sold multiplied by the price as the value
  let candyRevenues = {};

  for (let key in store2['sale dates']) {
    //to reference quantity sold use store2['sale dates'][key].length
    let quantity = store2['sale dates'][key].length;
    //to reference price of each candy use store2['inventory prices'][key]
    let price = store2['inventory prices'][key];

    candyRevenues[key] = (Math.round(100 * (quantity * price))/100).toString();

  }

  return candyRevenues;
}

module.exports = {
  accessesingData1,
  accessesingData2,
  updatingData1,
  updatingData2,
  loopingData1,
  loopingData2,
  challenge1
}
