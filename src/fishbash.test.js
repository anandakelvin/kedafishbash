const fishbash = require("./fishbash");
test("Jika habis dibagi 3, tampilkan fish", () => {
	expect(fishbash(3)).toBe("fish");
});
test("Jika habis dibagi 5, tampilkan bash", () => {
	expect(fishbash(5)).toBe("bash");
});
test("Jika habis dibagi 15, tampilkan fish bash", () => {
	expect(fishbash(15)).toBe("fish bash");
});
