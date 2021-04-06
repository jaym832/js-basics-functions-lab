// Code your solution in this file!
const hq=42;
function distanceFromHqInBlocks(location){
    return Math.abs(hq-location);
}

function distanceFromHqInFeet(location){
 return distanceFromHqInBlocks(location) *264;

}
function distanceTravelledInFeet(location1,location2){
    return Math.abs(location1-location2)*264;

}

function calculatesFarePrice(location1,location2){
   let distanceInFeet= distanceTravelledInFeet(location1,location2);
   if (distanceInFeet>2500){
       return'cannot travel that far';
    }
    else{
   
   if(distanceInFeet<400){
        return 0;
    }
   else if(distanceInFeet>=400&&distanceInFeet<=2000){
       return (distanceInFeet-400) *0.02;
   }
   else if (distanceInFeet>2000&&distanceInFeet<=2500){
        return 25;
   }
}
   
}



