function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   document.getElementById("missionTarget").innerHTML =
      `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
      `;
}
 
function validateInput(testInput) {
    /*
    validateInput() takes a string and returns "Empty", "Not a Number" or "Is a Number"
    where appropriate. The data from validateInput() will be fed to formSubmission().
    */
      if (testInput === '') {
          return "Empty";
         } else if (isNaN(testInput)) {
         return "Not a Number";
         } else {
         return "Is a Number";
      }
}
 
function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {
  let launchStatus = document.getElementById("launchStatus") // turns green and displays "Shuttle is ready for launch"
  let pilotStatus = document.getElementById("pilotStatus") // is pilot ready or not?
  let copilotStatus = document.getElementById("copilotStatus") // is copilot ready or not?
  let fuelStatus = document.getElementById("fuelStatus") // do we have enough fuel?
  let cargoStatus = document.getElementById("cargoStatus") // is cargo below required threshold?
      if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") { //check if pilotName, copilotName, fuelLevel, cargoMass are empty strings
        alert("Empty fields must be filled out, homie");
      }
      if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") { // makes sure fuelLevel and cargoMass are numbers
        alert("fuelLevel and cargoMass must be numbers");
      }
      if (pilotName !=="" && copilotName !=="") { //Make sure pilot and copilot are not blank
          pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
          copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
      }
      if (fuelLevel < 10000) { // if fuelLevel is under 10,000, list becomes visible, "not ready" messages appear
          list.style.visibility = "visible";
          launchStatus.innerHTML = "Shuttle Not Ready for Launch";
          launchStatus.style.color = "red";
          fuelStatus.innerHTML = "Fuel level too low for launch"; 
        } else { // if fuel level is 10,000 or more, list stays hidden
          launchStatus.innerHTML = "Shuttle is Ready for Launch";
          launchStatus.style.color = "green";
          fuelStatus.innerHTML = "Fuel level high enough for launch";    
        }
      
      if (cargoMass >= 10000) { //check if cargo mass is <10,000
          list.style.visibility = "visible";
          launchStatus.innerHTML = "Shuttle Not Ready for Launch";
          launchStatus.style.color = "red";
          cargoStatus.innerHTML = "Cargo mass too heavy for launch"; 
      } else {
          cargoStatus.innerHTML = "Cargo mass low enough for launch";
      }
      
      if (cargoMass < 10000 && fuelLevel >= 10000) { //checks if cargoMass and fuelLevel are within appropriate ranges
          launchStatus.innerHTML = "Shuttle is Ready for Launch";
          launchStatus.style.color = "green";
          cargoStatus.innerHTML = "Cargo mass low enough for launch";
          fuelStatus.innerHTML = "Fuel level high enough for launch";
      }    
    }  
 
async function myFetch() { // gets all of the planets from JSON
    let planetsReturned;
 
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      return response.json();
    });
      return planetsReturned;
}
   
function pickPlanet(planets) { //pick a random planet from planets list in JSON
  let randomPlanet = Math.floor(Math.random() * planets.length)  
  return (planets[randomPlanet]);
}
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;