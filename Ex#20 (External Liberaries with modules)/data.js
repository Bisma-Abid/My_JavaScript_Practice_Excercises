import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { isWeekened as randomDay } from './isweekend.js';

const today = dayjs();
const afterFiveDays = today.add(5,'days');
let FivedaysAfterDateWillBe = afterFiveDays.format('MMMM D');

document.querySelector('.js-day').innerHTML = FivedaysAfterDateWillBe;


const afterOneMonth = today.add(1,'month');
let OneMonthAfterDateWillBe = afterOneMonth.format('MMMM D');

document.querySelector('.js-month').innerHTML = OneMonthAfterDateWillBe;

const subtractOneMonth = today.subtract(1,'month');
let OneMonthBeforeDateWillBe = subtractOneMonth.format('MMMM D');

document.querySelector('.js-minus-month').innerHTML = OneMonthBeforeDateWillBe;

const Today = today.format('dddd');

document.querySelector('.js-today').innerHTML = Today;


document.querySelector('.js-week').innerHTML = `${randomDay(4)}`;