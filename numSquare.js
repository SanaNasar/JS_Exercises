// JavaScript Number Square:

var myArray = []; // Declaring an empty array.

var numSquare = function(maxNum) {
for(var i=1; i<=maxNum; i++) {
	if(Math.pow(i,0.5)%1===0) {
		myArray.push(i);
		console.log(Math.pow(i,0.5));
		}
	}
		return myArray;
	};
	numSquare(16);
	console.log(myArray);