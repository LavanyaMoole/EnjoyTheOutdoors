document.addEventListener("DOMContentLoaded",()=>{
    let exploreParksButton=document.getElementById("exploreParks");
    exploreParksButton.addEventListener("click",exploreNationalParks);
    let exploreMountains=document.getElementById("exploreMountains");
    exploreMountains.addEventListener("click",exploreMountainsPage);
})
function exploreNationalParks(){
window.location.href="../html/nationalParksSearch.html";
}
function exploreMountainsPage(){
    window.location.href="../html/mountainsInformation.html";
}