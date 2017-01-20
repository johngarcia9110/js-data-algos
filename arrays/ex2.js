/*

Store a set of words in an array and display the contents both forward and backward.


*/

var wordArray = ['this', 'is', 'my', 'array', 'of', 'words'];

//display forward

var forwardsArray = wordArray.join(' ');

console.log(forwardsArray);

//display backwards

var backwardsArray = wordArray.reverse().join(' ');

console.log(backwardsArray);
