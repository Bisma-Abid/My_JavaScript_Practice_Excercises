import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export function isWeekened(date){
 let today = dayjs();
 const DayJs = today.add(date, 'day');
   let CheckDayOfWeek = DayJs.format('dddd');

   return CheckDayOfWeek;
}
