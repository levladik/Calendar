// Current Date
let currentDate = new Date();

// Set Date in Day cell
const setDay = (date) => { document.querySelector('.current-day').innerHTML = date.getDate() };
setDay(currentDate);	

// Set Date in Month Selector
const setMonthYear = (date) => {
	const month = date.toLocaleString('en', { month: 'long' });
	const year = date.getFullYear();
	document.querySelector('.calendar__current-date').innerHTML = `${month} ${year}`;
};
setMonthYear(currentDate);

// Current Year Only
const setYear = (date) => { date.getFullYear() };
let currentYear = setYear(new Date());

const setPrevMonth = (str) => {
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
const setNextMonth = (str) => {
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

const buttonPrev = document.querySelector('.prev-month');
const buttonNext = document.querySelector('.next-month');

buttonPrev.addEventListener('click', () => {
	setPrevMonth();
});

buttonNext.addEventListener('click', () => {
	setNextMonth();
});