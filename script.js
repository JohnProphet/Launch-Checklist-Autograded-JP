const { formSubmission, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function(event) {
    event.preventDefault();
    let listedPlanets = planetsReturned; //this might be wrong. it was just "let listedPlanets;"
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse; // i suspect something should be here but i'm not sure what
    listedPlanetsResponse?.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        pickPlanet(planets);
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    
    })
    
    document.addEventListener("submit", function(event) {
//      event.preventDefault();
        const pilotName = document.querySelector("input[name=pilotName]").value
        const copilotName = document.querySelector("input[name=copilotName]").value
        const fuelLevel = document.querySelector("input[name=fuelLevel]").value
        const cargoMass = document.querySelector("input[name=cargoMass]").value
        const list = document.getElementById("input[name=faultyItems]").value      
 
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
    }
   )}
);


 