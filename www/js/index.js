function openNav() {
    document.getElementById("Splash").style.width = "100%";
}

function closeNav() {
    document.getElementById("Splash").style.width = "0%";
}

function openNav2() {
    document.getElementById("Splash2").style.width = "100%";
}

function closeNav2() {
    document.getElementById("Splash2").style.width = "0%";
}


function setBar(distances) {
    document.getElementById("bar0").style.height = JSON.stringify(400 - distances[0]) + "px";
    document.getElementById("bar1").style.height = JSON.stringify(400 - distances[1]) + "px";
    document.getElementById("bar2").style.height = JSON.stringify(400 - distances[2]) + "px";
    document.getElementById("bar3").style.height = JSON.stringify(400 - distances[3]) + "px";
    document.getElementById("bar4").style.height = JSON.stringify(400 - distances[4]) + "px";
}

$(document).ready(function(){
    $('.slider').slider();
  });