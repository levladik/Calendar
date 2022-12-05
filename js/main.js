// Current Date
const date = {

	value: new Date(),

	get currentDate() {
		return this.value;
	},

	set currentDate(newValue) {
		this.value = newValue;
	}
}

// Set Date in Day cell
const setDay = (date) => {	document.querySelector('.current-day').innerHTML = date.getDate() };
setDay(date.currentDate);	

// Set Date in Month Selector
const setMonthYear = (date) => {
	const month = date.toLocaleString('en', { month: 'long' });
	const year = date.getFullYear();
	document.querySelector('.calendar__current-date').innerHTML = `${month} ${year}`;
};
setMonthYear(date.currentDate);

// Current Year Only
const setYear = (date) => { date.getFullYear() };
let currentYear = setYear(new Date());

const setPrevMonth = (date) => {
	let prevMonth;
	let month = date.currentDate.getMonth();
	let year = date.currentDate.getFullYear();

	if (month === 1) {
		prevMonth = 12;
		currentYear = currentYear - 1;
	} else {
		prevMonth = month - 1;
		currentYear = year;
	}
	date.currentDate = new Date(currentYear, prevMonth, date.currentDate.getDate());
	setDay(date.currentDate);
	setMonthYear(date.currentDate);
};
const setNextMonth = (date) => {
	let nextMonth;
	let month = date.currentDate.getMonth();
	let year = date.currentDate.getFullYear();

	if (month === 12) {
		nextMonth = 1;
		currentYear = currentYear + 1;
	} else {
		nextMonth = month + 1;
		currentYear = year;
	}
	date.currentDate = new Date(currentYear, nextMonth, date.currentDate.getDate());
	setDay(date.currentDate);
	setMonthYear(date.currentDate);
};

const buttonPrev = document.querySelector('.prev-month');
const buttonNext = document.querySelector('.next-month');

buttonPrev.addEventListener('click', () => {
	setPrevMonth(date);
});

buttonNext.addEventListener('click', () => {
	setNextMonth(date);
});