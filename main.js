// ZMIENNE

// funkcje samowywołuące
// (function () {
// 	var name = 'Seba'
// 	console.log(name)
// })()

// (function () {
// 	let firstName = 'Pawel';
// 	let lastName;
//
// 	if (false) {
// 		lastName = 'Nowak'
// 	}
//
// 	var fullName = `${firstName} ${lastName}`;
//
// 	console.log(fullName)
//
// })()

// (function () {
// 	const person = {
// 		firstName: 'Kamil',
// 		lastName: 'Kowal'
// 	}
// 	person.firstName = "Zbyszek"
// 	console.log(person)
//
// })()

// (function () {
//
// 	let arr = []
//
// 	for (var i = 0; i < 10; i++) {
// 		arr.push(function () {
// 			console.log('Wartosc i = ' + i)
// 		})
//
// 	}
// 	arr.forEach(fn => {
// 		fn()
// 	})
// })()

// ARGUMENTY DOMYŚLNE
// function multiply(number, multiplyBy = 2) {
//
// 	// multiplyBy = multiplyBy || 2;
// 	// multiplyBy = multiplyBy === undefined ? 2 : multiplyBy;
//
// 	return number * multiplyBy;
//
// }
//
// function getCountryCode(country, code = country.toUpperCase().slice(0, 3)) {
//
// 	console.log("Wykonuję funkcję getCountryCode");
//
// 	return {
// 		country,
// 		code
// 	};
//
// }
//
// function getCountryInfo(countryInfo = getCountryCode("Polska")) {
// 	return "Państwo to " + countryInfo.country + ", a jego kod to " + countryInfo.code;
// }

//REST

// function calculate(type, ...args) {
//
// 	// let args = [].slice.call(arguments, 1);
//
// 	let calculations = {
// 		sum: (prevVal, val) => prevVal + val,
// 		multiply: (prevVal, val) => prevVal * val
// 	};
//
// 	return args.reduce(calculations[type]);
//
// }
//
// console.log( calculate("sum", 2, 22, 3, 7, 13) );
// console.log( calculate("multiply", 2, 22, 3, 7, 13) );
//SPREAD

// let numbers = [12, 3, 9, 22, 11, 6];
//
// // console.log( Math.max.apply(Math, numbers) );
// console.log( Math.max(...numbers) );
//
// let numbers2 = [2, 33, 10, ...numbers, 1, 75];
//
// console.log( [...numbers2, ...numbers, 100] );
//
// function strToArray(string = "") {
// 	return [...string];
// }
//
// console.log( strToArray() );

// //DEKOMPOZYCJA
// // obiekty
// let person = {
// 	firstName: "Jan",
// 	lastName: "Kowalski",
// 	age: 49
// };
//
// // let firstName = person.firstName,
// //     lastName = person.lastName,
// //     age = person.age;
//
// function getData() {
// 	return null;
// }
//
// // let fName, lastName, age;
// //
// // ({ firstName: fName, lastName, age } = person);
// //
// // // let { firstName: fName, lastName, age } = person;
//
// let {firstName:fName,lastName,age} = person;
//
// console.log(fName, lastName, age);

// //DEKOMPOZYCJA
// // tablice
//
// let numbers = [10, 20, 30, 40, 50];
//
// // let first = numbers[0],
// //     second = numbers[1];
//
// let first, second, fourth;
//
// [first, second, , fourth] = numbers || [];
//
// console.log(first, second, fourth);
//
// let a = 1,
// 	b = 2;
//
// console.log(a, b);
//
// // let temp = a;
//
// // a = b;
// // b = temp;
//
// [a, b] = [b, a];
//
// console.log(a, b);

//DEKOMPOZYCJA
// zlozone

// let person = {
// 	firstName: 'Jan',
// 	lastName: 'Kowalski',
// 	age: 49,
// 	job: {
// 		name: 'Programista',
// 		experience: 20
// 	},
// 	favNumbers: {
// 		list: [2, 7, 3]
// 	}
// }
//
// let {
// 	firstName: fName, age, job: {
// 		name: jobName, experience: jobExperience
// 	}, favNumbers: {
// 		list: [, second,]
// 	}
// } = person
//
// console.log(fName, age, jobName, jobExperience, second)

//LAMBDA

// let getName = function() {
//     return "Jan";
// };

// let getName = () => "Jan";

// let getName = function(kid) {
//     if(kid) {
//         return "Jaś";
//     } else {
//         return "Jan";
//     }
// };

// let getName = kid => {
//     if(kid) {
//         return "Jaś";
//     } else {
//         return "Jan";
//     }
// };

// let getObject = function() {
//     return {firstName: "Jan"};
// }

// let getObject = () => ({firstName: "Jan"});

// let arr = [10, 22, 12, 4, 0, 67, 34];
//
// // let gt20 = arr.filter(function(value) {
// //     return value > 20;
// // });
//
// let gt20 = arr.filter(value => value > 20);
//
// console.log(gt20);

// KLASY

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.sayHello = function() {
//     return this.firstName + " " + this.lastName;
// };

// function Employee(firstName, lastName, position) {
//     Person.call(this, firstName, lastName);
//     this.position = position;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.sayHello = function() {
//     var name = Person.prototype.sayHello.call(this);

//     return "Nazywam się " + name + " i pracuję jako " + this.position + ".";
// };

// var employee1 = new Employee("Jan", "Kowalski", "programista");

// console.log( employee1.sayHello() );

// class Person {
//
// 	constructor (firstName, lastName) {
// 		this.firstName = firstName
// 		this.lastName = lastName
// 	}
//
// 	sayHello () {
// 		return `${this.firstName} ${this.lastName}`
// 	}
//
// }
//
// class Employee extends Person {
//
// 	// constructor(...args) {
// 	//     super(...args);
// 	// }
//
// 	constructor (firstName, lastName, position) {
// 		super(firstName, lastName)
// 		this.position = position
// 	}
//
// 	sayHello () {
// 		return `Nazywam się ${super.sayHello()} i pracuję jako ${this.position}.`
// 	}
//
// }

// let employee1 = new Employee('Jan', 'Kowalski', 'programista')


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello = function() {
    return this.firstName + " " + this.lastName;
};

function Employee(firstName, lastName, position) {
    Person.call(this, firstName, lastName);
    this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.sayHello = function() {
    var name = Person.prototype.sayHello.call(this);

    return "Nazywam się " + name + " i pracuję jako " + this.position + ".";
};

var employee1 = new Employee("Jan", "Kowalski", "programista");

console.log( employee1.sayHello() );
