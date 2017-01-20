/*

Challange:

Create a grades object that stores a set of student grades in an object.
Provide a function for adding a grade and a function for displaying the student’s grade average.

*/

var grades = {
  //Array to store our grades
  gradeList : [],
  //Method to add grade to our gradeList
  addGrade : function(grade){
    this.gradeList.push(grade);
  },
  //Method to display gradeList average
  dispGradeAvg : function(){
    var add = function(currentTotal, currentValue){
      return currentTotal + currentValue;
    }
    return Math.floor(this.gradeList.reduce(add) / this.gradeList.length).toFixed();
  }
}

//Add data
grades.addGrade(40);
grades.addGrade(20);
grades.addGrade(30);

//test
console.log(grades.dispGradeAvg() + '%'); // 30%
