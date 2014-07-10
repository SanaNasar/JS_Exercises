//SillySum Array 

var myArr = [1,2,3]; // Declaring an array.

var result = function(sum) {
	var count = 0;
	for(i=0; i<sum.length; i++) {
		count += (sum[i] * i);
		}
	return count;
	};
	
console.log(result(myArr));


