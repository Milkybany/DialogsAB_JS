let table = document.querySelector('#table');
let k = 1;
for (let i = 0; i < 4; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 10; i++) {
		let td = document.createElement('td');
		td.textContent = 'k++';
        tr.appendChild(td);
	}
	
	table.appendChild(tr);
}