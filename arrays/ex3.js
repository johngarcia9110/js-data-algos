/*

Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array.
Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.

*/

function weekTemps() {

   this.dataStore = [[80,93,75,83,92,78,78],[80,93,75,80,92,78,78],[80,93,80,92,92,75,78],[60,62,71,53,54,78,73]];

   this.addWeek = function(tempArr){
     this.dataStore.push(tempArr);
   };
   
   this.weekAvg = function(weekIndex){
     var week = this['dataStore'][weekIndex];
     var weekAverage = week.reduce(this.add) / week.length;
     weekAverage = Math.floor(weekAverage);
     console.log(weekAverage);
   };

   this.monthAvg = function(){
    var monthAverage = [];

    for(var i = 0; i < this.dataStore.length; i++){
      var week = this['dataStore'][i];
      monthAverage.push( week.reduce(this.add) / week.length );
    }

    monthAverage = Math.floor(monthAverage.reduce(this.add) / this.dataStore.length );

    console.log(monthAverage);
   };

   this.add = function(currentTotal, currentValue){
     return currentTotal + currentValue;
   }
}

var thisMonth = new weekTemps();

//test

thisMonth.weekAvg(0);//82

thisMonth.monthAvg();//78
