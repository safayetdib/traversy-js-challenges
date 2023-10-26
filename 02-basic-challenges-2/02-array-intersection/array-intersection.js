// function arrayIntersection(arr1, arr2) {
// 	const newArr = [];
// 	for (i = 0; i < arr1.length; i++) {
// 		if (arr2.includes(arr1[i]) && !newArr.includes(arr1[i]))
// 			newArr.push(arr1[i]);
// 	}
// 	return newArr;
// }

function arrayIntersection(arr1, arr2) {
	const intersectionArr = [];
	const set1 = new Set(arr1);

	for (let num of arr2) {
		if (set1.has(num)) intersectionArr.push(num);
	}
	return intersectionArr;
}

module.exports = arrayIntersection;
