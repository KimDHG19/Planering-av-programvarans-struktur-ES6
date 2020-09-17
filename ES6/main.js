firstName = "kim ";
lastName = "ekholm";

const wholeName = (firstName + lastName)

console.log(wholeName)


const numbers = [3 ,4, 5, 6, 7]
const numbers2 = [9 ,10, 11]

let times2 = numbers.map(x => x * 2)

numbers.push(8);

console.log(times2)

const list = document.createElement("UL")


function UL_list(array)	{
	for (let i = 0; i < array.length; i++) {
		const listElement = document.createElement("LI");
		const listElementText = document.createTextNode(String(array[i]));

		listElement.appendChild(listElementText);
		list.appendChild(listElement);
	}
}
document.body.appendChild(list);

UL_list(numbers)

const concatted = numbers.concat(numbers2)
UL_list(concatted)

let datanom = [
	{ name: "paul", occupation: "teacher", age: "42" },
	{ name: "edvard", occupation: "student", age: "17" },
	{ name: "kim", occupation: "student", age: "17" },
];

function generateTableHead(table, data)	{
	const thead = table.createTHead();
	const row =thead.insertRow();
		for (let key of data) {
			const th = document.createElement("th");
			const text = document.createTextNode(key)
			th.appendChild(text);
			row.appendChild(th);
		}
}

function generateTable(table, data)	{
	for (const element of data) {
		const row = table.insertRow();

		for (const key in element) {
			const cell = row.insertCell();
			const text = document.createTextNode(element[key]);
			cell.appendChild(text);
		}
	}
}
const age = datanom.reduce((sum, datanom) => sum + Number(datanom.age), 0);
console.log(age);

const table = document.querySelector("table")
const data = Object.keys(datanom[0])
generateTableHead(table, data)
generateTable(table, datanom)


const code = [
	{'name': 'john', langs: ['HTML','CSS']},
	{'name': 'jack', langs: ['HTML','JavaScript','Python','TypeScript']},
	{'name': 'diane', langs: ['Javascript','PHP']}
];

for (let i = 0; i < code.length; i++) {
	const elem = code[i];
	for (let x = 0; x < elem['langs'].length; x++) {
		console.log(elem['langs'][x]);
	}
}
printedLangs = [];
for (let i = 0; i < code.length; i++) {
	const elem = code[i];
	for (let x = 0; x < elem['langs'].length; x++) {
		const lang = elem['langs'][x];
		if (!printedLangs.includes(lang.toLowerCase())) {
			printedLangs.push(lang.toLowerCase());
			console.log(lang);
		}
	}
}




