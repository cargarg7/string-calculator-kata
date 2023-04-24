import { BEGIN_SPLIT_SEPARATOR } from './enums';

export function isCustomSeparator(stringOfValues: string): boolean {
	return stringOfValues.startsWith(BEGIN_SPLIT_SEPARATOR);
}
