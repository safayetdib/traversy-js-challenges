function calculator(a, b, operator) {
	let result;

	switch (operator) {
		case '+':
			result = a + b;
			break;
		case '-':
			result = a - b;
			break;
		case '*':
			result = a * b;
			break;
		case '/':
			result = a / b;
			break;
		default:
			throw new 'Invalid operator'();
	}

	return result;
}

module.exports = calculator;
