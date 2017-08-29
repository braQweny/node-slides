let test1 = {
	prop1: 1,
	prop2: 2,
	prop3: [5, 6]
};
let {prop2: newProp1, prop3: [nestedProp3]} = test1;
console.log(newProp1, nestedProp3);


