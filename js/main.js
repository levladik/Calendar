// Current Date
let currentDate = new Date();

// Set Date in Day cell
const setCurrentDay = (date) => {
	document.querySelector('.current-day').innerHTML = date.toLocaleDateString('en', {day: 'numeric'});
}

// Set Date in Month Selector

const setCurrentMonth = (date) => { document.querySelector('.calendar__current-date').innerHTML = date.toLocaleString('en', { month: 'long', year: 'numeric' }); }

setCurrentMonth(currentDate);

// Date in Numeric Format

// Just Current Year
let currentYear = currentDate.toLocaleString('en', { year: 'numeric' });

const setPrevMonth = () => {
	let prevMonth;
	let numericFormat = currentDate.toLocaleString('en', { month: 'numeric', year: 'numeric' });
	let dateArr = numericFormat.split('/'); // ['11', '2022']
	let month = Number(dateArr[0]) - 1;
	let year = Number(dateArr[1]);

	if (month === 0) {
		prevMonth = 11;
		currentYear = Number(currentYear) - 1;
	} else {
		prevMonth = month - 1;
		currentYear = year;
	}
	currentDate = new Date(currentYear, prevMonth);

	setCurrentDay(currentDate);
	setCurrentMonth(currentDate);
	console.log(`prevMonth: ${prevMonth} \ncurrenYear: ${currentYear} \ncurrentDate: ${currentDate}`);
};

const setNextMonth = () => {
	let nextMonth;
	let numericFormat = currentDate.toLocaleString('en', { month: 'numeric', year: 'numeric' });
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
	currentDate = new Date(currentYear, nextMonth);
	console.log(`nextMonth: ${nextMonth} \ncurrenYear: ${currentYear} \ncurrentDate: ${currentDate}`);
};

const buttonPrev = document.querySelector('.prev-month');
const buttonNext = document.querySelector('.next-month');

buttonPrev.addEventListener('click', (e) => {
	e.preventDefault();
	console.log('addEventListener', currentDate)
	setPrevMonth();
});

buttonNext.addEventListener('click', () => {
	setNextMonth();
});