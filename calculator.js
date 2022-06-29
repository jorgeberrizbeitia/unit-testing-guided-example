function sum(a, b) {
  return;
}

function subtract(a, b) {
  return;
}

function divide(a, b) {
  return;
}

function multiply(a, b) {
  return a * b;
}


// STEPS TO RUN THE TEST:
// - open your terminal in the location of the lab
// - run this only once: npm i 
// - run this only once: npm run test:watch
// - run live server on lab-solution.html
// - the tests will be automatically updated everytime we code and save the js file

// The following is required to make unit tests work. Please ignore it.
if (typeof module !== 'undefined') {
  module.exports = { sum, subtract, divide, multiply };
}