// Merging Two Arrays in JavaScript

var arr1 = [3,6,11];
var arr2 = [2,4,5,8,9];

 // Declaring a function
merge = function ( arr1, arr2)
{
	var indexOne = 0;
	var indexTwo = 0;
	var output = [];
	
	while ((indexOne < arr1.length) && (indexTwo < arr2.length)) {
		if (arr1[indexOne] < arr2[indexTwo])  {
			output.push(arr1[indexOne]);
			indexOne++;
		}  else  {
			output.push(arr2[indexTwo]);
			indexTwo++;
		}
	}
	if (indexOne < arr1.length) {
			for(var indexOne; indexOne<arr1.length; indexOne++) {
				output.push(arr1[indexOne]);
			}
	} else {
			for(var indexTwo; indexTwo<arr2.length; indexTwo++) {
				output.push(arr2[indexTwo]);
			}
	}
	return output;
}
console.log(merge(arr1,arr2))