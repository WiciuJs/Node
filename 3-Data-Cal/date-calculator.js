const moment = require('moment');

function addDays(date, days) {
  const parsedDate = moment(date, 'YYYY-MM-DD');
  const newDate = parsedDate.add(days, 'days');
  return newDate.format('YYYY-MM-DD');
}

function daysDiff(start, end) {
  const startDate = moment(start, 'YYYY-MM-DD');
  const endDate = moment(end, 'YYYY-MM-DD');
  const diff = endDate.diff(startDate, 'days');
  return diff;
}

module.exports = {
  addDays,
  daysDiff
};