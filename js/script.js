// Cognomi
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova 
// (facciamo questo in 2 versioni: col ciclo for e col while)

// creiamo un array con dei cognomi
var cognomi = ['bianchi', 'neri', 'rossi', 'verdi', 'gialli'];
console.log(cognomi);

// chiediamo all'utente di inserire il cognome
var mioCognome = prompt('Dimmi il tuo cognome...');
console.log(mioCognome);


// inseriamo il cognome nell'array dove ci sono gli altri cognomi
cognomi.push(mioCognome);
console.log(cognomi);


// stampiamo la lista ordinata alfabeticamente
cognomi.sort();
console.log(cognomi);

// scriviamo in che posizione della lista si trova (for)

var position;

for(i = 0; i < cognomi.length; i++) {
    var thisCognome = i;
    
    position = cognomi.indexOf(mioCognome);
    
}

alert(mioCognome + ' ' + (position + 1 ));

// scriviamo in che posizione della lista si trova (while)