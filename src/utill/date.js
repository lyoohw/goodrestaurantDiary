export const getStringDate = (date) => {
  const offset = date.getTimezoneOffset() * 60000;
  const dateOffset = new Date(date.getTime() - offset);
  return dateOffset.toISOString().slice(0, 10);
};
