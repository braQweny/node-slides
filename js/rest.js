function rest(name1, name2, ...others) {
	console.log(name1);
	console.log(name2);
	console.log(typeof others);
	console.log(Array.isArray(others));
	console.log(others);
}
rest('Kasia', 'Kamil', 'Bogdan' );
