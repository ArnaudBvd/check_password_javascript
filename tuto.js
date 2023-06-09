// Définir les variables

let myInput = document.getElementById('psw');
let letter = document.getElementById('letter');
let capital = document.getElementById('capital');
let number = document.getElementById('number');
let special = document.getElementById('special');
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

    // Valider les lettres majuscules
    let upperCaseLetters = /[A-G]/g
    if(myInput.value.match(upperCaseLetters)) {
        /* Si le mot de passe contient une lettre majuscule, enlever la
        classe "invalid" et ajouter la classe "valid" */
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    }else {
        /* Si non, on enlèbe la classe "valid" et on ajoute la 
        classe "invalid" */
        capital.classList.remove('valid');
        capital.classList.add('invalid');
    }

    // Valider les chiffres
    let numberCase = /[0-9]/g
    if(myInput.value.match(numberCase)) {
        /* Si le mot de passe contient un chiffre, enlever la
        classe "invalid" et ajouter la classe "valid" */
        number.classList.remove('invalid');
        number.classList.add('valid');
    }else {
        /* Si non, on enlèbe la classe "valid" et on ajoute la 
        classe "invalid" */
        number.classList.remove('valid');
        number.classList.add('invalid');
    }

    // Valider les caractères spéciaux
    let specialCase = /[!#$%^&*()+/]/g
    if(myInput.value.match(specialCase)) {
        /* Si le mot de passe contient un caractère spécial, enlever la
        classe "invalid" et ajouter la classe "valid" */
        special.classList.remove('invalid');
        special.classList.add('valid');
    }else {
        /* Si non, on enlèbe la classe "valid" et on ajoute la 
        classe "invalid" */
        special.classList.remove('valid');
        special.classList.add('invalid');
    }

    // Valider la longueur
    if(myInput.value.length >= 8) {
        /* Si le mot de passe contient au minimum 8 caractères, enlever la
        classe "invalid" et ajouter la classe "valid" */
        length.classList.remove('invalid');
        length.classList.add('valid');
    }else {
        /* Si non, on enlèbe la classe "valid" et on ajoute la 
        classe "invalid" */
        length.classList.remove('valid');
        length.classList.add('invalid');
    }
}