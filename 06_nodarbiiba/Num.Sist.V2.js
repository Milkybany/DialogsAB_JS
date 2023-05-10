let table = document.querySelector('#table');
let k = 1;
for (let i = 0; i < 20; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 4; i++) {
		let td = document.createElement('td');
		td.textContent = 'k';
        k++;
        tr.appendChild(td);
	}
	
	table.appendChild(tr);
}