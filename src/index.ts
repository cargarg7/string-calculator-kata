const RADIX = 10;
const BEGIN_SPLIT_SEPARATOR = '//';
const SPLIT_SEPARATOR = '/';
const DEFAULT_SEPARATOR = ',';
const regex = /(?!^\d+$)^.+$/;

const VALUES_BY_SEPARATOR = {
	DEFAULT_SEPARATOR: (stringOfValues: string): string[] => stringOfValues.split(DEFAULT_SEPARATOR),
	CUSTOM_SEPARATOR: (stringOfValues: string): string[] => {
		const separator = stringOfValues.slice(BEGIN_SPLIT_SEPARATOR.length, stringOfValues.lastIndexOf(SPLIT_SEPARATOR));
		return stringOfValues.slice(stringOfValues.lastIndexOf(SPLIT_SEPARATOR) + 1).split(separator);
	},
};

function isCustomSeparator(stringOfValues: string): boolean {
	return stringOfValues.startsWith(BEGIN_SPLIT_SEPARATOR);
}

export function stringCalculator(stringOfValues?: string): number {
	if (!stringOfValues) return 0;

	const getValuesFn = isCustomSeparator(stringOfValues)
		? VALUES_BY_SEPARATOR.CUSTOM_SEPARATOR
		: VALUES_BY_SEPARATOR.DEFAULT_SEPARATOR;
	return getValuesFn(stringOfValues).reduce(
		(acc: number, value: string) => (acc += regex.test(value) ? 0 : Number.parseInt(value, RADIX)),
		0
	);
}
