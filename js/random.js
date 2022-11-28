var a = Math.round(Math.random()*105);
let balise  = document.getElementById('aleatoire');
var links = "./recettes/recette" + a + ".html";
balise.setAttribute("href", links);
/*
let ulField = document.getElementById('aleatoir');
ulField.innerHTML = ulField.innerHTML +  `<li><a href="./recettes/recette_${a}.html" class="fa-solid fa-lightbulb">  Recette aleatoire</a></li>`;*/