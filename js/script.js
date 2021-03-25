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


// ordiniamo la lista alfabeticamente
cognomi.sort();
console.log(cognomi);

// stampiamo la lista
var posizioneUtente = -1;
for( var i = 0; i < cognomi.length; i++) {
    var indiceCognomi = cognomi[i];

    // scriviamo in che posizione della lista si trova (for)
    if( mioCognome === cognomi[i]) {
            posizioneUtente = i + 1;
        }

    // do alla variabile cognomiUl una stringa vuota collegata all'html
    var cognomiUl = document.getElementById('cognomi').innerHTML;
    // popoliamo la stringa vuota ad ogni ciclo
    document.getElementById('cognomi').innerHTML = cognomiUl + '<li>' + indiceCognomi + '</li>';
    // console.log(cognomiUl);
    
    // versione abbreviata
    // document.getElementById('cognomi').innerHTML += '<li>' + indiceCognomi + '</li>';
    
}

document.getElementById('posizione').innerHTML = 'La tua posizione è : ' + posizioneUtente;


// scriviamo in che posizione della lista si trova (while)
var j = 0;

while(j < cognomi.length) {
    
    if( mioCognome === cognomi[j]) {
        posizioneUtente = j + 1;
    } 

    j++;
}

document.getElementById('posizione-while').innerHTML = 'La tua posizione è : ' + posizioneUtente;
