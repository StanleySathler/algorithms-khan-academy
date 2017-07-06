"use strict";
/**
 * Implementing Binary Search.
 * @Course: Khan Academy
 * @Author: Stanley Sathler
 */

function binarySearch(arr, target) {
	let min = 0,
		max = (arr.length - 1),
		index = null;

	while(min <= max) {
		index = (min + max) / 2;
		index = Math.floor(index);

		if(arr[index] < target)
	  		min = (index + 1);
		else if(arr[index] > target)
	  		max = (index - 1);
		else
	  		return index;
	}

	// Item does not exist in the array
	return -1;
}

console.log( binarySearch([2, 3, 5, 7, 11, 13, 17, 19, 23], 13) );
console.log( binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8) );
