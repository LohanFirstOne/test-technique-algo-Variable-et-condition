function givePassword(motdepasse) {
	if (motdepasse === "sudo") {
		return "vous etes autoriser a rentrer";
	} else {
		return "non mais ca va pas ou quoi";
	}
}

console.log(givePassword("sudo"));
console.log(givePassword("qwerty"));
