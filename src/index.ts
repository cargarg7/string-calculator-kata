import { VALUES_BY_SEPARATOR, sanitizeValue } from './numbers';
import { isCustomSeparator } from './separators';

export function stringCalculator(stringOfValues?: string): number {
	if (!stringOfValues) return 0;

	const getValuesFn = isCustomSeparator(stringOfValues)
		? VALUES_BY_SEPARATOR.CUSTOM_SEPARATOR
		: VALUES_BY_SEPARATOR.DEFAULT_SEPARATOR;
	return getValuesFn(stringOfValues).reduce((acc: number, value: string) => (acc += sanitizeValue(value)), 0);
}
