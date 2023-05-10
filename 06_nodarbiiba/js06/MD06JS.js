let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('demo').appendChild(table);


let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Binary";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Decimale";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Octal";
let heading_4 =document.createElement('th');
heading_4.innerHTML = "Hexadec";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "0000";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "0";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "0";
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = "0";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
tbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "0001";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "1";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "1";
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = "1";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
tbody.appendChild(row_3);

let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "0010";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = "2";
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = "2";
let row_4_data_4 = document.createElement('td');
row_4_data_4.innerHTML = "2";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);
tbody.appendChild(row_4);

let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "0011";
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = "3";
let row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = "3";
let row_5_data_4 = document.createElement('td');
row_5_data_4.innerHTML = "3";

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
row_5.appendChild(row_5_data_4);
tbody.appendChild(row_5);

let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.innerHTML = "0100";
let row_6_data_2 = document.createElement('td');
row_6_data_2.innerHTML = "4";
let row_6_data_3 = document.createElement('td');
row_6_data_3.innerHTML = "4";
let row_6_data_4 = document.createElement('td');
row_6_data_4.innerHTML = "4";

row_6.appendChild(row_6_data_1);
row_6.appendChild(row_6_data_2);
row_6.appendChild(row_6_data_3);
row_6.appendChild(row_6_data_4);
tbody.appendChild(row_6);

let row_7 = document.createElement('tr');
let row_7_data_1 = document.createElement('td');
row_7_data_1.innerHTML = "0101";
let row_7_data_2 = document.createElement('td');
row_7_data_2.innerHTML = "5";
let row_7_data_3 = document.createElement('td');
row_7_data_3.innerHTML = "5";
let row_7_data_4 = document.createElement('td');
row_7_data_4.innerHTML = "5";

row_7.appendChild(row_7_data_1);
row_7.appendChild(row_7_data_2);
row_7.appendChild(row_7_data_3);
row_7.appendChild(row_7_data_4);
tbody.appendChild(row_7);

let row_8 = document.createElement('tr');
let row_8_data_1 = document.createElement('td');
row_8_data_1.innerHTML = "0110";
let row_8_data_2 = document.createElement('td');
row_8_data_2.innerHTML = "6";
let row_8_data_3 = document.createElement('td');
row_8_data_3.innerHTML = "6";
let row_8_data_4 = document.createElement('td');
row_8_data_4.innerHTML = "6";

row_8.appendChild(row_8_data_1);
row_8.appendChild(row_8_data_2);
row_8.appendChild(row_8_data_3);
row_8.appendChild(row_8_data_4);
tbody.appendChild(row_8);

let row_9 = document.createElement('tr');
let row_9_data_1 = document.createElement('td');
row_9_data_1.innerHTML = "0111";
let row_9_data_2 = document.createElement('td');
row_9_data_2.innerHTML = "7";
let row_9_data_3 = document.createElement('td');
row_9_data_3.innerHTML = "7";
let row_9_data_4 = document.createElement('td');
row_9_data_4.innerHTML = "7";

row_9.appendChild(row_9_data_1);
row_9.appendChild(row_9_data_2);
row_9.appendChild(row_9_data_3);
row_9.appendChild(row_9_data_4);
tbody.appendChild(row_9);

let row_10 = document.createElement('tr');
let row_10_data_1 = document.createElement('td');
row_10_data_1.innerHTML = "1000";
let row_10_data_2 = document.createElement('td');
row_10_data_2.innerHTML = "8";
let row_10_data_3 = document.createElement('td');
row_10_data_3.innerHTML = "10";
let row_10_data_4 = document.createElement('td');
row_10_data_4.innerHTML = "8";

row_10.appendChild(row_10_data_1);
row_10.appendChild(row_10_data_2);
row_10.appendChild(row_10_data_3);
row_10.appendChild(row_10_data_4);
tbody.appendChild(row_10);

let row_11 = document.createElement('tr');
let row_11_data_1 = document.createElement('td');
row_11_data_1.innerHTML = "1001";
let row_11_data_2 = document.createElement('td');
row_11_data_2.innerHTML = "9";
let row_11_data_3 = document.createElement('td');
row_11_data_3.innerHTML = "11";
let row_11_data_4 = document.createElement('td');
row_11_data_4.innerHTML = "9";

row_11.appendChild(row_11_data_1);
row_11.appendChild(row_11_data_2);
row_11.appendChild(row_11_data_3);
row_11.appendChild(row_11_data_4);
tbody.appendChild(row_11);

let row_12 = document.createElement('tr');
let row_12_data_1 = document.createElement('td');
row_12_data_1.innerHTML = "1010";
let row_12_data_2 = document.createElement('td');
row_12_data_2.innerHTML = "10";
let row_12_data_3 = document.createElement('td');
row_12_data_3.innerHTML = "12";
let row_12_data_4 = document.createElement('td');
row_12_data_4.innerHTML = "A";

row_12.appendChild(row_12_data_1);
row_12.appendChild(row_12_data_2);
row_12.appendChild(row_12_data_3);
row_12.appendChild(row_12_data_4);
tbody.appendChild(row_12);

let row_13 = document.createElement('tr');
let row_13_data_1 = document.createElement('td');
row_13_data_1.innerHTML = "1011";
let row_13_data_2 = document.createElement('td');
row_13_data_2.innerHTML = "11";
let row_13_data_3 = document.createElement('td');
row_13_data_3.innerHTML = "13";
let row_13_data_4 = document.createElement('td');
row_13_data_4.innerHTML = "B";

row_13.appendChild(row_13_data_1);
row_13.appendChild(row_13_data_2);
row_13.appendChild(row_13_data_3);
row_13.appendChild(row_13_data_4);
tbody.appendChild(row_13);

let row_14 = document.createElement('tr');
let row_14_data_1 = document.createElement('td');
row_14_data_1.innerHTML = "1100";
let row_14_data_2 = document.createElement('td');
row_14_data_2.innerHTML = "12";
let row_14_data_3 = document.createElement('td');
row_14_data_3.innerHTML = "14";
let row_14_data_4 = document.createElement('td');
row_14_data_4.innerHTML = "C";

row_14.appendChild(row_14_data_1);
row_14.appendChild(row_14_data_2);
row_14.appendChild(row_14_data_3);
row_14.appendChild(row_14_data_4);
tbody.appendChild(row_14);

let row_15 = document.createElement('tr');
let row_15_data_1 = document.createElement('td');
row_15_data_1.innerHTML = "1101";
let row_15_data_2 = document.createElement('td');
row_15_data_2.innerHTML = "13";
let row_15_data_3 = document.createElement('td');
row_15_data_3.innerHTML = "15";
let row_15_data_4 = document.createElement('td');
row_15_data_4.innerHTML = "D";

row_15.appendChild(row_15_data_1);
row_15.appendChild(row_15_data_2);
row_15.appendChild(row_15_data_3);
row_15.appendChild(row_15_data_4);
tbody.appendChild(row_15);

let row_16 = document.createElement('tr');
let row_16_data_1 = document.createElement('td');
row_16_data_1.innerHTML = "1110";
let row_16_data_2 = document.createElement('td');
row_16_data_2.innerHTML = "14";
let row_16_data_3 = document.createElement('td');
row_16_data_3.innerHTML = "16";
let row_16_data_4 = document.createElement('td');
row_16_data_4.innerHTML = "E";

row_16.appendChild(row_16_data_1);
row_16.appendChild(row_16_data_2);
row_16.appendChild(row_16_data_3);
row_16.appendChild(row_16_data_4);
tbody.appendChild(row_16);

let row_17 = document.createElement('tr');
let row_17_data_1 = document.createElement('td');
row_17_data_1.innerHTML = "1111";
let row_17_data_2 = document.createElement('td');
row_17_data_2.innerHTML = "15";
let row_17_data_3 = document.createElement('td');
row_17_data_3.innerHTML = "17";
let row_17_data_4 = document.createElement('td');
row_17_data_4.innerHTML = "F";

row_17.appendChild(row_17_data_1);
row_17.appendChild(row_17_data_2);
row_17.appendChild(row_17_data_3);
row_17.appendChild(row_17_data_4);
tbody.appendChild(row_17);


