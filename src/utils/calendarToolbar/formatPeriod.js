export const formatPeriod = (date, type) => {
  const options = {};
  let formattedDate = '';

  if (type === 'month') {
    options.month = 'long';
    options.year = 'numeric';
    formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  } else if (type === 'day') {
    options.day = 'numeric';
    options.month = 'short';
    options.year = 'numeric';
    const newDate = new Intl.DateTimeFormat('en-US', options).format(date);
    const year = newDate.split(",")[1];
    const dayMonth = newDate.split(",")[0].split(" ").reverse().join(" ");
    formattedDate = `${dayMonth}${year}`
  }

  return formattedDate;
}