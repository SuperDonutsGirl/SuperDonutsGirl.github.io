var a = Math.round(Math.random()*105);

let ulField = document.getElementById('aleatoir');
ulField.innerHTML = ulField.innerHTML +  
`<a href="./recettes/recette_${a}.html" class="card-2">
<div class="card">
    <div class="img-arrow">
        <img src="./svg/up-arrow.svg">
    </div>
    <div class="card_image">
        <img src="./svg/hasard.svg">
    </div>
    <div class="card_title">
        <p>Recette<br>aléatoire</p>
    </div>
</div>
</a>`;