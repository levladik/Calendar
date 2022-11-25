// Current Date
let currentDate = new Date();

// Set Date in Day cell
let dayCell = document.querySelector('.current-day').innerHTML = currentDate.toLocaleDateString('en', {	day: 'numeric' });

// Set Date in Month Selector
let monthSelector = document.querySelector('.calendar__current-date').innerHTML = currentDate.toLocaleString('en', { month: 'long', year: 'numeric' });

// Date in Numeric Format
let numericFormat = currentDate.toLocaleString('en', { month: 'numeric', year: 'numeric' });

// Just Current Year
let currentYear = currentDate.toLocaleString('en', { year: 'numeric' });

const setPrevMonth = (str) => {
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

const setNextMonth = (str) => {
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

const buttonPrev = document.querySelector('.prev-month');
const buttonNext = document.querySelector('.next-month');

buttonPrev.addEventListener('click', () => {
	setPrevMonth(numericFormat);
});

buttonNext.addEventListener('click', () => {
	setNextMonth(numericFormat);
});