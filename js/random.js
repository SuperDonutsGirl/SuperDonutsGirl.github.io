function    getRandomPage(){
    let bouton = document.getElementById("random");
    var a = Math.round(Math.random()*105);
    var link = "./recettes/recette_" + a + ".html";
    bouton.href = link;
}