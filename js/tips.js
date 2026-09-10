let ecoTips = [

    "Carry a reusable water bottle instead of buying plastic bottles.",

    "Switch off lights when you leave a room.",

    "Use public transport whenever possible.",

    "Plant trees and take care of plants around you.",

    "Avoid using plastic bags while shopping.",

    "Unplug chargers when they are not being used.",

    "Use both sides of paper before recycling it."

];


function showTip() {

    let randomIndex =
        Math.floor(Math.random() * ecoTips.length);

    document.getElementById("largeTip").innerHTML =
        ecoTips[randomIndex];
}