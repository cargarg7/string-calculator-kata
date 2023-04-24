import { BEGIN_SPLIT_SEPARATOR, SPLIT_SEPARATOR, DEFAULT_SEPARATOR } from '../separators/enums';

export const VALUES_BY_SEPARATOR = {
	DEFAULT_SEPARATOR: (stringOfValues: string): string[] => stringOfValues.split(DEFAULT_SEPARATOR),
	CUSTOM_SEPARATOR: (stringOfValues: string): string[] => {
		const separator = stringOfValues.slice(BEGIN_SPLIT_SEPARATOR.length, stringOfValues.lastIndexOf(SPLIT_SEPARATOR));
		return stringOfValues.slice(stringOfValues.lastIndexOf(SPLIT_SEPARATOR) + 1).split(separator);
	},
} as const;
