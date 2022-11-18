// Current Date
let currentDate = new Date();
console.log(currentDate);
// Set Date in Day cell
let dayCell = document.querySelector('.current-day').innerHTML = currentDate.toLocaleDateString('en', {	day: 'numeric' });

// Set Date in Month Selector
let monthSelector = document.querySelector('.calendar__current-date').innerHTML = currentDate.toLocaleString('en', { month: 'long', year: 'numeric' });

// Date in Numeric Format
let numericFormat = currentDate.toLocaleString('en', { month: 'numeric', year: 'numeric' });

const setPrevMonth = (str) => {
	// console.log(str);
	let prevMonth;
	let currentYear;
	numericFormat.split('/'); // ['11', '2022']

	if (numericFormat[0] === '1') {
		prevMonth = 12;
		currentYear -= 1;
	} else {
		prevMonth = numericFormat[0] - 1;
		currentYear = numericFormat[2];
	}
	currentDate = new Date([Number(currentYear), Number(prevMonth)]).toLocaleString('en', { month: 'numeric', year: 'numeric' });
	console.log(currentDate);
};

const setNextMonth = (str) => {
	let nextMonth;
	let currentYear;
	str.split('/');

	if (str[0] === '12') {
		nextMonth = 1;
		currentYear += 1;
	} else {
		nextMonth = str[0] + 1;
		currentYear = str[2];
	}
	currentDate = new Date([Number(currentYear), Number(nextMonth)]).toLocaleString('en', { month: 'numeric', year: 'numeric' });
	console.log(currentDate);
};


const buttonPrev = document.querySelector('.prev-month');
const buttonNext = document.querySelector('.next-month');

buttonPrev.addEventListener('click', () => {
	setPrevMonth();
	console.log('prev check');
});

buttonNext.addEventListener('click', () => {
	setNextMonth();	
	console.log('next check');
});
