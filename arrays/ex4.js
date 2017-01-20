/*

“Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.”

*/

var wordMaker = {
  wordArray : ['t','e','s'],
  addLetter : function(letter){
    this.wordArray.push(letter);
  },
  printWord : function(){
    var word = this.wordArray.join('');
    console.log(word);
  }
}

//test
wordMaker.addLetter('t');
wordMaker.printWord(); //test
