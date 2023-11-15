    window.addEventListener("load", function(event) {   
        let listedPlanets;
        let listedPlanetsResponse=myFetch();
                
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            }).then(function () {
            // calls the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
            let studentPlanet = pickPlanet(planets); //picks a planet from the JSON

            addDestinationInfo(document, studentPlanet.name, studentPlanet.diameter, studentPlanet.star, studentPlanet.distance, studentPlanet.moons, studentPlanet.image); //adds info from the JSON to the chosen destination
            })
    
        document.addEventListener("submit", function(event) {
            event.preventDefault(); 
            const pilotName = document.querySelector("input[name=pilotName]").value
            const copilotName = document.querySelector("input[name=copilotName]").value
            const fuelLevel = document.querySelector("input[name=fuelLevel]").value
            const cargoMass = document.querySelector("input[name=cargoMass]").value
            const list = document.getElementById("input[name=faultyItems]")      
 
            formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
        }
    )}
);


 