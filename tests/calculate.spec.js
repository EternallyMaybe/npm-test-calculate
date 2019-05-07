const c = require('../src/calculate');

beforeAll(() => {
	console.log('beforeAll');
});

beforeEach(() => {
	console.log('beforeEach');
});

afterEach(() => {
	console.log('afterEach');
});

afterAll(() => {
	console.log('afterAll');
});

test('adds 1 + 2 to equal 3', () => {
	expect(c.add(1, 2)).toBe(3);
})
test('substracts 2 - 1 to equal 1', () => {
	expect(c.substract(2, 1)).toBe(1);
})
test('multiply 1 * 2 to equal 2', () => {
	expect(c.multiply(1, 2)).toBe(2);
})
test('divides 1 / 2 to equal 0.5', () => {
	expect(c.divide(1, 2)).toBe(0.5);
})

