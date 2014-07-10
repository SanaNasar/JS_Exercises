// Write a function that takes a string that finds out how many times a character occurs. For example, the string "apple".

var string = "Bannanas"; // Declaring a string 
var myObj = {};  // Declaring an empty object.
var count = 0;   // Setting the count value to 0.

for (var i=0; i<string.length; i++) {

for(var v=0; v<string.length; v++){
if (string[i] === string[v]) {   //Comparing the two strings.
count++;
myObj[string[i]] = count;
}
}
count = 0;
}
console.log(myObj);