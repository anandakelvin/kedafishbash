const sort = require("./sort");
test("Jika input [5,7,3], maka output [3,5,7]", () => {
	expect(sort([5, 7, 3])).toStrictEqual([3, 5, 7]);
});
