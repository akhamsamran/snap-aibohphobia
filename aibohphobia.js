/**write a function in JavaScript/PHP that returns true if the input is a palindrome, false if not:
 racacecar: true
 tacocat: true
 fuzzy: false
 arlo: false
 EXTRA Credit: return true for strings with spaces
 EXTRA EXTRA Credit: use recursion
 **/
/**the first character must match the last, the second must match the 2nd to last, etc...
 * take the total length of the string, divide it by 2,
 * take that number of characters from the front and make it into an array (arr[0]),
 * take the remaining string and reverse it and make it into an array (arr[1]) ,
 * compare the two arrays
 **/

/**
 * This is used to turn all my letters to lower-case-oops not necessary because done below
 **/

/**
 * this is used to count the number of characters within my string
 **/
function letterCounter(str) {
	var letters = 0;
	var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (var i=0; i<str.length;i++) {
		if (str[i] === alphabet.split("")) {
			letters = letters + str[i];
		}
	}
	console.log(letterCounter("Hello World!!!1"));
}

/**
 * this is used to cut my array into two
 */
//chunkArray([1,2,3,4,5,6],2);
//returns [[1,2,3],[4,5,6]]
function chunkArray(arr,n){
	var chunkLength = Math.max(arr.length/n ,1);
	var chunks = [];
	for (var i = 0; i < n; i++) {
		if(chunkLength*(i+1)<=arr.length)chunks.push(arr.slice(chunkLength*i, chunkLength*(i+1)));
	}
	return chunks;
}

/**
 * this is used to reverse my 2nd array
 */
var arr[1] = ['one', 'two', 'three'];
var reversed = array1.reverse();

/**
 * this is used to compare the characters within my arrays:
 **/
function mutation(arr) {

	arr[0] = arr[0].toLowerCase();
	arr[1] = arr[1].toLowerCase();
	var tester = arr[1].split('');
	for (var i = 0; i < tester.length; i ++) {
		if (arr[0].indexOf(tester[i]) == -1) return false;
	}
	return true;
}

mutation(["hello", "hey"]);

/**
 this compares the results of the comparisons between my arrays to see if they are all true, if not ALL true,
 then returns FALSE
 **/