const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(){
    return drivers.slice(2,4);
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(tickets) {
    return function(fare){
        return  tickets * fare;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, cb){
    return cb(drivers);
}