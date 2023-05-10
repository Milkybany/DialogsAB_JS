let arr = [/*['Binary', 'Octal', 'Decimal', 'Hex']*/, 
[0, 0, 0, 0],
 [1, 1, 1, 1], 
 [10, 2, 2, 2],
  [11, 3, 3, 3],
[100, 4, 4, 4],
];

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

*/