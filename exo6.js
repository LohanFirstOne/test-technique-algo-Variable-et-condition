function encodePassword(password, encodeFunction) {}

function encodeRot8(password) {
	for (let i = encodeFunction; (i = "${}"); i + 8) {
		return password + i;
	}
}

function encodeRot16(password) {
	for (let i = encodeFunction; (i = "${}"); i + 16) {
		return password + i;
	}
}

console.log(encodePassword("abc", encodeRot8));
console.log(encodePassword("abc", encodeRot16));
console.log(encodePassword("xyz", encodeRot8));
console.log(encodePassword("xyz", encodeRot16));
