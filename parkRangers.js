function changePowerTotal(totalCurrentPower, genID, status, powerAmount) {
  if(status == "on" || status == "On" || status == "ON") {
    var power = totalCurrentPower + powerAmount;
    alert("Generator #" + genID + " is now on, adding " + powerAmount + " MW, for a total of " + morePower + "!");
  }
  
  else if(status == "off" || status == "Off" || status == "OFF") 
  {
	  var power = totalCurrentPower - powerAmount;
    alert("Generator #" + genID + " is now off, removing " + powerAmount + " MW, for a total of " + lessPower + "!");
  }
  
  return power;
}