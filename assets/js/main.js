// VARIABILI 

const utenteKm = Number(prompt("Quanti km vuole percorrere ?"))
const utenteEtà = Number(prompt("Quanti anni ha ?"))
const prezzoBase = 0.21 * utenteKm
const scontoMinorenni = prezzoBase - (prezzoBase / 100) * 20
const scontoAnziani = prezzoBase - (prezzoBase / 100) * 40


// CONDIZIONI DI SCONTO 

if (utenteEtà < 18) {
    console.log(Number(scontoMinorenni.toFixed(2)))
} else if (utenteEtà > 65) {
    console.log(Number(scontoAnziani.toFixed(2)))
} else {
    console.log(Number(prezzoBase.toFixed(2)))
}