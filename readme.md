# Train Ticket Exercise

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
* va applicato uno sconto del 20% per i minorenni
* va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

## Problem-solving approach

### Step 1 : Ottenere le info fondamentali al calcolo del prezzo ovvero km da percorrere e età del passaggero.

* Creo una variabile1 a cui assegno un number(prompt) per chiedere i km da percorrere.
* Creo una variabile2 a cui assegno un number(prompt) per chiedere l'età del passaggero.

### step 2 : Capire come ottenere un PRIMO prezzo in base alle info inserite nel step 1

* prezzo biglietto è di 0.21€ al km, quindi possiamo fare 0.21 x variabile1

### step 3 : Considerare l'applicazione di sconti nel calcolo del prezzo finale

* Lo sconto viene applicato in base all'età, per i passaggeri < 18 e i passaggeri > 65
* Andiamo a creare delle condizioni per cui SE variabile2 < 18, applichiamo un 20% di sconto al prezzo
* ALTRIMENTI SE variabile2 > 65, applichiamo un 40% di sconto al prezzo
* ALTRIMENTI  calcoliamo il prezzo come nello step 2

### step 3 : Mostrare il risultato con massimo due decimali

* usiamo semplicemente il metodo toFixed(2), per limitare il prezzo calcolato a due decimali
* il metodo toFixed() converte un numero in una stringa quindi dobbiamo procedere facendo number(prezzocalcolato.toFixed(2)).
* Per concludere mostriamo il risultato in console.log() o nell'html.