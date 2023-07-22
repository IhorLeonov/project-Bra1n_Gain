export const formatPeriod = (date, type, languageValue) => {

  const options = {};
  let formattedDate = '';

  if (type === 'month') {
    options.month = 'long';
    options.year = 'numeric';
    if (languageValue === "en") {
      formattedDate = new Intl.DateTimeFormat('en-UK', options).format(date);
    }
    else {
      formattedDate = new Intl.DateTimeFormat('uk-UA', options).format(date);
    }

  } else if (type === 'day') {
    options.day = 'numeric';
    options.month = 'short';
    options.year = 'numeric';
    if (languageValue === "en") {
      formattedDate = new Intl.DateTimeFormat('en-UK', options).format(date);
    }
    else {
      const newDate = new Intl.DateTimeFormat('uk-UA', options).format(date);
      const year = newDate.split(".")[1].slice(1, 5);
      const dayMonth = newDate.split(".")[0];
      formattedDate = `${dayMonth} ${year}`
    }
  }

  return formattedDate;
}