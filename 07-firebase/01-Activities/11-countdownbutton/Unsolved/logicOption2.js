// Initialize Firebase (YOUR OWN APP)
const firebaseConfig = {
  apiKey: "AIzaSyDmqOlWMugKxjAWS8kgpiMF2KAqGugC5Cg",
  authDomain: "click-20259.firebaseapp.com",
  databaseURL: "https://click-20259.firebaseio.com",
  projectId: "click-20259",
  storageBucket: "click-20259.appspot.com",
  messagingSenderId: "940004811145",
  appId: "1:940004811145:web:ebe4af8fb822de9ce04158"
};


firebase.initializeApp(firebaseConfig);
// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.


// Print the initial data to the console.


// Change the html to reflect the initial value.


// Change the clickCounter to match the data in the database


// Log the value of the clickCounter


// Change the HTML Value


// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1


  // Alert User and reset the counter


  // Save new value to Firebase


  // Log the value of clickCounter


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue


  // Save new value to Firebase


  // Log the value of clickCounter


  // Change the HTML Values

});
