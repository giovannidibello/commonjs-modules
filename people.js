// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All’interno della tua funzione, usa le tue due funzioni precedenti per costruire l’oggetto.

// importo la funzione da names
const personName = require("./names");

// importo la funzione da hobbies
const hobbies = require("./hobbies");

// creo la funzione 
function people() {

    // richiamo le funzioni e gli assegno dei valori per il test
    const person = personName("Antonio", "Rossi");
    const getHobbies = hobbies("Correre", "Andare al mare", "Guardare Film");

    return {
        fullName: `${person.firstName} ${person.lastName}`,
        hobbies: getHobbies,
    }
}

// testo la funzione
console.log(people());


