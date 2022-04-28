// Prezzo Biglietto: 0.21€ per KM
const priceForKm = 0.21


// 1. Chiedere ad utente numero di chilometri da percorrere
const userDistance = Number(prompt("Inserire il numero di chilometri che si vuole percorrere"))
// 2. Chiedere all'utente l'età 
const userAge = Number(prompt("Inserire l'età del passeggero"))
// 3. Calcolare il prezzo totale del viaggio
const balance = userDistance * priceForKm
console.log(balance)
// 4. Scontare il biglietto in base all'età del passeggero e mostrare risultato
let finalPrice;

if(userAge < 18){
    finalPrice = (balance - ( balance * 20 / 100))
}else{
    finalPrice = balance
}

if(userAge >= 65 ){
    finalPrice = (balance - ( balance * 40 / 100))
}
console.log(finalPrice.toFixed(2))


