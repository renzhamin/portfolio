export const countMonths = (from: Date, to: Date = new Date()): number => {
	let months = (to.getFullYear() - from.getFullYear()) * 12;
	months += to.getMonth() - from.getMonth();
	return months;
};

export const countDays = (from: Date, to: Date = new Date()): number => {
	const diffTime = to.getTime() - from.getTime();
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return diffDays;
};

export const getPeriod = (from: Date, to: Date = new Date()): string => {
	let days = countDays(from, to);
	if (days < 1) days = 2;
	if (days < 7) return `${days} days`;
	if (days < 28) return `${Math.ceil(days / 7)} weeks`;
	const months = countMonths(from, to);
	if (months == 1) return `1 month`;
	return `${months} months`;
};

export const getMonthName = (index: number): string => {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	return monthNames[index];
};

export const useImage = (url: string, base: string): string => `${base}${url}`;

export const useTitle = (title: string, suffix: string) => `${title} | ${suffix}`;
