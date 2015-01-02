var numSheep = 4;
var monthsToPrint = 12;

for(var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

	if(numSheep === 10000) {

    if(monthNumber % 4 === 0) {
      var removeSheep1 = numSheep * 0.75;
      numSheep = numSheep - removeSheep1;
      console.log("Removing " + removeSheep1 + " sheep from the population.");
    }
  
    else if(monthNumber % 4 !=== 0){
      var removeSheep2 = numSheep / 2;
      numSheep = numSheep - removeSheep2;
      console.log("Removing " + removeSheep2 + " sheep from the population.");
    }

}

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}