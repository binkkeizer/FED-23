const navButton = document.querySelector("header > button:nth-of-type(1)");
const deHeader = document.querySelector("header");

navButton.onclick = openCloseNav;

function openCloseNav() {
	deHeader.classList.toggle("open");
}