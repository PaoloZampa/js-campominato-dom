/* Creare una griglia 8x8

 Ogni volta che clicco su un quadrato si colora di verde */

// Creo una variabile dove salvo il container delle 64 celle (container-grid)

const container = document.querySelector(".container");

// creo un max numero di celle

let nMax = 100;

// creo un ciclo n volte per le celle (dove n in questo caso sta per 64)

function createSquare() {
for (let i = 0; i < nMax; i++) {
  const cell = `<div class="cell">${i + 1}</div>`;
  container.innerHTML += cell;
}
}

// seleziono una cella che ha classe cell e active
const cellEl = document.querySelectorAll(".cell")

// aggiungo eventlisner per la classe active ciclando per la lunghezza dell'array cellEl

function colorSquare() {
  for (let i = 0; i < cellEl.length; i++) {
    const thisCell = cellEl[i];
    console.log(thisCell)
    thisCell.addEventListener("click", function () {
      thisCell.classList.toggle("bg_green")
      console.log("Changed the color")
    })
  }
}


