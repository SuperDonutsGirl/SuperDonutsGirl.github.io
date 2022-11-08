(function () {
  "use strict";
  let inputField = document.getElementById('input');
  let ulField = document.getElementById('suggestions');
  inputField.addEventListener('input', changeAutoComplete);
  ulField.addEventListener('click', selectItem);
  let bouton = document.getElementById('bouton');

  let destination = [
    "Sauté de veau", 
    "Langue de bœuf", 
    "Fressure", 
    "Rillettes de porc maison",
    "Fricassée de poulet",
    "Quiche lorraine sans pâte",
    "Cake salé aux olives et au jambon",
    "Quiche au chou-fleur",
    "Pâté de foies de volaille",
    "Tarte à la moutarde - tomates",
    "Saucisson en brioche",
    "Far vendéen",
    "Terrine de courgettes",
    "Pudding de laitue",
    "Foie gras du pauvre",
    "Pâtés de lapin",
    "Terrine de foies de volaille",
    "Filet de porc en papillote",
    "Tartiflette",
    "Poulet au Riesling",
    "Rillettes de canard",
    "Jus de thym pour gigot",
    "Tarte au thon",
    "Rillettes de lapin",
    "Chapon au Riesling",
    "Pâté",
    "Filet mignon",
    "Maquereaux à la Hollandaise",
    "Œufs à la royale",
    "Escargots farcis",
    "Moules aux nouilles",
    "Fricassée de moules Charentaises",
    "Homards vivants",
    "Pain de carpe",
    "Champignons farcis",
    "Nids de pommes de terre farcies",
    "Pommes de terre dijonnaises",
    "Sauce tomates (Jacques Tiburce)",
    "Ketchup",
    "Tomates confites",
    "Tomates séchées",
    "Petit gratin de courgettes au tartare",
    "Risotto courgettes",
    "Sauce brune",
    "Sauce piquante",
    "Sauce Madère (G. Mathiot)",
    "Sauce aux champignons",
    "Sauce tomates (G. Mathiot)",
    "Mayonnaise mousseline",
    "Mayonnaise Hollandaise",
    "Sauce mayonnaise sans œuf (shaker Tupperware)",
    "Sauce Madère (Mode de Paris)",
    "Sauce Mousseline",
    "Sauce Madère (Tatate Julia – Le Grand Moulin)",
    "Sauce vinaigrette shaker Tupperware",
    "Mayonnaise chaude",
    "Sauce aux pommes",
    "Sauce angevine",
    "Sauce pour grosses carpes",
    "Farce pour palourdes farcies",
    "Clafoutis aux cerises",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    
  ];

  

  function changeAutoComplete({ target }) {
    let data = target.value;
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
      bouton.innerHTML = bouton.innerHTML + `<a class="fa-solid fa-magnifying-glass" id="bouton" href="recettes/recette_${index}.html" ></a>`
    }
  }
})();