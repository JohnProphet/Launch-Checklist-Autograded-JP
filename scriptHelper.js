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
 
 function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {
  
  let faultyItems = document.getElementById("faultyItems") // updated when item not ready for launch
  let launchStatus = document.getElementById("launchStatus") // turns green and displays "Shuttle is ready for launch"
  let pilotStatus = document.getElementById("pilotStatus")
  let copilotStatus = document.getElementById("copilotStatus")
  let fuelStatus = document.getElementById("fuelStatus")
  let cargoStatus = document.getElementById("cargoStatus")

//check if pilotName, copilotName, fuelLevel, cargoLevel are empty strings
      if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
      alert("Each form must be filled out");
      }
      if (fuelLevel === NaN || cargoMass === NaN) {
        alert("fuelLevel and cargoMass must be numbers");
      } else {
        pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
      }
      
      if (fuelLevel < 10000) { // checks that fuel level is above 10,000
          list.style.visibility = "visible"
          launchStatus.innerHTML = "Shuttle Not Ready for Launch";
          launchStatus.style.color = "red";
          fuelStatus.innerHTML = "Fuel level too low for launch"; 
        } else {
          fuelStatus.innerHTML = "Fuel level high enough for launch";
        }         
//check if cargo mass is <10,000  
        if (cargoMass > 10000) {
          list.style.visibility = "visible"
          launchStatus.innerHTML = "Shuttle Not Ready for Launch";
          launchStatus.style.color = "red";
          cargoStatus.innerHTML = "Cargo mass too heavy for launch"; 
        } else {
          cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
        if (pilotName !== "" && copilotName !== "" && cargoMass < 10000 && fuelLevel >= 10000) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        }    
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