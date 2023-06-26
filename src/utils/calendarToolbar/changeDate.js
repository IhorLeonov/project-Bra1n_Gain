export const changeDate = (date, num, type) => {
  const modifiedDate = new Date(date);
  if (type === 'month') {
    modifiedDate.setMonth(modifiedDate.getMonth() + num);
    return modifiedDate;
  }
  if (type === 'day') {
    modifiedDate.setDate(modifiedDate.getDate() + num);
    return modifiedDate;
  }
};
