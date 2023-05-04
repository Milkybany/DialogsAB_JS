let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('demo1').appendChild(table);



let table = document.querySelector('table');

for (let i = 0; i < 4; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 31; i++) {
		let td = document.createElement('td');
		td.textContent = 'x';
        tr.appendChild(td);
	}
	
	table.appendChild(tr);
}

let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

for (let subArr of arr) {
	let tr = document.createElement('tr');
	
	for (let elem of subArr) {
		let td = document.createElement('td');
		td.textContent = elem;
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}