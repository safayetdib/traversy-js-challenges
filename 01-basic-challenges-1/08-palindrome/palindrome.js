// function isPalindrome(str) {
// 	const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
// 	const reversedStr = formattedStr.split('').reverse().join('');
// 	return formattedStr === reversedStr;
// }

function isPalindrome(str) {
	const formattedStr = removeAlphaNumeric(str.toLowerCase());
	const reversed = reversedStr(formattedStr);
	return formattedStr === reversed;
}

function removeAlphaNumeric(str) {
	let formattedStr = '';
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (isAlphaNumeric(char)) {
			formattedStr += char;
		}
	}
	return formattedStr;
}

function isAlphaNumeric(char) {
	const code = char.charCodeAt(0);
	return (
		(code >= 48 && code <= 57) || // numbers 0-9
		(code >= 97 && code <= 122) // lowercase a-z
	);
}

function reversedStr(str) {
	let reversed = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed;
}

module.exports = isPalindrome;
