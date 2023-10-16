import allData from "../home/script.js"

function populateRestuarantData() {
    let titleRestuarant = document.createElement("h1")
    titleRestuarant.innerHTML = allData.name
}

window.onload = populateRestuarantData