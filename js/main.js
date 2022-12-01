import { setPrevMonth, setNextMonth } from './changeMonth.js';

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

const buttonPrev = document.querySelector('.prev-month');
const buttonNext = document.querySelector('.next-month');

buttonPrev.addEventListener('click', () => {
	setPrevMonth();
});

buttonNext.addEventListener('click', () => {
	setNextMonth();
});