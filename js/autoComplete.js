(function () {
  "use strict";
  let inputField = document.getElementById('input');
  let ulField = document.getElementById('suggestions');
  inputField.addEventListener('input', changeAutoComplete);
  ulField.addEventListener('click', selectItem);
  let bouton = document.getElementById('loupe');


  
  function changeAutoComplete({ target }) {
    let data = target.value;
    let loupe = document.getElementById('bouton');
    if (loupe && !data)
      loupe.remove();
    ulField.innerHTML = ``;
    if (data.length) {
      let autoCompleteValues = autoComplete(data);
      autoCompleteValues.forEach(value => { addItem(value); });
    }
  }

  function autoComplete(inputValue) {
    
    return destination.filter(
      (value) => value.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

  function addItem(value) {
    ulField.innerHTML = ulField.innerHTML + `<li>${value}</li>`;
  }

  function selectItem({ target }) {
 
    if (target.tagName === 'LI') {
      inputField.value = target.textContent;
      ulField.innerHTML = ``;
      let index = destination.indexOf(inputField.value) + 1;
      bouton.innerHTML += `<a class="fa-solid fa-magnifying-glass" id="bouton" href="recettes/recette_${index}.html" ></a>`
    }
  }
})();


