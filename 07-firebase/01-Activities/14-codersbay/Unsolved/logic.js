// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)


// Assign the reference to the database to a variable named 'database'
var firebaseConfig = {
  apiKey: "AIzaSyDmqOlWMugKxjAWS8kgpiMF2KAqGugC5Cg",
  authDomain: "click-20259.firebaseapp.com",
  databaseURL: "https://click-20259.firebaseio.com",
  projectId: "click-20259",
  storageBucket: "click-20259.appspot.com",
  messagingSenderId: "940004811145",
  appId: "1:940004811145:web:ebe4af8fb822de9ce04158"
};

firebase.initializeApp(firebaseConfig);

// let database = firebase.database()
// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

firebase.database().ref().set({
  initialBid,
  initialBidder,
  highPrice,
  highBidder,
})

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
firebase.database().ref().on("value", function(snapshot) {
console.log(snapshot.val())
  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highPrice = snapshot.val().highPrice;
    highBidder = snapshot.val().highBidder;


    // Change the HTML to reflect the stored values

    $("#highest-price").html(highPrice);
    $("#highest-bidder").html(highBidder);

    // Print the data to the console.
    console.log("^ price", highPrice, "^ bidder", highBidder)

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-price").html(highPrice);
    $("#highest-bidder").html(highBidder);

    // Print the data to the console.

    console.log("^ price", highPrice, "^ bidder", highBidder)

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values


  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase


    // Log the new High Price


    // Store the new high price and bidder name as a local variable


    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
