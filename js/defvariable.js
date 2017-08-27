function createAccount(name, age, address, nationality) {
	age = age || 18;
	nationality = nationality || 'Polish';

	return {
		name: name,
		age: age,
		address: address,
		nationality: nationality
	};
}
console.log(createAccount('Bogdan', null, 'Droga 25'));
