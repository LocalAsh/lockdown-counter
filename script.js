
let startDate = new Date('27 March 2020');
let todayDate = new Date();

let startDateParagraph = document.createElement('p');
startDateParagraph.innerHTML = startDate.toDateString();
document.getElementById('start_date').appendChild(startDateParagraph);

let todayDateParagraph = document.createElement('p');
todayDateParagraph.innerHTML = todayDate.toDateString();
document.getElementById('today_date').appendChild(todayDateParagraph);

let Difference_In_Time = todayDate.getTime() - startDate.getTime();
let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

let results = Math.round(Difference_In_Days);

// number of days since the lockdown started
days.innerHTML += results;
