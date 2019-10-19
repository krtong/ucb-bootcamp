// Step 3:
// Fill in the blanks to these functions.
const fiveSeconds = () => {
  // in the element with an id of `time-left` add an h2 saying About 10 Seconds Left!
  let html = `<h2>About 10 Seconds Left!</h2>`
  $("#time-left").append(html);
  // console log 10 seconds left
  console.log('10 seconds left');
}

const  tenSeconds = () => {
  // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
  let html = `<h2>About 5 Seconds Left!</h2>`
  $("#time-left").append(html);
  // console log 5 seconds left
  console.log('5 seconds left');
}

const timeUp = () => {
  // in the element with an id of `time-left` add an h2 saying Time's Up!
  let html = `<h2>Time's Up!</h2>`
  $("#time-left").append(html);
  // console log done
  console.log('done');
  // The following line will play the audio file above
  audio.play();
}
// Step 1:
// Use the following Audio file below:

var audio = new Audio("raven.mp3");

//  Step 2: do the following between the --- comments below
//  after 5 seconds, execute the fiveSeconds function
setTimeout(fiveSeconds, 5000);
//  after 10 seconds, execute the tenSeconds function
setTimeout(tenSeconds, 10000);
//  after 15 seconds, execute the timeUp function
setTimeout(timeUp, 15000);

// ---------------------
// CODE STEP TWO HERE
// ---------------------


