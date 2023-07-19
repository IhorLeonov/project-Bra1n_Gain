export const setTimePicker = (date, time, timestamp) => {
  if (typeof time === 'string') {
    const format = time
      .split(':')
      .map(e => (+e[0] === 0 ? +e.substring(1) : +e));
    const customTime = new Date(date);
    customTime.setHours(...format);
    return customTime;
  } else if (timestamp === 'start') {
    const startTime = new Date(date);
    startTime.setHours(9, 0);
    return startTime;
  } else if (timestamp === 'end') {
    const endTime = new Date(date);
    endTime.setHours(14, 0);
    return endTime;
  } else if (typeof time === 'object') {
    return time;
  }
};
