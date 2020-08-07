// definisco le variabili con le quali poi andrò a manipolare il codice HTML
const km = document.getElementById('km');
const age = document.getElementById('age');
const discount = document.getElementById('discount');
const price = document.getElementById('price');

// ottengo il dato "chilometri" tramite comando prompt
const kmInput = parseInt(prompt('Chilometri da percorrere?'));
km.innerHTML = kmInput;
// ottengo il dato "age" tramite comando prompt
const ageInput = parseInt(prompt('Qual è la tua età?'));
age.innerHTML = ageInput;

const kmPrice = 0.21;
const currentPrice = kmInput * kmPrice;

// funzione per messaggio di errore in caso di dati non nel formato corretto
const errorMessage = (kmInput, ageInput) => {
  if (isNaN(kmInput) && isNaN(ageInput)) {
    km.innerHTML = '>> Correggere questo dato <<';
    age.innerHTML = '>> Correggere questo dato <<';
  } else if (isNaN(kmInput)) {
    km.innerHTML = '>> Correggere questo dato <<';
  } else {
    age.innerHTML = '>> Correggere questo dato <<';
  }

  price.innerHTML = 'Impossibile da calcolare';
};

// funzione per il calcolo del prezzo del biglietto
const calcPrice = (kmInput, ageInput) => {
  if (isNaN(kmInput) || isNaN(ageInput)) {
    errorMessage(kmInput, ageInput);
    alert('Inserire solo dati numerici');
  } else if (ageInput < 18) {
    discount.innerHTML = '20%';
    price.innerHTML = `${(currentPrice - (currentPrice * 20) / 100).toFixed(2)} €`;
  } else if (ageInput > 65) {
    discount.innerHTML = '40%';
    price.innerHTML = `${(currentPrice - (currentPrice * 40) / 100).toFixed(2)} €`;
  } else {
    discount.innerHTML = 'Nessuno';
    price.innerHTML = `${currentPrice.toFixed(2)} €`;
  }
};

calcPrice(kmInput, ageInput);