// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    /*
    validateInput() takes a string and returns "Empty", "Not a Number" or "Is a Number"
    where appropriate. The data from validateInput() will be fed to formSubmission().
    */
    if (testInput === '') {
        return "Empty";
        } else if (!isNaN(testInput)) {
        return "Is a Number";
        } else {
            return "Not a Number";
        }
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
 //check if pilot, co-pilot, fuelLevel, cargoLevel are empty strings
    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
        window.alert("Make sure all fields are filled before proceeding")   }
    
    if (validateInput(cargoLevel) === "Not a Number" || validateInput(fuelLevel) === "Not a Number") {
        window.alert("Yo homie, you need to put a number there!")    }

    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")   
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus")
    let launchStatus = document.getElementById("launchStatus") // turns green and displays "Shuttle is ready for launch"
    let faultyItems = document.getElementById("faultyItems") // updated when item not ready for launch


}

 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;