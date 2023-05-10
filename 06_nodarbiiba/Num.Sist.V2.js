let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

let table = document.querySelector('#table');

for (let subArr of arr) {
	let tr = document.createElement('tr');
	
	for (let elem of subArr) {
		let td = document.createElement('td');
		td.textContent = elem;
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}
/*let k = 1;
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

'Binary', 'Octal', 'Decimal', 'Hex'*/