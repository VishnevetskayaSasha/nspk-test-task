import { bancs } from "./bancs.js";

const banksCards = document.querySelector(".banks__cards");
const inputSearch = document.querySelector('.banks__search');
const closeBnt = document.querySelector(".cross-icon");
const errorMessage = document.querySelector(".text_error-message");

banksCards.innerHTML = "";

inputSearch.addEventListener("input", function() {
  const query = this.value.toLowerCase();
  const results = bancs.filter(item => item.name.toLowerCase().includes(query));
  renderResults(results);
  if (query) {
    closeBnt.style.display = "inline";
  } else {
    closeBnt.style.display = "none";
  }
});

function renderResults(results) {
  banksCards.innerHTML = ""; 
  if (results.length !== 0) {
    results.forEach(result => {
      errorMessage.style.display ="none";
      banksCards.innerHTML += `
      <li class="banks__item">
        <a class="banks__link" href=${result.link} target="_blank">
          <img class="banks__img" src="${result.img}" alt=${result.name}>
        </a>
      </li>
    `
    });
  } else {
    errorMessage.style.display ="block";
  }
}

closeBnt.addEventListener("click", () => {
  inputSearch.value = "";
  renderResults(bancs);
  closeBnt.style.display = "none"; 
})

renderResults(bancs);