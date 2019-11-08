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
// Make sure that your configuration matches your firebase script version
// (Ex. 3.0 != 3.7.1)

// Create a variable to reference the database
var database = firebase.database()



// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;
// --------------------------------------------------------------

// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase.
// HINT: Assuming 'database' is our database variable, use...
database.ref().on("value", function(snapshot) {
  
  
  // We are now inside our .on function...
  
  // Console.log the "snapshot" value (a point-in-time representation of the database)
  console.log("snapshot", snapshot)
// This "snapshot" allows the page to get the most current values in firebase.


// Change the value of our clickCounter to match the value in the database
clickCounter = snapshot.val().clickCounter

// Console Log the value of the clickCounter
console.log(clickCounter)
// Change the HTML using jQuery to reflect the updated clickCounter value

// Then include Firebase error logging
// HINT: }, function(errorObject)
});
// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");
    database.ref().set({
      clickCount: clickCounter
    });
    clickCounter = initialValue;
console.log()
  }

  // Save new value to Firebase


  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);


});
