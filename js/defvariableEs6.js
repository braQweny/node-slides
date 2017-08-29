function createAccount(name, age = 18, address, nationality = 'Polish') {
	return {
		name,
		age,
		address,
		nationality
	};
}

console.log(createAccount('Bogdan', undefined, 'Droga 25'));
