export const getFullYearFromDateString = (date) => {
  if(date) {
    const d = new Date(date);
    return d.getFullYear();
  }

  return 'Unknown';
};

export const getPercentagePopularity = (popularity) => {
  if(popularity) {
    return `${Math.round(popularity)}%`;
  }
  return '0%';
};

export const  getHourStringFromMinute = (minutes) => {
  const hour = Math.round(minutes/60) === 0 ? '': Math.round(minutes/60);
  const min = minutes%60;

  const hourStr =  hour ? `${hour}h` : '';
  const minStr = `${min} min`;

  return `${hourStr}  ${minStr}`;
};