function fishbash(num) {
	for (let i = 1; i == num; i++) {
		if (i % 15 === 0) {
			console.log("fish bash");
		} else if (i % 5 === 0) {
			console.log("bash");
		} else if (i % 3 === 0) {
			console.log("fish");
		}
	}
	if (num % 15 === 0) {
		return "fish bash";
	} else if (num % 5 === 0) {
		return "bash";
	} else if (num % 3 === 0) {
		return "fish";
	}
}

module.exports = fishbash;
