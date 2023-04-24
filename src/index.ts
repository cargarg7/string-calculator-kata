const RADIX = 10;
const SPLIT_SEPARATOR = '/';
const DEFAULT_SEPARATOR = ',';
const regex = /(?!^\d+$)^.+$/;

/**
 *    "//%/1%2%3"
 *      Separator => %
 *      Numbers => 1%2%3
 **/
function getValues(stringOfValues) {
	const valuesWithCustomSeparator = stringOfValues.split(SPLIT_SEPARATOR);
	const separator = valuesWithCustomSeparator.length > 2 ? valuesWithCustomSeparator[2] : DEFAULT_SEPARATOR;
	const valuesFormatted =
		valuesWithCustomSeparator.length > 2 ? valuesWithCustomSeparator[3] : valuesWithCustomSeparator[0];
	return valuesFormatted.split(separator);
}

export function stringCalculator(stringOfValues?: string): number {
	if (!stringOfValues) return 0;

	const values = getValues(stringOfValues);
	return values.reduce(
		(acc: number, value: string) => (acc += regex.test(value) ? 0 : Number.parseInt(value, RADIX)),
		0
	);
}
