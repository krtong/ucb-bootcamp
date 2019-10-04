   // Array of zoo animals.
   var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];
   let zooKeeper = ["Jim", "Bob", "Doug", "Ryan"]
   // Rewrite the following code to print all of the animals using a for-loop.
   for (let i = 0; i < zooAnimals.length; i++) {
     let name = zooKeeper[i];
     let animal = zooAnimals[i];
     let string = `${name}'s favorite animal at the zoo is the ${animal} <br>`;
     console.log(string);
   }