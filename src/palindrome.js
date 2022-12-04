function reverse(s) {
	return s.split("").reverse().join("");
}

function palindrome(stri) {
	return stri === reverse(stri);
}

module.exports = palindrome;
