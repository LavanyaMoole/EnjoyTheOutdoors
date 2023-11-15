document.addEventListener("DOMContentLoaded", () => {
    populateLocations();
    populateParkTypes()
    displayNationalParks(nationalParksArray);
    let locationSelect = document.getElementById("location-select");
    locationSelect.addEventListener("change", filterParksBasedOnLocationAndType)

    let parkTypeSelect = document.getElementById("parkType-select");
    parkTypeSelect.addEventListener("change", filterParksBasedOnLocationAndType)

})
//populating the locations/state in the location select element
function populateLocations() {
    let locationSelect = document.getElementById("location-select");
    for (let location of locationsArray) {
        const option = new Option(location);
        locationSelect.appendChild(option)
    }

}
//populating park type options
function populateParkTypes() {
    let parkTypeSelect = document.getElementById("parkType-select");
    for (let type of parkTypesArray) {
        const option = new Option(type);
        parkTypeSelect.appendChild(option);
    }
}
//filter parks based on location/state/teritory selected
function filterParksBasedOnLocationAndType() {
    let locationSelect = document.getElementById("location-select").value;
    let typeSelected = document.getElementById("parkType-select").value;

    let filteredParks = nationalParksArray;
    if (locationSelect != "Show All") {
        filteredParks = filteredParks.filter(park => park.State == locationSelect)

    }
    if (typeSelected != "Show All") {
        filteredParks = filteredParks.filter(park => park.LocationName.includes(typeSelected))
    }

    // Display the filtered parks or a message
    if (filteredParks.length > 0) {
        displayNationalParks(filteredParks);
    } else {
        displayNoParksMessage();
    }
    // console.log(locationSelect)
    // console.log(typeSelected);

    // displayNationalParks(filteredParks);

}
//display message
function displayNoParksMessage() {
    // Assuming you have a DOM element to display the message
    const parksContainer = document.querySelector("#content");
    parksContainer.innerHTML = "";
    let messageContainer = document.createElement("p");
    messageContainer.style.color="red";
    messageContainer.classList.add("fw-semibold")
    

    messageContainer.innerText="Sorry ☹! with your selection there is no parks available."
    parksContainer.appendChild(messageContainer)
}
//display parks
function displayNationalParks(nationalParks) {
    const parksContainer = document.querySelector("#content");
    parksContainer.innerHTML = "";
    nationalParks.forEach(park => displayNationalPark(park, parksContainer));

}
//display park details
function displayNationalPark(park, parentDiv) {
    let parkDiv = document.createElement("div");
    parkDiv.classList.add("card");
    parkDiv.classList.add("m-2");
    parkDiv.classList.add("p-2");


    parentDiv.appendChild(parkDiv);
    addParkName(park, parkDiv);
    addParkAddress(park, parkDiv);
    addCity(park, parkDiv);
    addState(park, parkDiv);
    addZipcode(park, parkDiv);
    addPhone(park, parkDiv);
    addFax(park, parkDiv);
    addLatitude(park, parkDiv);
    addLongitude(park, parkDiv);

}
//functions for adding park details to the parentdiv/parkdiv

function addParkName(park, parkDiv) {
    // create the park info div 
    const parkInfoDiv = document.createElement("div");
    parkDiv.appendChild(parkInfoDiv);

    // add park header
    const parkHeader = document.createElement("h5")
    parkHeader.innerText = "Park Name: " + park.LocationName;
    parkInfoDiv.appendChild(parkHeader);

}

function addParkAddress(park, parkDiv) {
    const parkAddress = document.createElement("p");
    parkAddress.innerText = "Address: " + park.Address;
    parkDiv.appendChild(parkAddress);
}
function addCity(park, parkDiv) {
    const cityOfPark = document.createElement("p");
    cityOfPark.innerText = "City: " + park.City;
    parkDiv.appendChild(cityOfPark);
}

function addState(park, parkDiv) {
    const stateOfPark = document.createElement("h6");
    stateOfPark.innerText = "State: " + park.State;
    parkDiv.appendChild(stateOfPark);
}
function addZipcode(park, parkDiv) {
    const zipcodeOfPark = document.createElement("p");
    zipcodeOfPark.innerText = "Zipcode: " + park.ZipCode;
    parkDiv.appendChild(zipcodeOfPark);
}

function addPhone(park, parkDiv) {
    const phoneOfPark = document.createElement("p");
    phoneOfPark.innerText = "Phone: " + park.Phone;
    parkDiv.appendChild(phoneOfPark);
}

function addFax(park, parkDiv) {
    const faxOfPark = document.createElement("p");
    faxOfPark.innerText = "Fax: " + park.Fax;
    parkDiv.appendChild(faxOfPark);
}
function addLatitude(park, parkDiv) {
    const parkLatitude = document.createElement("p");
    parkLatitude.innerText = "Latitude: " + park.Latitude;
    parkDiv.appendChild(parkLatitude);
}

function addLongitude(park, parkDiv) {
    const parkLongitude = document.createElement("p");
    parkLongitude.innerText = "Longitude: " + park.Longitude;
    parkDiv.appendChild(parkLongitude);
}





