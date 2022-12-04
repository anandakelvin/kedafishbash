const palindrome = require("./palindrome");
test("Jika input adalah racecar, maka true", () => {
	expect(palindrome("racecar")).toBe(true);
});
test("Jika input adalah ayam, maka false", () => {
	expect(palindrome("ayam")).toBe(false);
});
