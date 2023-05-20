// Définir les variables

let myInput = document.getElementById('psw');
let letter = document.getElementById('letter');
let capital = document.getElementById('capital');
let number = document.getElementById('number');
let length = document.getElementById('length');

/* Lorsque l'utilisateur clique sur le champ du mot de passe,
afficher le conteneur Message */

myInput.onfocus = function() {
    document.getElementById('message').style.display = "block";
}


/* Lorsque l'utilisateur clique en dehors du champ du mot de passe,
masquer la boîte message */

myInput.onblur = function() {
    document.getElementById('message').style.display = "none";
}


/* Lorsque l'utilisateur commence à taper quelque chose dans le
champ du mot de passe */

myInput.onkeyup = function() {
    // Valider les lettres minuscules
    let lowerCaseLetters = /[a-z]/g
    if(myInput.value.match(lowerCaseLetters)) {
        /* Si le mot de passe contient une lettre minuscule, enlever la
        classe "invalid" et ajouter la classe "valid" */
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }else {
        /* Si non, on enlèbe la classe "valid" et on ajoute la 
        classe "invalid" */
        letter.classList.remove('valid');
        letter.classList.add('invalid');
    }
}