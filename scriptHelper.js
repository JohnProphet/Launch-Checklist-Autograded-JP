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
  let faultyItems = document.getElementById("faultyItems") // updated when item not ready for launch
  let launchStatus = document.getElementById("launchStatus") // turns green and displays "Shuttle is ready for launch"
  let pilotStatus = document.getElementById("pilotStatus")
  let copilotStatus = document.getElementById("copilotStatus")   
  let fuelStatus = document.getElementById("fuelStatus")
  let cargoStatus = document.getElementById("cargoStatus")
 
  //check if pilot, co-pilot, fuelLevel, cargoLevel are empty strings
 document.addEventListener("submit", function(event) {
    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
      alert("Each form must be filled out");
      event.preventDefault();
  //check if pilot and copilot have valid names and prompts if not  
    } else if (isNaN(pilot) === false || isNaN(copilot) === false) {
      alert("Enter valid names for Pilot and Co-pilot");
      event.preventDefault();
   
     if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
       alert("these need to be numbers");


  //check if fuel is >10,000 
  //  } else if (isNaN(fuelLevel) === true) {
      } else if (validateInput(fuelLevel) <= 10000) {
      alert("Fuel Level must be greater than 10,000.");
      event.preventDefault();
  //check if cargo mass is <10,000  
    } else if (validateInput(cargoLevel) > 10000) {
      alert("Cargo Mass must be less than 10,000");
      event.preventDefault();  

    } else {
      pilotStatus.innerHTML = `Pilot ${pilot}" is ready for launch`;
      copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`;
    }

    if (fuelLevel < 10000) {
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML =
          "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        fuelStatus.innerHTML =
          "Fuel level too low for launch";
      } else {
        fuelStatus.innerHTML =
          "Fuel level high enough for launch";
      }
      if (cargoMass.value >= 10000) {
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML =
          "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        cargoStatus.innerHTML =
          "Cargo mass too heavy for launch";
        
        } else {
        cargoStatus.innerHTML =
          "Cargo mass low enough for launch";
        }
      
      if (cargoMass.value <= 10000 && fuelLevel.value >= 10000) {
        launchStatus.innerHTML =
          "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
        cargoStatus.innerHTML =
          "Cargo mass low enough for launch";
        faultyItems.style.visibility = "hidden";
      }
      event.preventDefault();
    }
  })
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