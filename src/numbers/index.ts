import { RADIX, JUST_NUMBERS_REGEX } from './enums';
import { BEGIN_SPLIT_SEPARATOR, SPLIT_SEPARATOR, DEFAULT_SEPARATOR } from '../separators/enums';

export const VALUES_BY_SEPARATOR = {
	DEFAULT_SEPARATOR: (stringOfValues: string): string[] => stringOfValues.split(DEFAULT_SEPARATOR),
	CUSTOM_SEPARATOR: (stringOfValues: string): string[] => {
		const from = BEGIN_SPLIT_SEPARATOR.length;
		const until = stringOfValues.lastIndexOf(SPLIT_SEPARATOR);
		const separator = stringOfValues.slice(from, until);
		return stringOfValues.slice(until + 1).split(separator);
	},
} as const;

export function sanitizeValue(value: string): number {
	return JUST_NUMBERS_REGEX.test(value) ? 0 : Number.parseInt(value, RADIX);
}
