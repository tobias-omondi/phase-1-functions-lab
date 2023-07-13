
// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    //returns the number of blocks given a value
    if (blocks<42){
      return(42-blocks);
    }
    else {
  
    return(blocks-42);
  }
  }
function distanceFromHqInFeet (feets) {
  return distanceFromHqInBlocks(feets)*264;
}

function distanceTravelledInFeet(startblock,endblock){
  if (endblock>startblock){
    return((endblock-startblock)*264);
  }
  else
    return((startblock-endblock)*264);
}
function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }