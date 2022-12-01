// Current Date
let currentDate = new Date();
// Current Year Only
const setYear = (date) => { date.getFullYear() };
let currentYear = setYear(new Date());

export const setPrevMonth = (str) => {
	let prevMonth;
	let month = currentDate.getMonth();
	let year = currentDate.getFullYear();

	if (month === 1) {
		prevMonth = 12;
		currentYear = currentYear - 1;
	} else {
		prevMonth = month - 1;
		currentYear = year;
	}
	currentDate = new Date(currentYear, prevMonth, currentDate.getDate());
	setDay(currentDate);
	setMonthYear(currentDate);
};

export const setNextMonth = (str) => {
	let nextMonth;
	let month = currentDate.getMonth();
	let year = currentDate.getFullYear();

	if (month === 12) {
		nextMonth = 1;
		currentYear = currentYear + 1;
	} else {
		nextMonth = month + 1;
		currentYear = year;
	}
	currentDate = new Date(currentYear, nextMonth, currentDate.getDate());
	setDay(currentDate);
	setMonthYear(currentDate);
};