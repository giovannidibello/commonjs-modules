// 1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// 2. Esporta la funzione dal file.

function personName(firstName, lastName) {

    // creo un oggetto con le due proprietà
    return {
        firstName: firstName,
        lastName: lastName,
    }
}

// esporto la funzione
module.exports = personName;


