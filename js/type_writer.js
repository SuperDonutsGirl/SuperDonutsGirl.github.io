var i = 0;
var y = 0;
var x = 0;
var z = 0;
var txt_1 = "Cette retranscription de mon carnet de recette vous permetra à vous, mes enfants et petits enfants, de me préparer de bon petit plats."
var txt_2 = "J'ai commencé ce carnet il y a déjà bien longtemps, vous y retrouver plusieurs genre de recettes, allant de la cuisine aux astuces ménagères."
var txt_3 = "Tout n'y est pas détaillé à la perfection, c'est une sorte de bible de la 'bonne ménagère'."
var txt_4 = "Pour éviter que Papy soit jaloux, le Petit Paki à été glissé "
var txt_5 = "Pour éviter que Papy soit jaloux, le Petit Paki à été glissé juste en dessous"
var speed = 50;

function typeWriter() {
  let	typing_text = document.getElementById("typing");
  let bouton = document.getElementById("b0");
  let bouton_1 = document.getElementById("b1");
  let paki_l = document.getElementById("paki_link");
  paki_l.remove();
  bouton.classList.remove("visible");
  bouton.classList.add("invisible");
  bouton_1.classList.remove("visible");
  bouton_1.classList.add("invisible");
  for (i; i < txt_1.length; i++)
    typing_text.innerHTML += txt_1.charAt(i);
  typing_text = document.getElementById("typing-2");
  for (i = 0; i < txt_1.length; i++)
    typing_text.innerHTML += txt_2.charAt(i);
  typing_text = document.getElementById("typing-3");
  for (i = 0; i < txt_1.length; i++)
    typing_text.innerHTML += txt_3.charAt(i);
  typing_text = document.getElementById("typing-4");
  for (i = 0; i < txt_1.length; i++)
    typing_text.innerHTML += txt_4.charAt(i);
  typing_text.innerHTML += `<a href="petit_paki.html">ici</a>`;
}

function typeWriter1() {
  let	typing_text = document.getElementById("typing");
  let bouton_0 = document.getElementById("b0");
  let bouton = document.getElementById("b1");
  let bouton_2 = document.getElementById("b2");
  bouton.classList.remove("visible");
  bouton.classList.add("invisible");
  bouton_0.classList.remove("visible");
  bouton_0.classList.add("invisible");
  if (i < txt_1.length) {
    typing_text.innerHTML += txt_1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
    }
  if (i >= txt_1.length) {
    bouton_2.classList.remove("invisible");
    bouton_2.classList.add("visible");
  }
}

function typeWriter2() {
  let	typing_text = document.getElementById("typing-2");
  let bouton = document.getElementById("b2");
  let bouton_2 = document.getElementById("b3");
  bouton.classList.remove("visible");
  bouton.classList.add("invisible");
  if (y < txt_2.length) {
    typing_text.innerHTML += txt_2.charAt(y);
    y++;
    setTimeout(typeWriter2, speed);
    }
  if (y >= txt_2.length) {
    bouton_2.classList.remove("invisible");
    bouton_2.classList.add("visible");
  }
}

function typeWriter3() {
  let	typing_text = document.getElementById("typing-3");
  let bouton = document.getElementById("b3");
  let bouton_2 = document.getElementById("b4");
  bouton.classList.remove("visible");
  bouton.classList.add("invisible");
  if (x < txt_3.length) {
    typing_text.innerHTML += txt_3.charAt(x);
    x++;
    setTimeout(typeWriter3, speed);
    }
  if (x >= txt_3.length) {
    bouton_2.classList.remove("invisible");
    bouton_2.classList.add("visible");
  }
}

function typeWriter4() {
  let	typing_text = document.getElementById("typing-4");
  let bouton = document.getElementById("b4");
  let paki_l = document.getElementById("paki_link");
  bouton.classList.remove("visible");
  bouton.classList.add("invisible");
  if (z < txt_4.length) {
    typing_text.innerHTML += txt_4.charAt(z);
    z++;
    setTimeout(typeWriter4, speed);
    }
  if (z >= txt_4.length) {
    paki_l.classList.remove("paki_invisible");
    paki_l.classList.add("paki_visible");
  }
}