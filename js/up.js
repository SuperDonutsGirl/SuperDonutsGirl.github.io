function main()
{
	let	body = document.getElementById("body")
	body.addEventListener("scroll",getScrollValue())
}

function getScrollValue(){
	let	arrow = document.getElementById("btn-up")
	var documentHeight = $(document).height(); // Document height (px)
	var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); // Viewport height (px)
	var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; // Current scroll position (px)
	var scrollPositionRelative = scrollPosition / (documentHeight - viewportHeight); // The document height is reduced by the height of the viewport so that we reach 100% at the bottom
	scrollPositionRelative *= 100;
	if (scrollPositionRelative >= 10){
		arrow.classList.remove("hide")
		arrow.classList.add("show")
	}
	else{
		arrow.classList.remove("show")
		arrow.classList.add("hide")
	}
}

function scrollUp() {
	window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}


       








