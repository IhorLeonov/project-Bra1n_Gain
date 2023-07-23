import {isBefore, isAfter } from 'date-fns';

export const hoursСomparison = (date1, date2) => {
  if (isBefore(date1, date2)) {
    return {status: true, message: "ok"}
  }
  if (isAfter(date1, date2)) {
    return {status:false,  message:"Incorect time 'start' less or equal time 'end'"}
  }

}