function toHours(day, hours, minutes, seconds) {
	let d1 = day * 24 * 60 * 60;
	let h1 = hours * 60 * 60;
	let m1 = minutes * 60;
	let s1 = seconds * 1;
	return d1 + h1 + m1 + s1;
}

console.log(toHours(1, 1, 4, 60));
