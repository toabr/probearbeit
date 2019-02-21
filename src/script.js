import "./style.scss";

console.log("### working ###");


document.getElementById('categories-open').addEventListener('click', () => {
	console.log('click open');

	getContent('https://jsonplaceholder.typicode.com/comments', (data) => {
		buildMenu(data);
		document.body.classList.toggle('menu-open');
	})
});

document.getElementById('close-btn').addEventListener('click', () => {
	console.log('click close');
	document.body.classList.toggle('menu-open');
});

function buildMenu(data) {
	//console.log(data);
	let categoriesMenu = document.getElementById('categories-menu');
	categoriesMenu.innerHTML = "";

	data.map( (item, index) => {
		let node = document.createElement('div');
		node.classList.add('item');
		if(index === 0) {
			node.classList.add('active');
		}

		let btn = document.createElement('div');
		btn.classList.add('btn');
		btn.innerHTML = item.name; 

		btn.addEventListener("mouseover", (evt) => {
			buildContent(item.name, item.body)
			let active = categoriesMenu.getElementsByClassName("active");
			active[0].classList.remove('active');
			node.classList.add('active');
		});

		node.appendChild(btn);
		categoriesMenu.appendChild(node);
	});

	buildContent(data[0].name, data[0].body);
}

function buildContent(headline, content) {
	let categoriesContent = document.getElementById('categories-content');
	categoriesContent.innerHTML = `
		<div class="content">
			<h2>${headline}</h2>
			<p>${content}</p>
		</div>
	`;
}

function getContent(url,callback) {
  fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
  	// reduce array to 10
    callback(data.filter( (value, index, array) => {
    	return index < 10;
    }));
  })
  .catch((err) => {
    console.log('>> api:', err);
  });
}