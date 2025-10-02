let res = prompt("donne un truc");

function encodePassword(password, encodeFunction) {
	return encodeFunction(password);
}

function encodeRot8(password) {
	let result = "";

	for (let i = 0; i < password.length; i++) {
		const char = password[i];
		const code = char.charCodeAt(0);

		if (code >= 97 && code <= 122) {
			const newCode = ((code - 97 + 8) % 26) + 97;
			result += String.fromCharCode(newCode);
		} else if (code >= 65 && code <= 90) {
			const newCode = ((code - 65 + 8) % 26) + 65;
			result += String.fromCharCode(newCode);
		} else {
			result += char;
		}
	}

	return result;
}

function encodeRot16(password) {
	let result = "";

	for (let i = 0; i < password.length; i++) {
		const char = password[i];
		const code = char.charCodeAt(0);

		if (code >= 97 && code <= 122) {
			const newCode = ((code - 97 + 16) % 26) + 97;
			result += String.fromCharCode(newCode);
		} else if (code >= 65 && code <= 90) {
			const newCode = ((code - 65 + 16) % 26) + 65;
			result += String.fromCharCode(newCode);
		} else {
			result += char;
		}
	}

	return result;
}

console.log(encodePassword(res, encodeRot8));
console.log(encodePassword(res, encodeRot16));
console.log(encodePassword(res, encodeRot8));
console.log(encodePassword(res, encodeRot16));
