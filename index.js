const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//function returnFirstTwoDrivers(){
//    return drivers.slice(0,2);
//}

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

//function returnLastTwoDrivers(){
//    return drivers.slice(2,);
//}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2,);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function fareMultiplier(fare) {
        return int * fare;
    }
}

//const fareDoubler = createFareMultiplier(2);

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

//const fareTripler = createFareMultiplier(3);

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, driveFunc){
    if (driveFunc == returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
        }
    else if (driveFunc == returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers);
    }
}