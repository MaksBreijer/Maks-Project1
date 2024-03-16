// Selecteer de afbeelding die je wilt wijzigen
let kleur = 'wit';
let detail = 'geen';

const skiAfbeelding = document.getElementById("skiAfbeelding");

// Standaardafbeelding instellen wanneer de pagina wordt geladen
window.onload = function() {
    skiAfbeelding.src = "images/ski.png";
}

// Functie om de afbeelding te veranderen
function veranderAfbeelding(nieuweAfbeelding) {
    skiAfbeelding.src = nieuweAfbeelding;
}

veranderAfbeelding("images/andereAfbeelding.png"); 

document.getElementById("buttonGroen").addEventListener("click", function() {
    kleur = 'groen';
    if (detail === 'geen') {
        veranderAfbeelding("images/ski-groen.png");
    } else if (detail === 'blauw') {
        veranderAfbeelding("images/ski-groenblauw.png");
    } else if (detail === 'geel') {
        veranderAfbeelding("images/ski-groengeel.png");
    } else {
        // Voeg hier verdere logica toe voor andere details als dat nodig is
    }
});

document.getElementById("buttonRood").addEventListener("click", function() {
    kleur = 'rood';
    if (detail === 'geen') {
        veranderAfbeelding("images/ski-rood.png");
    } else if (detail === 'blauw') {
        veranderAfbeelding("images/ski-roodblauw.png");
    } else if (detail === 'geel') {
        veranderAfbeelding("images/ski-roodgeel.png");
    } else {
        // Voeg hier verdere logica toe voor andere details als dat nodig is
    }
});

// Voeg event listeners toe aan de knoppen om de detail te wijzigen
document.getElementById("detailGeel").addEventListener("click", function() {
    detail = 'geel';
    if (kleur === 'groen') {
        veranderAfbeelding("images/ski-groengeel.png");
    } else if (kleur === 'rood') {
        veranderAfbeelding("images/ski-roodgeel.png");
    } else {
        // Voeg hier verdere logica toe voor andere kleuren als dat nodig is
    }
});

document.getElementById("detailBlauw").addEventListener("click", function() {
    detail = 'blauw';
    if (kleur === 'wit') {
        veranderAfbeelding("images/wit-blauw.png");
    } else if (kleur === 'groen') {
        veranderAfbeelding("images/ski-groenblauw.png");
    } else if (kleur === 'rood') {
        veranderAfbeelding("images/ski-roodblauw.png");
    } else {
        // Voeg hier verdere logica toe voor andere kleuren als dat nodig is
    }
});

document.getElementById("detailGeel").addEventListener("click", function() {
    detail = 'geel';
    if (kleur === 'wit') {
        veranderAfbeelding("images/wit-geel.png");
    } else if (kleur === 'groen') {
        veranderAfbeelding("images/ski-groengeel.png");
    } else if (kleur === 'rood') {
        veranderAfbeelding("images/ski-roodgeel.png");
    } else {
        // Voeg hier verdere logica toe voor andere kleuren als dat nodig is
    }
});

document.querySelector(".resetKnop").addEventListener("click", function() {
    kleur = 'wit'; // Stel de kleur in op wit
    detail = 'geen'; // Stel de detail in op geen
    veranderAfbeelding("images/ski.png"); // Zet de afbeelding van de ski terug naar wit
});

// Selecteer het audio-element
var audio = document.querySelector(".myAudio");

// Selecteer de knoppen
var playButtons = document.querySelectorAll(".playButton");

// Voeg event listeners toe aan de knoppen om het audiobestand te bedienen
playButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});





