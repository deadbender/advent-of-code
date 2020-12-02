function sum_of_multiples(numbers, target, partial) {
	partial = [];
	
	s = partial.reduce(function (a,b) {
		return a + b;
	}, 0);
	
	if(s === target) {
		console.log(`${partial.join('+')}=${target}`);
	}
	
	if (s>=target) {
		return;
	}
	
	for(var i = 0; i < numbers.length; i++) {
		const n = numbers[i];
		const remaining = numbers.slice(i+1);
		sum_of_multiples(remaining, target, partial.concat([n]));
	}
}

const inputs = []

sum_of_multiples(inputs, 2020)
