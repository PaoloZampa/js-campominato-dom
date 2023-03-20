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

  const cellEl = document.querySelectorAll(".cell")
  //console.log(cellEl)
  for (let j = 0; j < cellEl.length; j++) {
    const thisCell = cellEl[j];
    //console.log(thisCell)
    thisCell.addEventListener("click", function () {
      thisCell.classList.toggle("active")
      console.log(j + 1)
    })
  }

}

const array = Array(16).fill().map(() => Math.floor(100 * Math.random()));
console.log(array);


