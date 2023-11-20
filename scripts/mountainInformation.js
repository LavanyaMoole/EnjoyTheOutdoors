document.addEventListener("DOMContentLoaded", () => {
    populateMountainsNames();
    let mountainSelect = document.getElementById("mountain-select");
    mountainSelect.addEventListener("change", filterMountains);

})
//populating mountains names
function populateMountainsNames() {
    let mountainSelect = document.getElementById("mountain-select");
    // console.log(mountainSelect);
    for (let mountain of mountainsArray) {
        const option = new Option(mountain.name);
        mountainSelect.appendChild(option);
    }
}
//filter the mountain based on the selected mountain name
function filterMountains() {
    let selectedMountain = document.getElementById("mountain-select").value;
    // console.log(selectedMountain)
    let mountain = mountainsArray.find(mountain => mountain.name == selectedMountain);

    // console.log(mountain);
    displayMountainDetails(mountain)
}
//display mountain details
function displayMountainDetails(mountain) {
    const detailsContainer = document.getElementById("content");
    detailsContainer.classList.add("card");
    detailsContainer.classList.add("m-2");
    detailsContainer.classList.add("p-2");

    detailsContainer.innerHTML = "";

    addMountainImage(mountain, detailsContainer);
    addMountainName(mountain, detailsContainer);
    addMountainDescription(mountain, detailsContainer);
    addMountainElevation(mountain, detailsContainer);
    addEffort(mountain, detailsContainer);

    addCoordinates(mountain, detailsContainer);
    //  Fetch  the  sunset/sunrise  times  for  a  specific  mountain
    getSunsetForMountain(mountain.coords[0], mountain.coords[1]).then(data => {
        addSunriseTime(data, detailsContainer);
        addSunsetTime(data, detailsContainer);
    })



}
function addMountainName(mountain, detailsContainer) {
    const nameOfMountain = document.createElement("h4");

    nameOfMountain.innerText = "Mountain Name: " + mountain.name;
    detailsContainer.appendChild(nameOfMountain)
}

function addMountainImage(mountain, detailsContainer) {

    const mountainImage = document.createElement("img");
    mountainImage.src = "../images/" + mountain.img;

    detailsContainer.appendChild(mountainImage);

}

function addMountainDescription(mountain, detailsContainer) {
    const mountainDescription = document.createElement("p");
    mountainDescription.innerText = "Description: " + mountain.desc;
    detailsContainer.appendChild(mountainDescription)
}

function addMountainElevation(mountain, detailsContainer) {
    const elevation = document.createElement("p");
    elevation.innerText = `Elevation: ${mountain.elevation}`;
    detailsContainer.appendChild(elevation)
}

function addEffort(mountain, detailsContainer) {
    const levelOfEffort = document.createElement("p");
    levelOfEffort.innerText = `Level Of Effort: ${mountain.effort}`;
    detailsContainer.appendChild(levelOfEffort)
}

function addCoordinates(mountain, detailsContainer) {
    const coordinates = document.createElement("p");
    coordinates.innerText = `Latitude: ${mountain.coords.lat}, Longitude: ${mountain.coords.lng}`;
    detailsContainer.appendChild(coordinates);
}

//  function  that  can  "fetch"  the  sunrise/sunset  times
async function getSunsetForMountain(lat, lng) {
    let response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`); let data = await response.json();
    return data;
}


function addSunriseTime(data, detailsContainer) {
    const sunriseTime = document.createElement("p");
    sunriseTime.innerText = "Sunrise Time: " + data.results.sunrise;
    // console.log(data.results.sunrise);

    detailsContainer.appendChild(sunriseTime);
}

function addSunsetTime(data, detailsContainer) {
    const sunsetTime = document.createElement("p");
    sunsetTime.innerText = "Sunset Time: " + data.results.sunset;
    // console.log(data.results.sunset);

    detailsContainer.appendChild(sunsetTime);
}


