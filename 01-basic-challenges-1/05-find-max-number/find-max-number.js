// function findMaxNumber(arr) {
// 	return Math.max(...arr);
// }

const findMaxNumber = (arr) => {
	let max = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	return max;
};

module.exports = findMaxNumber;
