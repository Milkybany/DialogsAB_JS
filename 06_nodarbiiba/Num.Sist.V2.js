let table = document.querySelector('#table');

for (let i = 0; i < 4; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 10; i++) {
		let td = document.createElement('td');
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}