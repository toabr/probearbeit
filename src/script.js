import "./style.scss";

console.log("### working ###");

document.getElementById('categories-open').addEventListener('click', () => {
	console.log('click');
	document.body.classList.toggle('menu-open');
});

document.getElementById('close-btn').addEventListener('click', () => {
	console.log('click');
	document.body.classList.toggle('menu-open');
});