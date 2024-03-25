
let kleur = 'wit';
let detail = 'geen';
//hier worden 2 variabelen  van de kleuren wit en geen details dan wordt er een afbeelding gepakt zoals hieronder
//Prompt: docent gevraagd voor uitleg. 

const skiAfbeelding = document.getElementById("skiAfbeelding");
//Deze twee variabelen zorgen ervoor dat het gepakte element id skiAfbeelding standaard wordt weergegeven en er geen details aan vast zitten 


window.onload = function() {
    skiAfbeelding.src = "images/ski.png";
}
//deze pagina wordt geladen met de standaard afbeelding van de witte ski, dus ook als de pagina wordt herladen zal de witte ski zichtbaar worden.
//Prompt chat gtp: Hoe kan ik er voor zorgen dat een afbeelding blijft staan als ik deze herlaad. 

function veranderAfbeelding(nieuweAfbeelding) {
    skiAfbeelding.src = nieuweAfbeelding;
} 
//deze functie wordt verander als er dus een andere waarde wordt aan groepen komt er een andere afbeeling in dit geval een andere ski. 

//prompt: W3S gevraagd hoe getElementbyld en Addeventlister werkt. 

document.getElementById("buttonGroen").addEventListener("click", function() {
    //er wordt gezocht naar een id element zodra er wordt geklikt op de buttongroen de eventlister zoek zodrs er wordt geklikt
    kleur = 'groen';
    //De kleur na click function wordt dus variable groen
    if (detail === 'geen') {
        //hier wordt de waarde van detail geactiveerd. De standaard gekozen afbeelding is groen en detail is gelijk aan geen detail
        veranderAfbeelding("images/ski-groen.png");
    } else if (detail === 'blauw') {
        //Hier wordt gezegd dat als de kleur groen is en wat als het detail blauw is krijg je een groene ski met een blauw detail
        veranderAfbeelding("images/ski-groenblauw.png");
    } else if (detail === 'geel') {
        veranderAfbeelding("images/ski-groengeel.png");
    } else {
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
    }
});


document.getElementById("detailGeel").addEventListener("click", function() {
    detail = 'geel';
    if (kleur === 'groen') {
        veranderAfbeelding("images/ski-groengeel.png");
    } else if (kleur === 'rood') {
        veranderAfbeelding("images/ski-roodgeel.png");
    } else {
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
    } else { is
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
    }
});

document.querySelector(".resetKnop").addEventListener("click", function() {
    //queryselector pakt uit de CSS de resetknop hiermee wordt de button aangeduit waarop wordt geklikt.
    //de functie die wordt uitgevoerd als er op de knop wordt geklikt is dart de kleur weer op wit spring en geen details worden toegevoegd. 
    kleur = 'wit'; // Stel de kleur in op wit
    detail = 'geen'; // Stel de detail in op geen
    veranderAfbeelding("images/ski.png"); 
});
 //veranderd de afbeelding naar standaard. 
 
const audio = document.querySelector(".myAudio");
//deze constante defineert de audio die wordt gepakt bij de class myAudio, het audio element
const playButtons = document.querySelectorAll(".playButton");
// hier wordt de constate class play button gepakt, en op de website is dit de knop op de audio te starten en pauzeren 

function muziekAanUit() { //de functie kun je elke naam geven die je wil
    if (audio.paused) {
        audio.play();
        //de functie controleren of de muziek op pauze is anders wordt deze afgespeeld
    } else {
        audio.pause();
        //en anders komt de audio weer op pauze
    }
}
//Chatgtp gevraagd Prompt: Kun je de function naam veranderen in elke naam die je wil?
playButtons.forEach(function(button) {
 //playbuttons wordt aangeduid door foreach button, deze wordt gebruikt als eventlister waardoor...
    button.addEventListener("click", muziekAanUit);
     // als er op de buttons wordt geclickt wordt de function ''muziekAanUit'' aangeroepen
});
  
//prompts: mijn vader die progameer achtergrond heeft, gevraagd voor uitleg hoe de foreach precies werkt 






