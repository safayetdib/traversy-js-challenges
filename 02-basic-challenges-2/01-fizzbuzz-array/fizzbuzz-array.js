function fizzBuzzArray(num) {
	const result = [];
	for (let i = 1; i <= num; i++) {
		if (i % 15 === 0) {
			result.push('FizzBuzz');
		} else if (i % 3 === 0) {
			result.push('Fizz');
		} else if (i % 5 === 0) {
			result.push('Buzz');
		} else {
			result.push(i);
		}
	}
	return result;
}

module.exports = fizzBuzzArray;
