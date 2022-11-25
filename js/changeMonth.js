export const setPrevMonth = (str) => {
	let prevMonth;
	let dateArr = numericFormat.split('/'); // ['11', '2022']
	let month = Number(dateArr[0]);
	let year = Number(dateArr[1]);

	if (month === 1) {
		prevMonth = 12;
		currentYear = Number(currentYear) - 1;
	} else {
		prevMonth = month - 1;
		currentYear = year;
	}
	currentDate = new Date([currentYear, prevMonth]).toLocaleString('en', { month: 'numeric', year: 'numeric' });
	console.log(`prevMonth: ${prevMonth} \ncurrenYear: ${currentYear} \ncurrentDate: ${currentDate}`);
};
export const setNextMonth = (str) => {
	let nextMonth;
	let dateArr = numericFormat.split('/'); // ['11', '2022']
	let month = Number(dateArr[0]);
	let year = Number(dateArr[1]);

	if (month === 12) {
		nextMonth = 1;
		currentYear = Number(currentYear) + 1;
	} else {
		nextMonth = month + 1;
		currentYear = year;
	}
	currentDate = new Date([currentYear, nextMonth]).toLocaleString('en', { month: 'numeric', year: 'numeric' });
	console.log(`nextMonth: ${nextMonth} \ncurrenYear: ${currentYear} \ncurrentDate: ${currentDate}`);
};
