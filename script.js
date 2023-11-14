const { formSubmission } = require("./scriptHelper");

// Write your JavaScript code here!
window.addEventListener("load", function(event) {
    event.preventDefault();
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse?.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
    document.addEventListener("submit", function(event) {
        event.preventDefault();
        const pilotName = document.querySelector("input[name=pilotName]").value
        const copilotName = document.querySelector("input[name=copilotName]").value
        const fuelLevel = document.querySelector("input[name=fuelLevel]").value
        const cargoMass = document.querySelector("input[name=cargoMass]").value
        const list = document.getElementById("input[name=faultyItems]").value      
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
     }
   )}
);


 