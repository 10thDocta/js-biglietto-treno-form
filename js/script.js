// import { createRandomCP } from "test.js";

// definisco le variabili per l'HTML
const tableName = document.getElementById('table_name');
const tableDiscount = document.getElementById('table_discount');
const tableCarriage = document.getElementById('table_carriage');
const tableCP = document.getElementById('table_cp');
const tablePrice = document.getElementById('table_price');
const hide = document.getElementById("hide_ticket");
const hideMessageError = document.getElementById("hide_message_error");

// definisco le variabili dei bottoni
const calcPriceBtn = document.getElementById("calcPrice_Btn");
const resetBtn = document.getElementById("reset_Btn");


// funzione per il reset
const reset = () => {
  // tableName.innerHTML = "";
  // tableDiscount.innerHTML = "";
  // tableCarriage.innerHTML = "";
  // tableCP.innerHTML = "";
  // tablePrice.innerHTML = "";
  hide.className = "hide";
  hideMessageError.className = "hide";

  // // num = 1 arriva solo da calcPrice
  // if (numb != 1) {
  //   // document.getElementById("name").value = "";
  //   // document.getElementById("km").value = "";
  // }
};


// funzione per messaggio di errore in caso di dati non nel formato corretto
const checkInput = (name, km, age) => {
  if (name.length == 0 || km <= 0 || isNaN(km)) {
    // alert('Valori inseriti non corretti');
    hideMessageError.classList.toggle("hide");
    return false;
  } else if (age != "maggiorenne" && age != "minorenne" && age != "over65") {
    alert('Valori inseriti non corretti');
    return false;
  } else {
    return true;
  }
};

// funzione per calcolare il prezzo del biglietto
const calcPrice = () => {

  // faccio un reset appena viene invocata la funzione
  reset();

  // definisco le variabili che leggeranno i valori immessi, ma solo dopo il click sul bottone
  let name = document.getElementById("name").value;
  let km = parseInt(document.getElementById("km").value, 10);
  let age = document.getElementById("age").value;

  // ciclo if entra se la funzione di controllo dei dati immessi restituisce vero
  if (checkInput(name, km, age)) {
    let kmPrice = 0.21;
    let currentPrice = km * kmPrice;

    let randomCarriage = Math.floor(Math.random() * 7) + 1;
    let randomCP = Math.floor(Math.random() * 10000) + 90000;
    // let randomCP = createRandomCP();

    tableName.innerHTML = name;
    tableCarriage.innerHTML = randomCarriage;
    tableCP.innerHTML = randomCP;

    if (age == "minorenne") {
      tableDiscount.innerHTML = "Sconto Young";
      tablePrice.innerHTML = `${(currentPrice - (currentPrice * 20) / 100).toFixed(2)} €`;
    } else if (age == "over65") {
      tableDiscount.innerHTML = "Sconto Over 65";
      tablePrice.innerHTML = `${(currentPrice - (currentPrice * 40) / 100).toFixed(2)} €`;
    } else {
      tableDiscount.innerHTML = "Nessuna";
      tablePrice.innerHTML = `${currentPrice.toFixed(2)} €`;
    }

    hide.classList.toggle("hide");
  }
};

calcPriceBtn.addEventListener("click", calcPrice);
resetBtn.addEventListener("click", reset);