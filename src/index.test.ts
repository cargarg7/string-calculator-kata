import { stringCalculator } from './index';

describe('String Calculator', () => {
	it('Should not sum if get null or empty string', () => {
		expect(stringCalculator()).toBe(0);
		expect(stringCalculator('')).toBe(0);
	});

	it('Should sum if get a valid string number', () => {
		expect(stringCalculator('1')).toBe(1);
	});

	it('Should sum if get a valid string number list separated by separator (, by default)', () => {
		expect(stringCalculator('1,2')).toBe(3);
		expect(stringCalculator('1,2,3')).toBe(6);
	});

	it('Should not sum if get an invalid string number list separated by separator (, by default)', () => {
		expect(stringCalculator('a')).toBe(0);
		expect(stringCalculator('1,a')).toBe(1);
		expect(stringCalculator('1,a,2')).toBe(3);
		expect(stringCalculator('1a,2')).toBe(2);
	});

	it('Should sum if get a valid string number list separated by custom separator', () => {
		expect(stringCalculator('//#/3#2')).toBe(5);
		expect(stringCalculator('//#/3,2')).toBe(0);
		expect(stringCalculator('//%/1%2%3')).toBe(6);
	});
});
