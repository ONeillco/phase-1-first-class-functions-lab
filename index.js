// Code your solution in this file!
//const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

 function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2);

     
   }

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2)
    
    }
 
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 function createFareMultiplier(){
    function fareMultiplier(){
        return 5 * 5
    }
        createFareMultiplier = fareMultiplier
    return createFareMultiplier

}

function fareDoubler(){
    const fare = createFareMultiplier = 10 * 2
    return fare
}
    
function fareTripler(){
    const fare = createFareMultiplier = 12 * 3
    return fare
}
 
function selectDifferentDrivers(drivers, selectingDrivers){
    
    return  selectingDrivers(drivers)
    
}
