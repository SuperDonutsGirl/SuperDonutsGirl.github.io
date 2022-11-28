var	i = 0;
var	y = 0;
var	x = 0;
var	z = 0;
var	txt_1 = "Cette retranscription de mon carnet de recette vous permetra à vous, mes enfants et petits enfants, de me préparer de bon petit plats."
var	txt_2 = "J'ai commencé ce carnet il y a déjà bien longtemps, vous y retrouver plusieurs genre de recettes, allant de la cuisine aux astuces ménagères."
var	txt_3 = "Tout n'y est pas détaillé à la perfection, c'est une sorte de bible de la 'bonne ménagère'."
var	txt_4 = "Pour éviter que Papy soit jaloux, le Petit Paki à été glissé "
var	speed = 50;


function typeWriter1() {
	let	typing_text = document.getElementById("typing");
	let	bouton = document.getElementById("b1");
	let	footer = document.getElementById("footer");
	bouton.classList.remove("visible");
	bouton.classList.add("invisible");
	if (i < txt_1.length) {
		typing_text.innerHTML += txt_1.charAt(i);
		i++;
		setTimeout(typeWriter1, speed);
	}
	else {
		bouton.remove();
		let div_but = document.createElement("div");
		div_but.classList.add("lecture");
		document.body.insertBefore(div_but, footer);
		div_but.innerHTML += `<button onclick="typeWriter2()" class="visible" id="b2"><i class="fa-solid fa-arrow-down"></i></button>`
		let typing_2 = document.createElement("p");
		typing_2.setAttribute("id","typing");
		document.body.insertBefore(typing_2, footer);
	}
}

function typeWriter2() {
	let	typing_text = document.getElementById("typing");
	let	bouton = document.getElementById("b2");
	let	footer = document.getElementById("footer");
	bouton.classList.remove("visible");
	bouton.classList.add("invisible");
	if (y < txt_2.length) {
		typing_text.innerHTML += txt_2.charAt(y);
		y++;
    	setTimeout(typeWriter2, speed);
    }
	else {
    	bouton.remove();
    	let div_but = document.createElement("div");
    	div_but.classList.add("lecture");
    	document.body.insertBefore(div_but, footer);
    	div_but.innerHTML += `<button onclick="typeWriter3()" class="visible" id="b3"><i class="fa-solid fa-arrow-down"></i></button>`
    	let typing_3 = document.createElement("p");
    	typing_3.setAttribute("id","typing");
    	document.body.insertBefore(typing_3, footer);
  }
}

function typeWriter3() {
	let	typing_text = document.getElementById("typing");
	let bouton = document.getElementById("b3");
	let footer = document.getElementById("footer");
	bouton.classList.remove("visible");
	bouton.classList.add("invisible");
	if (x < txt_3.length) {
    	typing_text.innerHTML += txt_3.charAt(x);
    	x++;
    	setTimeout(typeWriter3, speed);
    }
    else {
    	bouton.remove();
    	let div_but = document.createElement("div");
    	div_but.classList.add("lecture");
    	document.body.insertBefore(div_but, footer);
    	div_but.innerHTML += `<button onclick="typeWriter4()" class="visible" id="b4"><i class="fa-solid fa-arrow-down"></i></button>`
    	let typing_4 = document.createElement("p");
    	typing_4.setAttribute("id","typing");
    	document.body.insertBefore(typing_4, footer);
    }
}

function typeWriter4() {
	let	typing_text = document.getElementById("typing");
	let bouton = document.getElementById("b4");
	let footer = document.getElementById("footer");
	bouton.classList.remove("visible");
	bouton.classList.add("invisible");
	if (z < txt_4.length) {
		typing_text.innerHTML += txt_4.charAt(z);
		z++;
		setTimeout(typeWriter4, speed);
	}
	else{
		bouton.remove();
		typing_text.innerHTML += `<a href="petit_paki.html">ici</a>`;
	}
}