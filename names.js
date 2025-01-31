// Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// 2. Esporta la funzione dal file.

function personName (firstName,lastName) {

    // creo un oggetto con le due proprietà
    const names = {
        firstName : "firstName",
        lastName : "lastName",
    }

    return names
}

// esporto la funzione
module.exports = personName;

// console.log(personName());
 