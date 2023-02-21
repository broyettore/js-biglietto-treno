// VARIABILI 

const utenteNome = prompt("Ciao, come si chiama ?");
const utenteKm = Number(prompt("Quanti km vuole percorrere ?"));
const utenteEtà = Number(prompt("Quanti anni ha ?"));
const prezzoBase = 0.21 * utenteKm
const scontoMinorenni = prezzoBase - (prezzoBase / 100) * 20
const scontoAnziani = prezzoBase - (prezzoBase / 100) * 40


// CONDIZIONI DI SCONTO 

document.querySelector(".user").innerHTML = `Ciao Sig/Sig.ra ${utenteNome}`
document.querySelector(".distance").innerHTML = `Ha scelto di percorrere ${utenteKm} km`

if (utenteEtà < 18) {
    document.querySelector(".price").innerHTML = `Il prezzo per questa distanza è di ${Number(scontoMinorenni.toFixed(2))}€`;
} else if (utenteEtà > 65) {
    document.querySelector(".price").innerHTML = `Il prezzo per questa distanza è di ${Number(scontoAnziani.toFixed(2))}€`;
} else {
    document.querySelector(".price").innerHTML = `Il prezzo per questa distanza è di ${Number(prezzoBase.toFixed(2))}€`;
}

// RISULTATO

document.querySelector(".summary").innerHTML = `Pronto/a per questa nuova avventura?`