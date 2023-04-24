import { RADIX, JUST_NUMBERS_REGEX } from './numbers/enums';
import { VALUES_BY_SEPARATOR } from './numbers';
import { isCustomSeparator } from './separators';

export function stringCalculator(stringOfValues?: string): number {
	if (!stringOfValues) return 0;

	const getValuesFn = isCustomSeparator(stringOfValues)
		? VALUES_BY_SEPARATOR.CUSTOM_SEPARATOR
		: VALUES_BY_SEPARATOR.DEFAULT_SEPARATOR;
	return getValuesFn(stringOfValues).reduce(
		(acc: number, value: string) => (acc += JUST_NUMBERS_REGEX.test(value) ? 0 : Number.parseInt(value, RADIX)),
		0
	);
}
